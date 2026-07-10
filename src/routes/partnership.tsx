import { createFileRoute, Link } from "@tanstack/react-router";
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
  "Housing & food",
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
        intro="Before William Carey left for India in 1793, he told his friend Andrew Fuller: 'I will go down into the pit if you will hold the rope.' Fuller replied, 'I will most certainly hold the rope.' Some are called to go. Others are called to hold the rope. Different roles, same surrender, same mission."
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
            <Link
              to="/newsletter"
              className="font-display inline-flex items-center gap-2 border-b-2 border-sage/40 pb-1 text-sm font-semibold italic transition-colors hover:border-sage"
            >
              Join Prayer Team →
            </Link>
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
              first year — through monthly or one-time gifts. Both make
              a meaningful impact, and every gift is tax-deductible through
              Restoration Church.
            </p>
            <div className="flex flex-wrap items-center gap-8">
              <a
                href="https://restorationyakima.churchcenter.com/giving/to/ivy-dunlap-missions-support"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-clay px-9 py-5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-clay/90"
              >
                Give Online →
              </a>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-ink/40">
                  Or
                  <br />
                  Scan
                </span>
                <img
                  src="/images/giving-qr.png"
                  alt="QR code linking to Ivy's giving page"
                  width={144}
                  height={144}
                  className="size-36 rounded-md bg-base p-2 ring-1 ring-ink/15"
                />
              </div>
            </div>
          </div>
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
                Here's exactly what your support covers:
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
