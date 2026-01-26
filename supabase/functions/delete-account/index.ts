import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

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
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      { global: { headers: { Authorization: authHeader } } }
    );

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
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

    // Cancel Stripe subscription if exists
    const { data: subscription } = await supabaseAdmin
      .from("subscriptions")
      .select("stripe_subscription_id")
      .eq("user_id", user.id)
      .single();

    if (subscription?.stripe_subscription_id) {
      try {
        const Stripe = (await import("https://esm.sh/stripe@14.21.0?target=deno")).default;
        const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") as string, {
          apiVersion: "2023-10-16",
          httpClient: Stripe.createFetchHttpClient(),
        });
        await stripe.subscriptions.cancel(subscription.stripe_subscription_id);
        console.log(`Cancelled Stripe subscription for user ${user.id}`);
      } catch (stripeError) {
        console.error("Error cancelling Stripe subscription:", stripeError);
      }
    }

    // Delete user (cascading deletes handle related data)
    const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(
      user.id
    );

    if (deleteError) {
      console.error("Error deleting user:", deleteError);
      throw deleteError;
    }

    console.log(`Successfully deleted user ${user.id}`);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Delete account error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to delete account" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
