import "jsr:@supabase/functions-js/edge-runtime.d.ts";

interface SlackPayload {
  type: "new_user" | "payment_success" | "payment_failed" | "subscription_cancelled";
  email?: string;
  amount?: number;
  plan?: string;
  appName?: string;
}

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const payload: SlackPayload = await req.json();
    const webhookUrl = Deno.env.get("SLACK_WEBHOOK_URL");
    const appName = payload.appName || "Off Script Learning";

    if (!webhookUrl) {
      console.error("SLACK_WEBHOOK_URL not configured");
      return new Response(
        JSON.stringify({ error: "Slack webhook not configured" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    let message: string;
    let emoji: string;

    switch (payload.type) {
      case "new_user":
        emoji = ":tada:";
        message = `New signup on *${appName}*: ${payload.email}`;
        break;
      case "payment_success":
        emoji = ":moneybag:";
        message = `Payment received on *${appName}*: $${payload.amount} (${payload.plan}) from ${payload.email}`;
        break;
      case "payment_failed":
        emoji = ":warning:";
        message = `Payment failed on *${appName}*: ${payload.email}`;
        break;
      case "subscription_cancelled":
        emoji = ":wave:";
        message = `Subscription cancelled on *${appName}*: ${payload.email}`;
        break;
      default:
        emoji = ":bell:";
        message = `Notification from *${appName}*`;
    }

    const slackResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `${emoji} ${message}`,
        username: appName,
        icon_emoji: emoji,
      }),
    });

    if (!slackResponse.ok) {
      throw new Error(`Slack API error: ${slackResponse.status}`);
    }

    console.log(`Slack notification sent: ${payload.type}`);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Slack notification error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send notification" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
