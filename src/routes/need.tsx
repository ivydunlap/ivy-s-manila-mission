import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site-shell";

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

      {/* Map + stats */}
      <section className="px-6">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="relative mx-auto w-full max-w-md">
            <PhilippinesMap />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-3xl bg-paper p-6 ring-1 ring-black/5"
              >
                <div className="font-display text-4xl font-medium text-sage">
                  {s.value}
                </div>
                <div className="mt-2 text-sm leading-snug text-ink/65">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spiritual + physical */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          <div className="rounded-3xl bg-paper p-10 ring-1 ring-black/5">
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.2em] text-clay">
              Physical Need
            </span>
            <h3 className="font-display mb-4 text-2xl font-medium leading-tight">
              Hunger, housing, and access.
            </h3>
            <p className="leading-relaxed text-ink/70">
              Many of the families KIM serves live in informal settlements
              around Manila. Reliable meals, schooling, and medical care are
              daily uncertainties — not occasional ones.
            </p>
          </div>
          <div className="rounded-3xl bg-paper p-10 ring-1 ring-black/5">
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.2em] text-sage">
              Spiritual Need
            </span>
            <h3 className="font-display mb-4 text-2xl font-medium leading-tight">
              Knowing they are seen and loved.
            </h3>
            <p className="leading-relaxed text-ink/70">
              The deepest poverty is not material. Behind every statistic is a
              child who needs to hear the name of Jesus and know they are
              precious to Him.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <Link
            to="/partnership"
            className="inline-flex rounded-full bg-sage px-6 py-3 text-sm font-medium text-base ring-1 ring-sage hover:bg-sage/90"
          >
            Be Part of the Answer
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}

function PhilippinesMap() {
  // Minimal stylized SVG of the Philippines with Manila highlighted.
  return (
    <svg
      viewBox="0 0 320 420"
      className="h-auto w-full"
      role="img"
      aria-label="Map of the Philippines with Manila highlighted"
    >
      <g fill="var(--paper)" stroke="var(--ink)" strokeOpacity="0.18" strokeWidth="1.2">
        {/* Luzon */}
        <path d="M150 30 C 180 40 200 70 195 110 C 210 130 220 160 200 180 C 215 200 200 230 175 235 C 160 225 145 215 138 195 C 125 205 110 195 112 175 C 95 165 100 140 118 130 C 110 110 125 80 150 70 Z" />
        {/* Visayas cluster */}
        <path d="M150 250 C 165 248 175 260 170 272 C 180 275 178 290 165 290 C 155 295 145 285 148 273 C 140 268 142 252 150 250 Z" />
        <path d="M195 258 C 210 260 215 275 205 282 C 215 290 205 302 192 298 C 184 295 183 282 188 275 C 182 268 188 258 195 258 Z" />
        <path d="M120 280 C 132 282 138 295 128 302 C 135 312 122 320 112 312 C 105 305 108 290 120 280 Z" />
        {/* Mindanao */}
        <path d="M150 320 C 185 318 220 330 235 360 C 240 385 215 405 180 405 C 145 405 110 395 100 370 C 105 340 125 322 150 320 Z" />
      </g>
      {/* Manila dot */}
      <g>
        <circle cx="155" cy="135" r="14" fill="var(--clay)" fillOpacity="0.18" />
        <circle cx="155" cy="135" r="5" fill="var(--clay)" />
        <text
          x="170"
          y="138"
          fill="var(--ink)"
          fontSize="13"
          fontFamily="Newsreader, serif"
          fontStyle="italic"
        >
          Manila
        </text>
      </g>
    </svg>
  );
}
