import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader, Eyebrow } from "@/components/site-shell";
import { Mail, Instagram, Facebook, HandHeart } from "lucide-react";
import ivyPortraitAsset from "@/assets/ivy-portrait.jpg.asset.json";
import { assetUrl } from "@/lib/utils";

const ivyPortrait = assetUrl(ivyPortraitAsset.url);

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
        intro="Questions, encouragement, or curious about serving in Manila yourself — I'd love to hear from you!"
      />

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[1fr_1.3fr]">
          {/* Photo + contact lines */}
          <div className="space-y-10">
            <div className="relative">
              <div className="absolute -inset-3 -z-10 bg-clay/15 md:-inset-4" />
              <img
                src={ivyPortrait}
                alt="Ivy Dunlap"
                loading="lazy"
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover shadow-lg"
              />
            </div>
            <div>
              <Eyebrow>Find Me Here</Eyebrow>
              <ul className="divide-y divide-ink/10 border-y border-ink/10">
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
                  href="https://www.facebook.com/ivy.dunlap.893400/"
                  value="Ivy Dunlap"
                />
                <ContactLine
                  icon={<HandHeart className="size-4" strokeWidth={1.75} />}
                  label="Give"
                  href="https://restorationyakima.churchcenter.com/giving/to/ivy-dunlap-missions-support"
                  value="Give Online"
                />
              </ul>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="border border-ink/10 bg-paper/60 p-8 md:p-12"
          >
            <Eyebrow>Send a Note</Eyebrow>
            <h2 className="font-display mb-8 text-3xl font-medium leading-tight md:text-4xl">
              Drop me <span className="italic">a line.</span>
            </h2>
            <div className="space-y-6">
              <Field label="Your name">
                <input
                  type="text"
                  required
                  className="w-full border-b border-ink/20 bg-transparent py-3 text-base text-ink focus:border-clay focus:outline-none"
                />
              </Field>
              <Field label="Your email">
                <input
                  type="email"
                  required
                  className="w-full border-b border-ink/20 bg-transparent py-3 text-base text-ink focus:border-clay focus:outline-none"
                />
              </Field>
              <Field label="Message">
                <textarea
                  rows={5}
                  required
                  className="w-full resize-none border-b border-ink/20 bg-transparent py-3 text-base text-ink focus:border-clay focus:outline-none"
                />
              </Field>
              <button
                type="submit"
                className="mt-4 inline-flex rounded-full bg-clay px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-clay/90"
              >
                Send Message
              </button>
            </div>
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
      <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.25em] text-ink/55">
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
    <li>
      <a
        href={href}
        className="group flex items-center gap-5 py-5 transition-colors hover:text-clay"
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
      >
        <span className="text-ink/40 transition-colors group-hover:text-clay">
          {icon}
        </span>
        <span className="flex-1 min-w-0">
          <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-ink/45">
            {label}
          </span>
          <span className="block truncate text-base font-medium">{value}</span>
        </span>
        <span className="text-ink/30 transition-transform group-hover:translate-x-1 group-hover:text-clay">
          →
        </span>
      </a>
    </li>
  );
}
