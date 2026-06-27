import { createFileRoute } from "@tanstack/react-router";

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}$/;

export const Route = createFileRoute("/api/subscribe")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        // Parse body
        let email: unknown;
        try {
          const body = await request.json();
          email = body?.email;
        } catch {
          return Response.json({ error: "invalid_request" }, { status: 400 });
        }

        // Validate email
        if (
          typeof email !== "string" ||
          !EMAIL_RE.test(email) ||
          email.length > 320
        ) {
          return Response.json({ error: "invalid_email" }, { status: 400 });
        }

        const apiKey = process.env.MAILCHIMP_API_KEY;
        const listId = process.env.MAILCHIMP_LIST_ID;

        if (!apiKey || !listId) {
          console.error(
            "[subscribe] MAILCHIMP_API_KEY or MAILCHIMP_LIST_ID not set",
          );
          return Response.json(
            { error: "service_unavailable" },
            { status: 503 },
          );
        }

        // Mailchimp API keys end with the datacenter, e.g. abc123-us1
        const dc = apiKey.split("-").at(-1);
        if (!dc) {
          console.error("[subscribe] Could not parse datacenter from API key");
          return Response.json(
            { error: "service_unavailable" },
            { status: 503 },
          );
        }

        const url = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`;
        const credentials = btoa(`anystring:${apiKey}`);

        let mcRes: Response;
        try {
          mcRes = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Basic ${credentials}`,
            },
            body: JSON.stringify({
              email_address: email,
              // "pending" triggers a confirmation email (double opt-in)
              // which improves deliverability and compliance.
              status: "pending",
            }),
          });
        } catch (err) {
          console.error("[subscribe] Mailchimp fetch failed:", err);
          return Response.json(
            { error: "service_unavailable" },
            { status: 503 },
          );
        }

        if (mcRes.ok) {
          return Response.json({ success: true });
        }

        const data = (await mcRes.json().catch(() => ({}))) as {
          title?: string;
        };

        // Member already exists — treat as soft success
        if (data.title === "Member Exists") {
          return Response.json({ error: "already_subscribed" }, { status: 409 });
        }

        console.error("[subscribe] Mailchimp error:", mcRes.status, data);
        return Response.json(
          { error: "subscription_failed" },
          { status: 500 },
        );
      },
    },
  },
});
