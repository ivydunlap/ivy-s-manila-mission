import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader, Eyebrow } from "@/components/site-shell";
import { assetUrl } from "@/lib/utils";

const needFeeding = assetUrl("/images/need-feeding.jpeg");

export const Route = createFileRoute("/need")({
  head: () => ({
    meta: [
      { title: "The Need in the Philippines — Ivy Dunlap" },
      {
        name: "description",
        content:
          "Key statistics on poverty in the Philippines and a short reflection on spiritual and physical need in Manila.",
      },
      { property: "og:title", content: "The Need in the Philippines" },
      {
        property: "og:description",
        content:
          "Why Manila — the spiritual and physical poverty at the heart of this mission.",
      },
    ],
  }),
  component: NeedPage,
});

const stats = [
  { value: "18M+", label: "people in metro Manila" },
  { value: "1 in 4", label: "Filipino children live in poverty" },
  { value: "~1.8M", label: "street-connected children nationwide" },
  { value: "<3%", label: "evangelical Christians in many provinces" },
];

function NeedPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="The Need"
        title="Why Manila?"
        intro="A quick look at the spiritual and physical landscape — and the children at the center of it."
      />

      {/* On the ground — full-bleed photo with stats overlay */}
      <section className="relative isolate overflow-hidden">
        <img
          src={needFeeding}
          alt="Ivy serving a meal to a line of children in Manila"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-[50%_55%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.22 0.04 245 / 0.28) 0%, oklch(0.22 0.04 245 / 0.15) 30%, oklch(0.22 0.04 245 / 0.55) 70%, oklch(0.22 0.04 245 / 0.88) 100%)",
          }}
        />
        <div className="relative mx-auto flex min-h-[60vh] max-w-6xl items-end px-6 py-16 md:min-h-[72vh] md:py-24">
          <div
            className="max-w-lg"
            style={{ textShadow: "0 2px 16px oklch(0.15 0.03 245 / 0.7)" }}
          >
            <Eyebrow tone="white">By the Numbers</Eyebrow>
            <h2 className="font-display mb-6 text-3xl font-medium leading-tight text-white md:text-4xl">
              The size and shape of{" "}
              <span className="italic text-clay">the need.</span>
            </h2>
            <ul className="divide-y divide-white/20 border-y border-white/20">
              {stats.map((s) => (
                <li
                  key={s.label}
                  className="flex items-baseline justify-between gap-6 py-4"
                >
                  <span className="font-display text-2xl font-medium text-clay md:text-3xl">
                    {s.value}
                  </span>
                  <span className="text-right text-sm leading-snug text-white/80">
                    {s.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Spiritual + physical — editorial split */}
      <section className="border-t border-ink/10 bg-paper/60 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-2xl">
            <Eyebrow>Two Kinds of Poverty</Eyebrow>
            <h2 className="font-display text-balance text-4xl font-medium leading-tight md:text-5xl">
              The deepest poverty is{" "}
              <span className="italic">not material.</span>
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden bg-ink/10 md:grid-cols-2">
            <div className="bg-base p-10 md:p-14">
              <span className="font-display mb-6 block text-3xl italic text-clay/80">
                01
              </span>
              <h3 className="font-display mb-5 text-2xl font-medium leading-tight md:text-3xl">
                Physical Need
              </h3>
              <p className="leading-relaxed text-ink/75">
                Many of the families KIM serves live in informal settlements
                around Manila. Reliable meals, schooling, and medical care
                are daily uncertainties — not occasional ones.
              </p>
            </div>
            <div className="bg-base p-10 md:p-14">
              <span className="font-display mb-6 block text-3xl italic text-sage/80">
                02
              </span>
              <h3 className="font-display mb-5 text-2xl font-medium leading-tight md:text-3xl">
                Spiritual Need
              </h3>
              <p className="leading-relaxed text-ink/75">
                Behind every statistic is a child who needs to hear the name
                of Jesus and know they are precious to Him. That is the
                deepest need any of us has.
              </p>
            </div>
          </div>

          <div className="mt-20 text-center">
            <Link
              to="/partnership"
              className="inline-flex rounded-full bg-clay px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-clay/90"
            >
              Be Part of the Answer
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
