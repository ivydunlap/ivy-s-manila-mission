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
      className="h-auto w-full drop-shadow-sm"
      role="img"
      aria-label="Map of the Philippines with Manila highlighted"
    >
      {/* Luzon */}
      <path
        d="M 152 36 Q 158 32 164 38 L 176 46 Q 188 56 192 72 L 195 92 Q 198 112 192 130 L 186 148 Q 180 162 170 172 L 158 180 Q 146 184 134 180 L 122 174 Q 112 166 108 152 L 104 132 Q 102 112 108 92 L 118 74 Q 128 58 142 48 L 148 40 Q 150 36 152 36 Z"
        fill="var(--paper)"
        stroke="var(--ink)"
        strokeOpacity="0.25"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />

      {/* Mindoro */}
      <path
        d="M 96 182 L 112 184 Q 118 190 116 198 L 108 204 Q 100 206 94 200 L 90 192 Q 90 184 96 182 Z"
        fill="var(--paper)"
        stroke="var(--ink)"
        strokeOpacity="0.25"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />

      {/* Palawan */}
      <path
        d="M 78 208 L 94 210 Q 98 214 96 222 L 88 238 L 76 268 L 66 296 L 58 322 L 54 342 L 60 352 L 68 344 L 74 324 L 82 294 L 92 262 L 100 236 L 96 224 L 86 214 L 78 208 Z"
        fill="var(--paper)"
        stroke="var(--ink)"
        strokeOpacity="0.25"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />

      {/* Visayas — Samar/Leyte */}
      <path
        d="M 138 188 L 156 190 Q 164 195 162 205 L 154 216 Q 144 220 136 214 L 132 202 Q 132 192 138 188 Z"
        fill="var(--paper)"
        stroke="var(--ink)"
        strokeOpacity="0.25"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      {/* Panay */}
      <path
        d="M 104 218 L 126 220 Q 132 226 130 234 L 122 244 Q 112 248 104 242 L 98 232 Q 98 222 104 218 Z"
        fill="var(--paper)"
        stroke="var(--ink)"
        strokeOpacity="0.25"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      {/* Negros */}
      <path
        d="M 136 238 L 154 240 Q 160 246 158 254 L 150 264 Q 140 268 132 262 L 128 252 Q 128 242 136 238 Z"
        fill="var(--paper)"
        stroke="var(--ink)"
        strokeOpacity="0.25"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      {/* Cebu/Bohol */}
      <path
        d="M 162 244 L 178 246 Q 184 250 182 258 L 174 266 Q 166 268 160 262 L 158 254 Q 158 246 162 244 Z"
        fill="var(--paper)"
        stroke="var(--ink)"
        strokeOpacity="0.25"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />

      {/* Mindanao */}
      <path
        d="M 150 276 L 168 272 Q 188 274 204 282 L 216 292 Q 222 304 220 318 L 214 338 Q 206 356 192 368 L 178 376 Q 164 380 152 374 L 142 364 Q 136 350 140 334 L 146 312 Q 148 294 150 276 Z"
        fill="var(--paper)"
        stroke="var(--ink)"
        strokeOpacity="0.25"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />

      {/* Sulu islands */}
      <path
        d="M 124 358 L 140 360 Q 146 366 144 372 L 136 378 Q 128 378 124 372 L 120 364 Q 120 358 124 358 Z"
        fill="var(--paper)"
        stroke="var(--ink)"
        strokeOpacity="0.25"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <circle
        cx="112"
        cy="388"
        r="4"
        fill="var(--paper)"
        stroke="var(--ink)"
        strokeOpacity="0.25"
        strokeWidth="1.3"
      />

      {/* Manila marker */}
      <g>
        <circle cx="134" cy="126" r="16" fill="var(--clay)" fillOpacity="0.15" />
        <circle cx="134" cy="126" r="10" fill="var(--clay)" fillOpacity="0.3" />
        <circle cx="134" cy="126" r="5" fill="var(--clay)" />
        <line
          x1="148"
          y1="126"
          x2="200"
          y2="126"
          stroke="var(--clay)"
          strokeOpacity="0.5"
          strokeWidth="1"
        />
        <text
          x="205"
          y="123"
          fill="var(--ink)"
          fontSize="13"
          fontFamily="Newsreader, serif"
          fontStyle="italic"
        >
          Manila
        </text>
        <text
          x="205"
          y="137"
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
