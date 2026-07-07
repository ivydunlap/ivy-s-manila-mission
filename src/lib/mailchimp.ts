// ── Mailchimp newsletter signup ──────────────────────────────────────────
// This website is a STATIC site (deployed to GitHub Pages), which means there
// is NO server running when someone visits. So we CANNOT use a secret Mailchimp
// API key here — anything in this file ships to the visitor's browser.
//
// Instead we submit directly to Mailchimp's PUBLIC "embedded form" endpoint
// (/subscribe/post). A normal HTML form POST is allowed to cross origins, so we
// submit a hidden form into a hidden <iframe>. Mailchimp adds the person as a
// "pending" contact and emails them a confirmation link (double opt-in). We
// can't read Mailchimp's response across origins, so we optimistically tell the
// visitor to check their inbox — the confirmation email is the real receipt.
//
// (Note: Mailchimp has retired the old JSONP "/subscribe/post-json" endpoint on
// this account — it 404s — which is why we use the iframe POST approach.)
//
// This URL is PUBLIC and safe to include here — it exposes no secret.
//
// ┌─ WHERE THIS CAME FROM ──────────────────────────────────────────────────┐
// │  It's your audience's signup endpoint. The u=… and id=… identify your     │
// │  audience. If you ever recreate the audience, update this URL — it's the   │
// │  <form action="…/subscribe/post?u=…&id=…"> from Audience → Signup forms.   │
// └───────────────────────────────────────────────────────────────────────────┘
export const MAILCHIMP_FORM_ACTION: string =
  "https://ivydunlap.us4.list-manage.com/subscribe/post?u=000904c8aae94f820235897ba&id=7f1e83b979";

export type SubscribeResult =
  | { status: "success"; message: string }
  | { status: "already"; message: string }
  | { status: "error"; message: string };

const SUCCESS_MESSAGE =
  "Almost there! Check your inbox for a confirmation email to finish subscribing.";

/**
 * Subscribes an email to the Mailchimp audience via a cross-origin form POST
 * into a hidden iframe (see the file header for why). Resolves optimistically
 * once the submission has been sent — Mailchimp's confirmation email is the
 * real receipt.
 */
export function subscribeToMailchimp(email: string): Promise<SubscribeResult> {
  return new Promise((resolve) => {
    if (!MAILCHIMP_FORM_ACTION) {
      resolve({
        status: "error",
        message:
          "Newsletter signup isn't set up yet. (Add your Mailchimp form URL in src/lib/mailchimp.ts.)",
      });
      return;
    }

    if (typeof document === "undefined") {
      resolve({
        status: "error",
        message: "Signup is only available in the browser.",
      });
      return;
    }

    const token = `mc_${Date.now()}_${Math.floor(Math.random() * 1e6)}`;

    const iframe = document.createElement("iframe");
    iframe.name = token;
    iframe.style.display = "none";

    const form = document.createElement("form");
    form.action = MAILCHIMP_FORM_ACTION;
    form.method = "POST";
    form.target = token;
    form.style.display = "none";

    const addField = (name: string, value: string) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    };
    // `EMAIL` is Mailchimp's canonical embed field; `MERGE0` is what this
    // audience's form uses. Sending both (identical) is safe and future-proof.
    addField("EMAIL", email);
    addField("MERGE0", email);

    document.body.appendChild(iframe);
    document.body.appendChild(form);

    let settled = false;
    let submitted = false;

    const cleanup = (result: SubscribeResult) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      // Remove after the current tick so the in-flight POST isn't interrupted.
      setTimeout(() => {
        form.remove();
        iframe.remove();
      }, 0);
      resolve(result);
    };

    // The iframe fires `load` once Mailchimp responds to our POST. (An initial
    // about:blank load can fire first, so we only count loads after submit.)
    iframe.addEventListener("load", () => {
      if (submitted) cleanup({ status: "success", message: SUCCESS_MESSAGE });
    });

    // Fallback: if `load` never fires (browser quirks), the POST was still
    // sent, so resolve success anyway after a short wait.
    const timer = setTimeout(() => cleanup({ status: "success", message: SUCCESS_MESSAGE }), 4000);

    submitted = true;
    form.submit();
  });
}
