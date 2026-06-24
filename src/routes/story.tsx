import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site-shell";
import ivyServing from "@/assets/ivy-serving.jpg";
import manilaStreet from "@/assets/manila-street.jpg";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "My Story — Ivy Dunlap" },
      {
        name: "description",
        content:
          "How God moved Ivy Dunlap from never expecting missions to a full-time call to serve in Manila.",
      },
      { property: "og:title", content: "My Story — Ivy Dunlap" },
      {
        property: "og:description",
        content: "From never expecting missions to a full-time call in Manila.",
      },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="My Story"
        title="I never expected to be a missionary."
        intro="And yet here I am, packing my life into suitcases for Manila. This is the long version of how God rearranged my plans."
      />

      <section className="px-6">
        <div className="mx-auto max-w-3xl">
          <img
            src={ivyServing}
            alt="Ivy serving alongside a child in Manila"
            loading="lazy"
            width={1280}
            height={896}
            className="aspect-video w-full rounded-3xl object-cover shadow-sm ring-1 ring-black/5"
          />
        </div>
      </section>

      <article className="mx-auto max-w-2xl space-y-6 px-6 py-16 text-lg leading-relaxed text-ink/80">
        <p>
          Growing up, I had a clear picture of my life. College, a steady
          career, a small house close to family. The word "missionary" felt
          like something other people did — people braver than me, more sure
          of themselves, more spiritual.
        </p>
        <p>
          Then a friend invited me on a short-term trip to the Philippines. I
          said yes mostly because I didn't want to say no. I expected ten
          warm, exhausting days and then a quiet flight home.
        </p>
        <p>
          What I didn't expect was the way the children in Manila would
          undo me. I didn't expect to feel so at home in a place so far from
          home. I didn't expect God to use a small concrete classroom in
          Antipolo to make my plans feel suddenly, gently, completely wrong.
        </p>
        <p>
          I came back to the U.S. and tried to shake it. I worked, I prayed, I
          waited for the feeling to pass. It didn't pass. It deepened. Verses
          I'd read for years started reading me back: "Whom shall I send, and
          who will go for us?" And finally, quietly, "Here I am. Send me."
        </p>

        <h2 className="font-display pt-8 text-3xl font-medium">Why I'm Going</h2>
        <p>
          I'm going because the children of Manila are worth knowing by name.
          I'm going because Kids International Ministries has been faithfully
          loving them for thirty years and I get to lend my hands and voice to
          that work.
        </p>
        <p>
          I'm going because the Gospel is true, and because the same Jesus
          who met me in a small concrete classroom is the one who calls me
          back.
        </p>
      </article>

      <section className="bg-paper px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">
            <img
              src={manilaStreet}
              alt="A street in Manila at golden hour"
              loading="lazy"
              width={1280}
              height={896}
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-sm ring-1 ring-black/5"
            />
            <div className="flex flex-col justify-center">
              <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.2em] text-clay">
                The Next Chapter
              </span>
              <h3 className="font-display mb-6 text-3xl font-medium leading-tight">
                Will you walk this road with me?
              </h3>
              <p className="mb-8 leading-relaxed text-ink/70">
                Missionaries don't go alone. Every step forward is held up by
                a community of friends praying and giving from home.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/partnership"
                  className="rounded-full bg-sage px-5 py-2.5 text-sm font-medium text-base ring-1 ring-sage hover:bg-sage/90"
                >
                  Partner With Me
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full bg-base px-5 py-2.5 text-sm font-medium text-ink ring-1 ring-black/10 hover:bg-paper"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
