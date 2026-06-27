import { useState } from "react";

type State = "idle" | "loading" | "success" | "already" | "error";

interface SubscribeFormProps {
  /** "sidebar" = stacked, tighter padding (newsletter list page)
   *  "inline"  = side-by-side on sm+, wider padding (post bottom CTA) */
  layout?: "sidebar" | "inline";
}

export function SubscribeForm({ layout = "sidebar" }: SubscribeFormProps) {
  const [state, setState] = useState<State>("idle");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setState("success");
        setEmail("");
      } else if (res.status === 409) {
        setState("already");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  const isInline = layout === "inline";
  const topMargin = isInline ? "mt-6" : "mt-5";

  if (state === "success") {
    return (
      <p
        className={`${topMargin} rounded-xl bg-clay/10 px-5 py-4 text-sm font-medium text-clay`}
      >
        Almost there! Check your inbox for a confirmation email.
      </p>
    );
  }

  if (state === "already") {
    return (
      <p className={`${topMargin} rounded-xl bg-ink/5 px-5 py-4 text-sm text-ink/70`}>
        You're already on the list — thanks for being here!
      </p>
    );
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={
          isInline
            ? "mt-6 flex flex-col gap-3 sm:flex-row"
            : "mt-5 flex flex-col gap-3"
        }
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={state === "loading"}
          placeholder="you@email.com"
          className={
            isInline
              ? "flex-1 rounded-full border border-ink/15 bg-base px-5 py-3 text-sm placeholder:text-ink/40 focus:border-clay focus:outline-none disabled:opacity-60"
              : "w-full rounded-full border border-ink/15 bg-base px-4 py-3 text-sm placeholder:text-ink/40 focus:border-clay focus:outline-none disabled:opacity-60"
          }
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className={
            isInline
              ? "rounded-full bg-clay px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-clay/90 disabled:opacity-60"
              : "rounded-full bg-clay px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-clay/90 disabled:opacity-60"
          }
        >
          {state === "loading" ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
      {state === "error" && (
        <p className="mt-2 text-xs text-red-600">
          Something went wrong — please try again.
        </p>
      )}
    </div>
  );
}
