import { useState } from "react";
import { subscribeToMailchimp, type SubscribeResult } from "@/lib/mailchimp";

type Variant = "stacked" | "inline";

/**
 * Newsletter subscribe form wired to Mailchimp.
 *
 *  - "stacked": vertical layout for the newsletter sidebar
 *  - "inline":  input + button side-by-side for the end-of-post CTA
 *
 * See src/lib/mailchimp.ts for the one-time setup (paste your form URL there).
 */
export function SubscribeForm({ variant = "stacked" }: { variant?: Variant }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SubscribeResult | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setResult(null);
    const r = await subscribeToMailchimp(email.trim());
    setResult(r);
    setLoading(false);
    if (r.status === "success" || r.status === "already") setEmail("");
  }

  const isInline = variant === "inline";

  // On a happy result, replace the form with a friendly confirmation.
  if (result && (result.status === "success" || result.status === "already")) {
    return (
      <div
        className={`${isInline ? "mt-6" : "mt-5"} rounded-2xl border border-clay/25 bg-clay/5 p-5`}
      >
        <p className="font-display text-lg font-medium text-clay">
          {result.status === "success" ? "You're in 🎉" : "Welcome back 🎉"}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-ink/70">{result.message}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={isInline ? "mt-6 flex flex-col gap-3 sm:flex-row" : "mt-5 flex flex-col gap-3"}
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
        placeholder="you@email.com"
        className={
          isInline
            ? "flex-1 rounded-full border border-ink/15 bg-base px-5 py-3 text-sm placeholder:text-ink/40 focus:border-clay focus:outline-none disabled:opacity-60"
            : "w-full rounded-full border border-ink/15 bg-base px-4 py-3 text-sm placeholder:text-ink/40 focus:border-clay focus:outline-none disabled:opacity-60"
        }
      />
      <button
        type="submit"
        disabled={loading}
        className={
          isInline
            ? "rounded-full bg-clay px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-clay/90 disabled:opacity-60"
            : "rounded-full bg-clay px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-clay/90 disabled:opacity-60"
        }
      >
        {loading ? "Subscribing…" : "Subscribe"}
      </button>

      {result && result.status === "error" && (
        <p
          className={`text-sm text-red-600 ${isInline ? "sm:w-full sm:basis-full" : ""}`}
          role="alert"
        >
          {result.message}
        </p>
      )}
    </form>
  );
}
