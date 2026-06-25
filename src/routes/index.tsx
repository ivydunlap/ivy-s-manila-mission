import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import heroAsset from "@/assets/ivy-hero.jpeg.asset.json";
import kimChildren from "@/assets/kim-children.jpeg.asset.json";

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
          src={heroAsset.url}
          alt="Ivy walking down a Manila path arm-in-arm with three young girls"
          width={1366}
          height={1822}
          className="absolute inset-0 h-full w-full object-cover object-[50%_30%]"
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
            I'm moving to Manila to serve full-time with Kids International
            Ministries — loving the children and families God placed on my
            heart, and sharing the hope of Jesus alongside them.
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
            God has a way of calling us into stories we never would have
            written for ourselves.
          </h2>
          <p className="text-pretty mx-auto max-w-[56ch] text-lg leading-relaxed text-ink/75">
            Two years ago, my family tagged a missions trip onto the end of a
            vacation. I arrived exhausted and unsure — and I left forever
            changed. In the midst of real poverty, I found a joy and a faith
            deeper than anything I had ever seen. My heart broke for the
            people of the Philippines, and it gave me a feeling I could never
            shake.
          </p>

          <Link
            to="/story"
            className="font-display mt-10 inline-flex items-center gap-2 border-b-2 border-clay/30 pb-1 text-sm font-semibold italic transition-colors hover:border-clay"
          >
            Read the full story →
          </Link>
        </div>
      </section>

      {/* KIM highlight — editorial split layout */}
      <section className="bg-ink/[0.04] py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-12 md:gap-14">
          {/* Photo — offset card with frame */}
          <div className="relative md:col-span-7">
            <div className="absolute -inset-3 -z-10 rounded-sm bg-clay/15 md:-inset-4" />
            <img
              src={kimChildren.url}
              alt="Children served through Kids International Ministries"
              loading="lazy"
              width={1280}
              height={896}
              className="aspect-[4/3] h-auto w-full rounded-sm object-cover shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="md:col-span-5">
            <span className="mb-5 block text-[10px] font-bold uppercase tracking-[0.25em] text-clay">
              Where I'm Serving
            </span>
            <h2 className="font-display text-balance mb-3 text-3xl font-medium leading-[1.1] md:text-4xl">
              Kids International
              <br />
              <span className="italic text-clay/90">Ministries</span>
            </h2>
            <div className="my-6 h-px w-12 bg-clay/40" />
            <p className="text-pretty mb-8 leading-relaxed text-ink/75">
              KIM has been serving the Philippines for over thirty years —
              children's homes, schools, medical clinics, feeding programs,
              and family ministry. I'll be serving as an intern to Director
              Norman Denler, helping teams who come to serve and walking
              alongside the kids and families who have already captured my
              heart.
            </p>

            <Link
              to="/mission"
              className="font-display inline-flex items-center gap-2 border-b-2 border-clay/30 pb-1 text-sm font-semibold italic transition-colors hover:border-clay"
            >
              What I'll be doing →
            </Link>
          </div>
        </div>
      </section>

    </SiteShell>
  );
}
