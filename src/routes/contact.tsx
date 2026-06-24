import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site-shell";
import { Mail, Instagram, Facebook, HandHeart } from "lucide-react";
import ivyPortrait from "@/assets/ivy-portrait.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ivy Dunlap" },
      {
        name: "description",
        content:
          "Email Ivy, follow along on social media, or send a quick message through the contact form.",
      },
      { property: "og:title", content: "Contact — Ivy Dunlap" },
      {
        property: "og:description",
        content: "Email, social links, giving link, and a quick contact form.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Say Hello"
        title="Let's stay in touch."
        intro="Questions, encouragement, an invitation to share at your church — I'd love to hear from you."
      />

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_1.4fr]">
          {/* Left: photo + contact lines */}
          <div className="space-y-8">
            <img
              src={ivyPortrait}
              alt="Ivy Dunlap"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-sm ring-1 ring-black/5"
            />
            <div className="space-y-4">
              <ContactLine
                icon={<Mail className="size-4" strokeWidth={1.75} />}
                label="Email"
                href="mailto:hello@ivydunlap.com"
                value="hello@ivydunlap.com"
              />
              <ContactLine
                icon={<Instagram className="size-4" strokeWidth={1.75} />}
                label="Instagram"
                href="https://instagram.com"
                value="@ivy.dunlap"
              />
              <ContactLine
                icon={<Facebook className="size-4" strokeWidth={1.75} />}
                label="Facebook"
                href="https://facebook.com"
                value="Ivy Dunlap"
              />
              <ContactLine
                icon={<HandHeart className="size-4" strokeWidth={1.75} />}
                label="Give"
                href="https://kidsim.org/give"
                value="kidsim.org/give"
              />
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5 rounded-3xl bg-paper p-8 ring-1 ring-black/5 md:p-10"
          >
            <Field label="Your name">
              <input
                type="text"
                required
                className="w-full rounded-2xl bg-base px-4 py-3 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-sage"
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                required
                className="w-full rounded-2xl bg-base px-4 py-3 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-sage"
              />
            </Field>
            <Field label="Message">
              <textarea
                rows={5}
                required
                className="w-full resize-none rounded-2xl bg-base px-4 py-3 text-sm ring-1 ring-black/10 focus:outline-none focus:ring-2 focus:ring-sage"
              />
            </Field>
            <button
              type="submit"
              className="rounded-full bg-sage px-6 py-3 text-sm font-medium text-base ring-1 ring-sage hover:bg-sage/90"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-ink/60">
        {label}
      </span>
      {children}
    </label>
  );
}

function ContactLine({
  icon,
  label,
  href,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  value: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-4 rounded-2xl bg-paper p-4 ring-1 ring-black/5 transition-colors hover:bg-paper/60"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-base text-sage ring-1 ring-black/5">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40">
          {label}
        </span>
        <span className="block truncate text-sm font-medium text-ink">
          {value}
        </span>
      </span>
    </a>
  );
}
