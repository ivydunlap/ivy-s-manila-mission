import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader, Eyebrow } from "@/components/site-shell";

export const Route = createFileRoute("/newsletter")({
  head: () => ({
    meta: [
      { title: "Newsletter — Ivy Dunlap" },
      {
        name: "description",
        content:
          "Monthly updates from Ivy Dunlap in Manila — stories, prayer requests, and what God is doing.",
      },
      { property: "og:title", content: "Newsletter — Ivy Dunlap" },
      {
        property: "og:description",
        content: "Monthly updates from the field in Manila.",
      },
    ],
  }),
  component: NewsletterPage,
});

const posts = [
  {
    date: "May 2026",
    title: "First month in Manila",
    excerpt:
      "The jet lag has worn off, my Tagalog is hilariously bad, and the kids at KidsConnect have officially adopted me. Here's what God has been doing.",
  },
  {
    date: "March 2026",
    title: "Packing up a life",
    excerpt:
      "Saying goodbye is the strangest kind of grief — heavy and hopeful at the same time. A few thoughts on leaving well.",
  },
  {
    date: "January 2026",
    title: "Funded! (Almost.)",
    excerpt:
      "We're 87% of the way to monthly support. To everyone who has prayed, given, and shared — thank you. Here's what's next.",
  },
  {
    date: "November 2025",
    title: "Why Kids International Ministries",
    excerpt:
      "I get asked all the time: why this organization? Here's the story of how God lined up the partnership.",
  },
];

function NewsletterPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Newsletter"
        title="From the field."
        intro="Monthly stories, prayer requests, and updates from Manila. The best way to follow along."
      />

      {/* Subscribe — editorial bar */}
      <section className="border-b border-ink/10 bg-paper/60 px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1.2fr] md:items-end md:gap-16">
          <div>
            <Eyebrow>Subscribe</Eyebrow>
            <h2 className="font-display text-3xl font-medium leading-tight md:text-4xl">
              One thoughtful email{" "}
              <span className="italic text-clay/90">a month.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/65">
              No spam, just the real stuff — stories, prayer requests, and
              what God is doing.
            </p>
          </div>
          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="flex-1 border-b border-ink/25 bg-transparent px-1 py-3 text-base placeholder:text-ink/40 focus:border-clay focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-clay px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-clay/90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Archive — editorial list */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 flex items-end justify-between border-b border-ink/15 pb-6">
            <div>
              <Eyebrow>Archive</Eyebrow>
              <h2 className="font-display text-3xl font-medium md:text-4xl">
                Past <span className="italic">letters.</span>
              </h2>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink/45">
              {posts.length} posts
            </span>
          </div>
          <div className="divide-y divide-ink/10">
            {posts.map((p) => (
              <article key={p.title} className="group grid grid-cols-1 gap-2 py-10 md:grid-cols-[8rem_1fr] md:gap-8">
                <div className="font-display text-sm italic text-clay">
                  {p.date}
                </div>
                <div>
                  <h3 className="font-display mb-3 text-2xl font-medium leading-snug transition-colors group-hover:text-clay md:text-3xl">
                    <Link to="/newsletter">{p.title}</Link>
                  </h3>
                  <p className="leading-relaxed text-ink/70">{p.excerpt}</p>
                  <Link
                    to="/newsletter"
                    className="font-display mt-5 inline-flex items-center gap-2 border-b-2 border-clay/30 pb-1 text-sm font-semibold italic transition-colors hover:border-clay"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
