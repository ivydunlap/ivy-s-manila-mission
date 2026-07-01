import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader, Eyebrow } from "@/components/site-shell";
import { Heart, HandHeart } from "lucide-react";

export const Route = createFileRoute("/partnership")({
  head: () => ({
    meta: [
      { title: "Partnership — Ivy Dunlap" },
      {
        name: "description",
        content:
          "Two ways to partner with Ivy in Manila: prayer and financial giving. Goal: $15,000+ to fully fund her first year with KIM.",
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

const budget = [
  "Housing & food ($500/month)",
  "Transportation",
  "Ministry tools",
  "Tagalog lessons",
  "Staff retreats",
  "Flights to and from the Philippines",
  "Personal living expenses",
  "Emergency needs",
  "Opportunities to give within the community",
];

function PartnershipPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Partnership"
        title="Will you hold the rope?"
        intro="Before William Carey left for India in 1793, he told his friend Andrew Fuller: 'I will go down into the pit if you will hold the rope.' Some are called to go. Others are called to hold the rope. Different roles, same surrender, same mission."
      />

      {/* Two partnership columns — editorial split */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-px overflow-hidden bg-ink/10 md:grid-cols-2">
          {/* Prayer */}
          <div className="bg-base p-10 md:p-14">
            <div className="mb-8 flex items-center gap-4">
              <span className="grid size-12 place-items-center rounded-full bg-sage/15 text-sage">
                <Heart className="size-5" strokeWidth={1.75} />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-sage">
                One — Pray
              </span>
            </div>
            <h2 className="font-display mb-5 text-3xl font-medium leading-tight md:text-4xl">
              Prayer <span className="italic">Partners</span>
            </h2>
            <p className="mb-4 leading-relaxed text-ink/75">
              Prayer is the foundation of everything I'm stepping into.
              Prayer partners commit to praying for my transition to Manila,
              the children and families at KIM, the teams who come to serve,
              and my spiritual growth, protection, and dependence on God.
            </p>
            <p className="mb-8 leading-relaxed text-ink/75">
              I'd love to share specific requests and updates with you.
            </p>
            <a
              href="mailto:hello@ivydunlap.com?subject=Prayer%20Team"
              className="font-display inline-flex items-center gap-2 border-b-2 border-sage/40 pb-1 text-sm font-semibold italic transition-colors hover:border-sage"
            >
              Join Prayer Team →
            </a>
          </div>

          {/* Financial */}
          <div className="bg-base p-10 md:p-14">
            <div className="mb-8 flex items-center gap-4">
              <span className="grid size-12 place-items-center rounded-full bg-clay/15 text-clay">
                <HandHeart className="size-5" strokeWidth={1.75} />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-clay">
                Two — Give
              </span>
            </div>
            <h2 className="font-display mb-5 text-3xl font-medium leading-tight md:text-4xl">
              Financial <span className="italic">Partners</span>
            </h2>
            <p className="mb-8 leading-relaxed text-ink/75">
              My goal is to raise <strong>$15,000+</strong> to fully fund my
              first year — through monthly gifts or one-time gifts. Both make
              a meaningful impact, and every gift is tax-deductible through
              Kids International Ministries.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="https://kidsim.org/give"
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-clay px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-clay/90"
              >
                Give Online
              </a>
              <QRPlaceholder />
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl italic leading-snug text-ink/80 md:text-3xl">
            I'm committed to my first year in Manila from September 2026 to September 2027, and I'm following God for as long as He calls me there. My hope is that this first year is just the beginning.
          </p>
        </div>
      </section>

      {/* Budget — editorial ledger */}
      <section className="border-y border-ink/10 bg-paper/60 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:gap-20">
            <div>
              <Eyebrow>Year One Budget</Eyebrow>
              <h2 className="font-display text-balance text-4xl font-medium leading-[1.05] md:text-5xl">
                $15,000+ to fund a{" "}
                <span className="italic text-clay/90">
                  full year on the field.
                </span>
              </h2>
              <p className="mt-8 leading-relaxed text-ink/70">
                Here's exactly what your support covers. Nothing hidden —
                this is the real cost of living and ministering in Manila for
                twelve months.
              </p>
            </div>
            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              {budget.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-6 py-4 text-ink/80"
                >
                  <span className="font-display w-8 shrink-0 text-sm italic text-clay/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Hold the rope — dark editorial quote */}
      <section className="bg-ink px-6 py-24 text-base md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-8 inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-clay">
            — William Carey, 1793 —
          </span>
          <p className="font-display text-balance text-3xl italic leading-[1.15] text-base md:text-5xl">
            "I will go down,
            <br />
            if you will hold the rope."
          </p>
          <div className="mx-auto my-12 h-px w-12 bg-clay/60" />
          <p className="text-pretty mx-auto max-w-xl text-base/80">
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
      className="grid size-24 grid-cols-8 grid-rows-8 gap-[2px] bg-base p-2 ring-1 ring-ink/15"
    >
      {Array.from({ length: 64 }).map((_, i) => {
        const on = ((i * 9301 + 49297) % 233280) % 3 !== 0;
        return (
          <div key={i} className={on ? "bg-ink rounded-[1px]" : "bg-transparent"} />
        );
      })}
    </div>
  );
}
