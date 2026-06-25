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
          "How a tagged-on missions trip to Manila became a clear call to long-term ministry with Kids International Ministries.",
      },
      { property: "og:title", content: "My Story — Ivy Dunlap" },
      {
        property: "og:description",
        content:
          "From an exhausted first trip to a clear long-term call — Ivy's full story, in her own voice.",
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
        title="Where do I even start."
        intro="Honestly, I can't fully put into words what this means to me. It would be so much easier if you could just get on a plane and experience it yourself. But I'll try."
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
        <h2 className="font-display pt-2 text-3xl font-medium text-ink">
          How We Found KIM
        </h2>
        <p>
          Two years ago, my family planned a vacation trip through Southeast
          Asia. At the end of it, my parents decided to tag on a missions
          trip. My mom literally googled mission organizations in Southeast
          Asia and started looking through options. A lot of them had
          restrictions — kids can come but only if they're a certain age, or
          they can only do certain things. Then she found Kids International
          Ministries. What stood out to her immediately was that they said:{" "}
          <em>we love families. Bring your kids, any ages.</em>
        </p>
        <p>It really could have only been the Lord, the way we got connected.</p>

        <h2 className="font-display pt-8 text-3xl font-medium text-ink">
          The First Trip
        </h2>
        <p>
          I had never been on a missions trip before. By the time we arrived
          in Manila, I was exhausted. In my mind, the missions portion of the
          trip felt like just something I had to do. I knew it would be hard
          and uncomfortable, and honestly? It was not the part of the trip I
          was looking forward to.
        </p>
        <p>I could not have anticipated what God was about to do.</p>
        <p>
          I arrived tired, a little empty, and ready to get it over with. What
          I found was something I was completely unprepared for. I met people
          living in poverty — real poverty, nothing like the world I had
          always known — and they had more joy and love to give than almost
          anyone I had ever met. Their faith wasn't theoretical. It was steady
          and real and alive in a way that made my own feel brand new.
        </p>
        <p>
          I left filled. Changed. My heart on fire for God. And devastated to
          say goodbye. My whole family felt it. We knew we had to go back.
        </p>

        <h2 className="font-display pt-8 text-3xl font-medium text-ink">
          The Second Trip — and the Call
        </h2>
        <p>
          We spent the next year planning, praying, and preparing to return —
          this time with 28 people from our church. We wanted them to get to
          experience what we had.
        </p>
        <p>
          Early in the trip, a thought just kind of dropped into my head:{" "}
          <em>what if I came back?</em> Not for a week. For real — long term.
        </p>
        <p>
          I knew immediately it wasn't my own idea. So instead of deciding
          anything, I just started praying. Every single day of that trip:{" "}
          <em>God, make it clear. Show me if this is what you want me to do.</em>{" "}
          By the end of the trip, it was clear. And every time I've wondered
          if I heard wrong, God has just kept reinforcing it.
        </p>

        <h2 className="font-display pt-8 text-3xl font-medium text-ink">
          Why Manila
        </h2>
        <p>
          I've asked myself that question a lot. Why me? Why there? I was born
          into a family that loves me, in a country full of opportunity, with
          resources and safety most people in the world will never have. Why
          do I get all of that?
        </p>
        <p>
          I don't have a complete answer. But I know that the life I've been
          given isn't just for me. And I love the people of Manila — not in
          an abstract, missionary-poster way. I know some of their names and
          their stories. I've been there three times now. I know where I'm
          going and who I'm going back to.
        </p>

        <h2 className="font-display pt-8 text-3xl font-medium text-ink">
          What I'm Nervous About
        </h2>
        <p>
          I want to be honest about this part. Adjusting to a completely
          different way of life is going to be hard. Fewer resources. More
          discomfort. A new culture. Finding my own community from scratch.
          And leaving my family — we are so close, all of us — that will
          probably be the hardest thing.
        </p>
        <p>
          I'm committing to at least a year. I know the homesickness is going
          to hit hard around the six-month mark, and I want to push through
          it — to get to the other side and experience what life actually
          feels like when you've really settled in somewhere new.
        </p>
        <p>
          I'm nervous. I won't pretend otherwise. But I'm nervous, not scared.
          Because I know who called me here. And He will take care of me.
        </p>

        <h2 className="font-display pt-8 text-3xl font-medium text-ink">
          One More Thing
        </h2>
        <p>
          My dad had a vision about thirty years ago — before I was born —
          for something he called Missions in Action. He'd seen how much time
          missionaries spent just trying to stay connected with their
          supporters. And right as the internet was beginning, he saw what
          could be possible: what if missionaries could stay on the field and
          stay deeply connected with the people back home who loved them?
        </p>
        <p>
          Life got in the way of that dream. Career, marriage, five kids. And
          now here I am — his daughter — heading to Manila to do almost
          exactly what he envisioned. I don't think that's a coincidence
          either.
        </p>

        <p className="border-l-2 border-clay/40 pl-6 pt-6 italic text-ink/70">
          If you've read this far — thank you. It tells me you care. Whether
          you pray for me once a week, give $25 a month, or someday get on a
          plane yourself — you are part of this story. I don't take that
          lightly.
        </p>
        <p className="font-display text-right text-xl italic">— Ivy</p>
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
                Will you hold the rope with me?
              </h3>
              <p className="mb-8 leading-relaxed text-ink/70">
                I cannot go alone. Some are called to go; others are called to
                hold the rope — to pray, to give, to stand faithfully with
                the ones who go.
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
