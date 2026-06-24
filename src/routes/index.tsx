import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import heroManila from "@/assets/hero-manila.jpg";
import kimChildren from "@/assets/kim-children.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ivy Dunlap — Missionary to Manila" },
      {
        name: "description",
        content:
          "Ivy Dunlap is moving to Manila to serve with Kids International Ministries. Read her story, partner in prayer or giving, follow along.",
      },
      { property: "og:title", content: "Ivy Dunlap — Missionary to Manila" },
      {
        property: "og:description",
        content:
          "Serving with Kids International Ministries in Manila. Partner in prayer or giving.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteShell>
      {/* Hero — full-bleed photographic */}
      <section className="relative isolate -mt-px overflow-hidden">
        <img
          src={heroManila}
          alt="A child smiling at golden hour on a street in Manila"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Warm tonal overlays — dusty blue base + orange glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.22 0.04 245 / 0.55) 0%, oklch(0.22 0.04 245 / 0.35) 45%, oklch(0.28 0.06 40 / 0.55) 100%)",
          }}
        />
        <div className="relative mx-auto flex min-h-[78vh] max-w-5xl flex-col items-center justify-center px-6 py-28 text-center md:min-h-[86vh] md:py-40">
          <span className="font-display mb-6 inline-block text-xs italic tracking-[0.25em] text-white/85 uppercase">
            Manila, Philippines
          </span>
          <h1 className="font-display text-balance mb-8 max-w-[18ch] text-5xl font-medium leading-[1.05] text-white md:text-7xl lg:text-[5.25rem]">
            Walking with the children of Manila.
          </h1>
          <p className="text-pretty mx-auto mb-10 max-w-[52ch] text-lg leading-relaxed text-white/85">
            I'm joining Kids International Ministries to serve at-risk youth
            and families in the Philippines — through communication, hosting,
            and shared life on the ground.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/partnership"
              className="inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-clay/90"
            >
              Partner With Me
            </Link>
            <Link
              to="/story"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white ring-1 ring-white/40 backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              My Story
            </Link>
          </div>
        </div>
      </section>


      {/* Calling */}
      <section className="bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.2em] text-clay">
            The Calling
          </span>
          <h2 className="font-display text-balance mb-8 text-3xl font-medium leading-tight md:text-5xl">
            A heart changed in a place I never planned to go.
          </h2>
          <p className="text-pretty mx-auto max-w-[56ch] text-lg leading-relaxed text-ink/75">
            After my first short-term trip to the Philippines, I couldn't
            forget the faces of the children I met in the communities of
            Antipolo and Manila. What started as a summer became a clear
            conviction: this is where I am meant to be.
          </p>
          <Link
            to="/story"
            className="font-display mt-10 inline-flex items-center gap-2 border-b-2 border-clay/30 pb-1 text-sm font-semibold italic transition-colors hover:border-clay"
          >
            Read the full story →
          </Link>
        </div>
      </section>

      {/* KIM highlight */}
      <section className="px-6 py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-16 md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src={kimChildren}
              alt="Children served through Kids International Ministries"
              loading="lazy"
              width={1280}
              height={896}
              className="aspect-video w-full rounded-3xl object-cover shadow-sm ring-1 ring-black/5"
            />
          </div>
          <div className="w-full md:w-1/2">
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.2em] text-sage">
              Where I'm Serving
            </span>
            <h2 className="font-display text-pretty mb-6 text-4xl font-medium leading-tight">
              Kids International Ministries
            </h2>
            <p className="mb-6 leading-relaxed text-ink/70">
              KIM has been serving the Philippines since 1993, focusing on
              meeting both physical and spiritual needs. From children's homes
              and schools to medical clinics and feeding programs, they offer
              a holistic witness to the love of Christ.
            </p>
            <Link
              to="/mission"
              className="inline-flex items-center gap-2 border-b-2 border-clay/30 pb-1 text-sm font-semibold text-ink transition-colors hover:border-clay"
            >
              What I'll be doing →
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
