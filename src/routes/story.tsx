import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, Eyebrow } from "@/components/site-shell";
import storyWorshipAsset from "@/assets/story-worship.jpeg.asset.json";
import storyCommunityAsset from "@/assets/story-community.jpeg.asset.json";
import { assetUrl } from "@/lib/utils";

const ivyServing = assetUrl(storyWorshipAsset.url);
const manilaStreet = assetUrl(storyCommunityAsset.url);

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
      {/* Photographic intro — full bleed with side-weighted overlay */}
      <section className="relative isolate overflow-hidden">
        <img
          src={ivyServing}
          alt="Ivy serving alongside a child in Manila"
          width={1280}
          height={896}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(95deg, oklch(0.22 0.04 245 / 0.82) 0%, oklch(0.22 0.04 245 / 0.6) 40%, oklch(0.22 0.04 245 / 0.15) 72%, transparent 100%)",
          }}
        />
        <div className="relative mx-auto grid min-h-[60vh] max-w-6xl grid-cols-12 items-end px-6 py-24 md:min-h-[72vh] md:py-32">
          <div className="col-span-12 max-w-[36rem] md:col-span-7">
            <Eyebrow tone="white">My Story</Eyebrow>
            <h1 className="font-display text-balance text-5xl font-medium leading-[1.04] text-white md:text-7xl">
              Where do I <span className="italic">even start.</span>
            </h1>
            <p className="mt-8 max-w-[48ch] text-lg leading-relaxed text-white/85">
              Honestly, I can't fully put into words what this means to me. It
              would be so much easier if you could just get on a plane and
              experience it yourself. But I'll try.
            </p>
          </div>
        </div>
      </section>

      {/* Long-form narrative — editorial column */}
      <article className="mx-auto max-w-2xl px-6 py-20 md:py-28">
        <p className="font-display mb-16 border-l-2 border-clay/50 pl-6 text-2xl italic leading-snug text-ink/80 md:text-3xl">
          It really could have only been the Lord, the way we got connected.
        </p>

        <Chapter eyebrow="Chapter One" title="How We Found KIM">
          <p>
            Two years ago, my family planned a vacation through Southeast Asia. My parents had taken my siblings and I on other amazing trips before, but this time they wanted us to see that the world isn’t just perfect Hawaii beaches and Italian pasta. They wanted us to have a deeper perspective on the world— the kind you can only get by actually experiencing it.
          </p>
          <p>
            So, my mom literally googled "Missions organizations in Southeast Asia" and began scrolling through options. Most of them either didn't allow kids at all or had a ton of restrictions, like "kids can come but only if they are a certain age," or "they can only do certain activities," and so on. Then, she found Kids International Ministries in Manila, Philippines. What stood out immediately was their message:
          </p>
          <p className="font-display italic text-xl text-ink pl-6 border-l-2 border-clay/30 my-6">
            "We love families! Bring your kids, any ages!"
          </p>
          <p>
            With very little preparation, and no idea what to expect, we hopped on a plane and set out on our first family mission trip.
          </p>
          <p>
            We didn't know it then, but after that trip, we would never be the same.
          </p>
        </Chapter>

        <Chapter eyebrow="Chapter Two" title="The First Trip">
          <p>
            I had never been on a missions trip before. By the time we
            arrived in Manila, I was exhausted. In my mind, the missions
            portion of the trip felt like just something I had to do. I knew
            it would be hard and uncomfortable, and honestly? It was not the
            part of the trip I was looking forward to.
          </p>
          <p className="font-display text-2xl italic text-ink">
            I could not have anticipated what God was about to do.
          </p>
          <p>
            I arrived tired, a little empty, and ready to get it over with.
            What I found was something I was completely unprepared for. I
            met people living in poverty — real poverty, nothing like the
            world I had always known. But, they had more joy and love to
            give than almost anyone I had ever met. Their faith wasn't
            theoretical. It was steady and real and alive in a way that made
            my own feel brand new.
          </p>
        </Chapter>

        <Chapter eyebrow="Chapter Three" title="The Second Trip — and the Call">
          <p>
            We spent the next year planning, praying, and preparing to
            return — this time with 28 people from our church. We wanted
            them to get to experience what we had.
          </p>
          <p>
            Early in the trip, a thought just kind of dropped into my head:{" "}
            <em>what if I came back?</em> Not for a week. For real — long term.
          </p>
          <p>
            I knew immediately it wasn't my own idea. So instead of deciding
            anything, I just started praying. Every single day of that trip:{" "}
            <em>God, make it clear. Show me if this is what you want me to do.</em>{" "}
            By the end of the trip, it was clear. And every time I've
            wondered if I heard wrong, God has just kept reinforcing it.
          </p>
        </Chapter>

        <Chapter eyebrow="Chapter Four" title="Why Manila">
          <p>
            I've asked myself that question a lot. Why me? Why there? I was
            born into a family that loves me, in a country full of
            opportunity, with resources and safety most people in the world
            will never have. Why do I get all of that?
          </p>
          <p>
            I don't have a complete answer. But I know that the life I've
            been given isn't just for me. And I love the people of Manila —
            not in an abstract, missionary-poster way. I know some of their
            names and their stories. I've been there three times now. I know
            where I'm going and who I'm going back to.
          </p>
        </Chapter>

        <Chapter eyebrow="Honest" title="What I'm Nervous About">
          <p>
            I want to be honest about this part. Adjusting to a completely
            different way of life is going to be hard. Fewer resources. More
            discomfort. A new culture. Finding my own community from
            scratch. And leaving my family.
          </p>
          <p className="font-display text-2xl italic text-ink">
            I'm nervous. I won't pretend otherwise. But I'm nervous, not
            scared. Because I know who called me here. And He will take care
            of me.
          </p>
        </Chapter>

        <Chapter eyebrow="One More Thing" title="A vision, thirty years on">
          <p>
            My dad had a vision about thirty years ago — before I was born —
            for something he called Missions in Action. He'd seen how much
            time missionaries spent just trying to stay connected with their
            supporters. And right as the internet was beginning, he saw what
            could be possible: what if missionaries could stay on the field
            and stay deeply connected with the people back home who loved
            them?
          </p>
          <p>
            Life got in the way of that dream. Career, marriage, five kids.
            And now here I am — his daughter — heading to Manila to do
            almost exactly what he envisioned. I don't think that's a
            coincidence either.
          </p>
        </Chapter>

        <div className="mt-16 border-t border-ink/10 pt-12">
          <p className="font-display text-pretty text-2xl italic leading-snug text-ink/80">
            If you've read this far — thank you. It tells me you care.
            Whether you pray for me once a week, give $25 a month, or someday
            get on a plane yourself — you are part of this story. I don't
            take that lightly.
          </p>
          <p className="font-display mt-8 text-right text-2xl italic text-clay">
            — Ivy
          </p>
        </div>
      </article>

      {/* Next chapter — split, photographic, with overlay text card */}
      <section className="relative isolate overflow-hidden">
        <img
          src={manilaStreet}
          alt="A street in Manila at golden hour"
          loading="lazy"
          width={1280}
          height={896}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, oklch(0.22 0.04 245 / 0.45) 0%, oklch(0.28 0.06 40 / 0.55) 100%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="ml-auto max-w-lg bg-base/95 p-10 backdrop-blur-sm md:p-12">
            <Eyebrow>The Next Chapter</Eyebrow>
            <h3 className="font-display mb-6 text-3xl font-medium leading-tight md:text-4xl">
              Will you join me?
            </h3>
            <p className="mb-8 leading-relaxed text-ink/75">
              &nbsp;Some go, and some send — through prayer, giving, and encouragement.&nbsp;I need people who will pray, give, and support me in this calling.&nbsp;
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/partnership"
                className="inline-flex rounded-full bg-clay px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-clay/90"
              >
                Partner With Me
              </Link>
              <Link
                to="/contact"
                className="inline-flex rounded-full bg-transparent px-6 py-3 text-sm font-medium text-ink ring-1 ring-ink/20 transition-colors hover:bg-ink/5"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function Chapter({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16 first:mt-0">
      <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.25em] text-clay">
        {eyebrow}
      </span>
      <h2 className="font-display mb-8 text-3xl font-medium leading-tight text-ink md:text-4xl">
        {title}
      </h2>
      <div className="space-y-5 text-lg leading-relaxed text-ink/80">
        {children}
      </div>
    </section>
  );
}
