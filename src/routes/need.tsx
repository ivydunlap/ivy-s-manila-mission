import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader, Eyebrow } from "@/components/site-shell";

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
  return (
    <svg
      viewBox="0 0 320 420"
      className="h-auto w-full"
      role="img"
      aria-label="Map of the Philippines with Manila highlighted"
    >
      <g fill="var(--paper)" stroke="var(--ink)" strokeOpacity="0.2" strokeWidth="1.2">
        <path d="M150 30 C 180 40 200 70 195 110 C 210 130 220 160 200 180 C 215 200 200 230 175 235 C 160 225 145 215 138 195 C 125 205 110 195 112 175 C 95 165 100 140 118 130 C 110 110 125 80 150 70 Z" />
        <path d="M150 250 C 165 248 175 260 170 272 C 180 275 178 290 165 290 C 155 295 145 285 148 273 C 140 268 142 252 150 250 Z" />
        <path d="M195 258 C 210 260 215 275 205 282 C 215 290 205 302 192 298 C 184 295 183 282 188 275 C 182 268 188 258 195 258 Z" />
        <path d="M120 280 C 132 282 138 295 128 302 C 135 312 122 320 112 312 C 105 305 108 290 120 280 Z" />
        <path d="M150 320 C 185 318 220 330 235 360 C 240 385 215 405 180 405 C 145 405 110 395 100 370 C 105 340 125 322 150 320 Z" />
      </g>
      <g>
        <circle cx="155" cy="135" r="18" fill="var(--clay)" fillOpacity="0.15" />
        <circle cx="155" cy="135" r="10" fill="var(--clay)" fillOpacity="0.3" />
        <circle cx="155" cy="135" r="5" fill="var(--clay)" />
        <line
          x1="170"
          y1="135"
          x2="210"
          y2="135"
          stroke="var(--clay)"
          strokeOpacity="0.5"
          strokeWidth="1"
        />
        <text
          x="215"
          y="132"
          fill="var(--ink)"
          fontSize="13"
          fontFamily="Newsreader, serif"
          fontStyle="italic"
        >
          Manila
        </text>
        <text
          x="215"
          y="146"
          fill="var(--ink)"
          fillOpacity="0.5"
          fontSize="9"
          fontFamily="Instrument Sans, sans-serif"
          letterSpacing="2"
        >
          14.6°N 120.98°E
        </text>
      </g>
    </svg>
  );
}
