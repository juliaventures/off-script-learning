import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";
import Stripe from "https://esm.sh/stripe@14.21.0?target=deno";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") as string, {
  apiVersion: "2023-10-16",
  httpClient: Stripe.createFetchHttpClient(),
});

const cryptoProvider = Stripe.createSubtleCryptoProvider();

// Send Slack notification
async function sendSlackNotification(payload: {
  type: string;
  email?: string;
  amount?: number;
  plan?: string;
}) {
  try {
    await fetch(
      `${Deno.env.get("SUPABASE_URL")}/functions/v1/send-slack-notification`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...payload, appName: "Off Script Learning" }),
      }
    );
  } catch (error) {
    console.error("Failed to send Slack notification:", error);
  }
}

Deno.serve(async (req) => {
  const signature = req.headers.get("Stripe-Signature");

  if (!signature) {
    return new Response(JSON.stringify({ error: "No signature" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const body = await req.text();
  const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");

  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET not configured");
    return new Response(JSON.stringify({ error: "Webhook secret not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  let event: Stripe.Event;

  try {
    event = await stripe.webhooks.constructEventAsync(
      body,
      signature,
      webhookSecret,
      undefined,
      cryptoProvider
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return new Response(JSON.stringify({ error: "Invalid signature" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const supabaseAdmin = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "",
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );

  console.log(`Processing Stripe event: ${event.type}`);

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        const userId = session.metadata?.user_id;
        const plan = session.metadata?.plan || "pro";

        if (!userId) {
          console.error("No user_id in checkout session metadata");
          break;
        }

        let subscriptionId = session.subscription as string;
        let customerId = session.customer as string;
        let priceId: string | undefined;
        let currentPeriodStart: Date | undefined;
        let currentPeriodEnd: Date | undefined;

        if (subscriptionId) {
          const subscription = await stripe.subscriptions.retrieve(subscriptionId);
          priceId = subscription.items.data[0]?.price.id;
          currentPeriodStart = new Date(subscription.current_period_start * 1000);
          currentPeriodEnd = new Date(subscription.current_period_end * 1000);
        }

        await supabaseAdmin.from("subscriptions").upsert(
          {
            user_id: userId,
            plan,
            status: "active",
            stripe_subscription_id: subscriptionId,
            stripe_customer_id: customerId,
            stripe_price_id: priceId,
            current_period_start: currentPeriodStart?.toISOString(),
            current_period_end: currentPeriodEnd?.toISOString(),
          },
          { onConflict: "user_id" }
        );

        // Send Slack notification
        const customerEmail = session.customer_details?.email || session.metadata?.email;
        const amountTotal = session.amount_total ? session.amount_total / 100 : 0;
        await sendSlackNotification({
          type: "payment_success",
          email: customerEmail,
          amount: amountTotal,
          plan,
        });

        console.log(`Subscription created for user ${userId} with plan ${plan}`);
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;

        const { data: existingSub } = await supabaseAdmin
          .from("subscriptions")
          .select("user_id")
          .eq("stripe_customer_id", customerId)
          .single();

        if (!existingSub) break;

        let status: string;
        switch (subscription.status) {
          case "active":
            status = "active";
            break;
          case "trialing":
            status = "trialing";
            break;
          case "past_due":
            status = "past_due";
            break;
          case "canceled":
          case "unpaid":
            status = "cancelled";
            break;
          default:
            status = "active";
        }

        await supabaseAdmin
          .from("subscriptions")
          .update({
            status,
            current_period_start: new Date(subscription.current_period_start * 1000).toISOString(),
            current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
            cancel_at_period_end: subscription.cancel_at_period_end,
          })
          .eq("stripe_customer_id", customerId);

        console.log(`Subscription updated for customer ${customerId}: ${status}`);
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        const customerId = subscription.customer as string;

        await supabaseAdmin
          .from("subscriptions")
          .update({ status: "cancelled", cancel_at_period_end: false })
          .eq("stripe_customer_id", customerId);

        console.log(`Subscription cancelled for customer ${customerId}`);
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        const customerId = invoice.customer as string;

        await supabaseAdmin
          .from("subscriptions")
          .update({ status: "past_due" })
          .eq("stripe_customer_id", customerId);

        console.log(`Payment failed for customer ${customerId}`);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return new Response(JSON.stringify({ received: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return new Response(JSON.stringify({ error: "Webhook processing failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
