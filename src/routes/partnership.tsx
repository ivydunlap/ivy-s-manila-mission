import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site-shell";
import { Heart, HandHeart } from "lucide-react";

export const Route = createFileRoute("/partnership")({
  head: () => ({
    meta: [
      { title: "Partnership — Ivy Dunlap" },
      {
        name: "description",
        content:
          "Two ways to partner with Ivy in Manila: prayer and financial giving. Includes a QR code for easy giving.",
      },
      { property: "og:title", content: "Partnership — Ivy Dunlap" },
      {
        property: "og:description",
        content: "Pray. Give. Hold the rope while I go.",
      },
    ],
  }),
  component: PartnershipPage,
});

function PartnershipPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Partnership"
        title="Will you hold the rope?"
        intro="There's an old missions story about William Carey, who told his friends as he stepped into the unknown: 'I will go down, if you will hold the rope.' That's what I'm asking too."
      />

      {/* Two partnership cards */}
      <section className="px-6">
        <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-paper p-10 ring-1 ring-black/5">
            <div className="mb-6 grid size-12 place-items-center rounded-2xl bg-sage/10 text-sage">
              <Heart className="size-5" strokeWidth={1.75} />
            </div>
            <h2 className="font-display mb-3 text-3xl font-medium">
              Prayer Partners
            </h2>
            <p className="mb-6 leading-relaxed text-ink/70">
              The most important partnership is in prayer. Sign up to receive
              monthly prayer updates with specific requests, names, and
              answered prayers from the field.
            </p>
            <a
              href="mailto:hello@ivydunlap.com?subject=Prayer%20Team"
              className="inline-flex rounded-full bg-base px-5 py-2.5 text-sm font-medium text-ink ring-1 ring-black/10 hover:bg-base/80"
            >
              Join Prayer Team
            </a>
          </div>

          <div className="rounded-3xl bg-paper p-10 ring-1 ring-black/5">
            <div className="mb-6 grid size-12 place-items-center rounded-2xl bg-clay/10 text-clay">
              <HandHeart className="size-5" strokeWidth={1.75} />
            </div>
            <h2 className="font-display mb-3 text-3xl font-medium">
              Financial Partners
            </h2>
            <p className="mb-6 leading-relaxed text-ink/70">
              Monthly and one-time gifts cover housing, ministry costs, and
              travel back to visit supporting churches. Every gift is
              tax-deductible through Kids International Ministries.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="https://kidsim.org/give"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-sage px-6 py-3 text-sm font-medium text-base ring-1 ring-sage hover:bg-sage/90"
              >
                Give Online
              </a>
              <QRPlaceholder />
            </div>
          </div>
        </div>
      </section>

      {/* Hold the rope quote */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl rounded-3xl bg-ink px-10 py-16 text-center text-base/0">
          <p className="font-display text-balance text-2xl italic leading-relaxed text-base md:text-3xl">
            "I will go down, if you will hold the rope."
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-base/60">
            — William Carey, 1793
          </p>
          <p className="text-pretty mx-auto mt-10 max-w-xl text-base/80">
            I can't go alone. Whether you partner in prayer, in giving, or
            both — thank you for being part of this. Every name on the team
            matters.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}

function QRPlaceholder() {
  return (
    <div
      aria-label="Giving QR code placeholder"
      className="grid size-24 grid-cols-8 grid-rows-8 gap-[2px] rounded-xl bg-base p-2 ring-1 ring-black/10"
    >
      {Array.from({ length: 64 }).map((_, i) => {
        // deterministic pseudo-random pattern
        const on = ((i * 9301 + 49297) % 233280) % 3 !== 0;
        return (
          <div
            key={i}
            className={on ? "bg-ink rounded-[1px]" : "bg-transparent"}
          />
        );
      })}
    </div>
  );
}
