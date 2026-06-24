import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import ivyPortrait from "@/assets/ivy-portrait.jpg";
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
      {/* Hero */}
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="font-display mb-6 inline-block text-xs italic tracking-wide text-clay">
              Manila, Philippines
            </span>
            <h1 className="font-display text-balance mb-8 text-5xl font-medium leading-[1.05] md:text-6xl lg:text-7xl">
              Walking with the children of Manila.
            </h1>
            <p className="text-pretty mb-10 max-w-[48ch] text-lg leading-relaxed text-ink/70">
              I'm joining Kids International Ministries to serve at-risk youth
              and families in the Philippines through communication, hosting,
              and shared life on the ground.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/story"
                className="flex items-center gap-2 rounded-full bg-paper px-5 py-2.5 text-sm font-medium text-ink ring-1 ring-black/5 transition-colors hover:bg-paper/60"
              >
                My Story
              </Link>
              <Link
                to="/partnership"
                className="flex items-center gap-2 rounded-full bg-sage px-5 py-2.5 text-sm font-medium text-base ring-1 ring-sage transition-colors hover:bg-sage/90"
              >
                Partner With Me
              </Link>
              <Link
                to="/newsletter"
                className="flex items-center gap-2 rounded-full bg-paper px-5 py-2.5 text-sm font-medium text-ink ring-1 ring-black/5 transition-colors hover:bg-paper/60"
              >
                Newsletter
              </Link>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <img
              src={ivyPortrait}
              alt="Ivy Dunlap"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-sm ring-1 ring-black/5"
            />
            <div className="absolute -bottom-6 -left-6 max-w-[220px] rounded-2xl bg-base p-4 shadow-sm ring-1 ring-black/5">
              <p className="font-display text-sm italic leading-snug text-sage">
                "I never expected to be a missionary, but God had other plans
                for my heart in Manila."
              </p>
            </div>
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
