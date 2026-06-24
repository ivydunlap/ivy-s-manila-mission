import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site-shell";

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

      {/* Subscribe */}
      <section className="px-6">
        <div className="mx-auto max-w-2xl rounded-3xl bg-paper p-8 ring-1 ring-black/5">
          <h2 className="font-display mb-2 text-2xl font-medium">
            Get updates by email
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-ink/65">
            One thoughtful email a month. No spam, just the real stuff.
          </p>
          <form
            className="flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="you@email.com"
              className="flex-1 rounded-full bg-base px-5 py-3 text-sm ring-1 ring-black/10 placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-sage"
            />
            <button
              type="submit"
              className="rounded-full bg-sage px-6 py-3 text-sm font-medium text-base ring-1 ring-sage hover:bg-sage/90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Archive */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-display text-3xl font-medium">Archive</h2>
            <span className="text-xs uppercase tracking-widest text-ink/40">
              {posts.length} posts
            </span>
          </div>
          <div className="divide-y divide-border/60">
            {posts.map((p) => (
              <article key={p.title} className="group py-8">
                <div className="mb-2 text-xs uppercase tracking-widest text-clay">
                  {p.date}
                </div>
                <h3 className="font-display mb-3 text-2xl font-medium leading-snug transition-colors group-hover:text-sage">
                  <Link to="/newsletter">{p.title}</Link>
                </h3>
                <p className="leading-relaxed text-ink/70">{p.excerpt}</p>
                <Link
                  to="/newsletter"
                  className="mt-4 inline-block text-sm font-semibold text-ink underline-offset-4 hover:underline"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
