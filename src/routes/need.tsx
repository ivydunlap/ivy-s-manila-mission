import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader, Eyebrow } from "@/components/site-shell";
import philippinesMap from "@/assets/philippines-map.svg.asset.json";

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
        title="Why Manila."
        intro="A quick look at the spiritual and physical landscape — and the children at the center of it."
      />

      {/* Map + stats — editorial */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          <div className="relative mx-auto w-full max-w-md">
            <PhilippinesMap />
          </div>
          <div>
            <Eyebrow>By the Numbers</Eyebrow>
            <h2 className="font-display mb-10 text-3xl font-medium leading-tight md:text-4xl">
              The size and shape of{" "}
              <span className="italic text-clay/90">the need.</span>
            </h2>
            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              {stats.map((s) => (
                <li
                  key={s.label}
                  className="flex items-baseline justify-between gap-6 py-5"
                >
                  <span className="font-display text-3xl font-medium text-clay md:text-4xl">
                    {s.value}
                  </span>
                  <span className="text-right text-sm leading-snug text-ink/65">
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

function PhilippinesMap() {
  // Manila ≈ 14.6°N, 120.98°E → ~42% from left, ~39.5% from top of the SVG bounds.
  const manila = { left: "42%", top: "39.5%" };
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <img
        src={philippinesMap.url}
        alt="Map of the Philippines with Manila highlighted"
        className="block h-auto w-full opacity-80 [filter:saturate(0)_brightness(0.55)]"
      />
      {/* Manila marker */}
      <div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: manila.left, top: manila.top }}
      >
        <span className="block h-4 w-4 rounded-full bg-clay/15" />
        <span className="absolute left-1/2 top-1/2 block h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-clay/40" />
        <span className="absolute left-1/2 top-1/2 block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-clay" />
      </div>
      <div
        className="pointer-events-none absolute translate-x-2"
        style={{ left: manila.left, top: manila.top }}
      >
        <div className="ml-4 -translate-y-1/2">
          <div className="h-px w-10 bg-clay/50" />
          <div className="font-display mt-1 text-sm italic text-ink">Manila</div>
          <div className="font-body text-[10px] tracking-[0.2em] text-ink/50">
            14.6°N 120.98°E
          </div>
        </div>
      </div>
    </div>
  );
}
