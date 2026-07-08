import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader, Eyebrow } from "@/components/site-shell";
import { SubscribeForm } from "@/components/subscribe-form";
import { posts, getPostsByYear } from "@/lib/newsletter-posts";

export const Route = createFileRoute("/newsletter")({
  head: () => ({
    meta: [
      { title: "Newsletter Updates — Ivy Dunlap" },
      {
        name: "description",
        content:
          "Monthly updates, stories, and prayer requests from my ministry in Manila. Read past newsletters or subscribe to stay connected.",
      },
      { property: "og:title", content: "Newsletter Updates — Ivy Dunlap" },
      {
        property: "og:description",
        content:
          "Monthly updates, stories, and prayer requests from my ministry in Manila.",
      },
    ],
  }),
  component: NewsletterPage,
});

function NewsletterPage() {
  const sorted = [...posts].sort((a, b) => b.isoDate.localeCompare(a.isoDate));
  const archive = getPostsByYear();

  return (
    <SiteShell>
      <PageHeader
        eyebrow="Newsletter"
        title="Newsletter Updates"
        intro="Monthly updates, stories, and prayer requests from my ministry in Manila. Read past newsletters or subscribe to stay connected."
      />

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_18rem] lg:gap-16">
          {/* Posts */}
          <div>
            <div className="mb-10 flex items-end justify-between border-b border-ink/10 pb-5">
              <div>
                <Eyebrow>Latest</Eyebrow>
                <h2 className="font-display text-2xl font-medium md:text-3xl">
                  All <span className="italic text-clay/90">letters</span>
                </h2>
              </div>
              {posts.length > 0 && (
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink/45">
                  {posts.length} posts
                </span>
              )}
            </div>

            {sorted.length === 0 ? (
              <div className="rounded-2xl border border-ink/10 bg-paper/70 p-12 text-center md:p-16">
                <p className="font-display text-2xl italic leading-snug text-ink/70 md:text-3xl">
                  Monthly newsletters will be posted here starting September
                  2026.
                </p>
              </div>
            ) : (
              <div className="grid gap-10 sm:grid-cols-2">
                {sorted.map((p) => (
                  <article key={p.slug} className="group flex flex-col">
                    <Link
                      to="/newsletter/$slug"
                      params={{ slug: p.slug }}
                      className="block overflow-hidden rounded-2xl bg-paper"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={p.cover}
                          alt={p.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                    <div className="mt-5">
                      <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-clay">
                        {p.date}
                      </div>
                      <h3 className="font-display mt-3 text-2xl font-medium leading-snug transition-colors group-hover:text-clay">
                        <Link to="/newsletter/$slug" params={{ slug: p.slug }}>
                          {p.title}
                        </Link>
                      </h3>
                      <p className="mt-3 leading-relaxed text-ink/70">{p.excerpt}</p>
                      <Link
                        to="/newsletter/$slug"
                        params={{ slug: p.slug }}
                        className="font-display mt-5 inline-flex items-center gap-2 border-b-2 border-clay/30 pb-1 text-sm font-semibold italic transition-colors hover:border-clay"
                      >
                        Read more →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-12 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-ink/10 bg-paper/70 p-7">
              <Eyebrow>Subscribe</Eyebrow>
              <h3 className="font-display text-2xl font-medium leading-tight">
                One email <span className="italic text-clay/90">a month.</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                Stories, prayer requests, and what God is doing in Manila. No
                spam, ever.
              </p>
              <SubscribeForm variant="stacked" />
            </div>

            <div>
              <Eyebrow>Archive</Eyebrow>
              <h3 className="font-display text-xl font-medium">By year</h3>
              <div className="mt-5 space-y-6">
                {archive.length === 0 ? (
                  <p className="text-sm leading-relaxed text-ink/55">
                    No newsletters yet — check back starting September 2026.
                  </p>
                ) : (
                  archive.map((group) => (
                    <div key={group.year}>
                      <div className="mb-2 flex items-baseline justify-between border-b border-ink/10 pb-2">
                        <span className="font-display text-lg font-medium italic">
                          {group.year}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink/40">
                          {group.items.length}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {group.items.map((p) => (
                          <li key={p.slug}>
                            <Link
                              to="/newsletter/$slug"
                              params={{ slug: p.slug }}
                              className="group flex items-baseline justify-between gap-3 text-sm text-ink/75 transition-colors hover:text-clay"
                            >
                              <span className="leading-snug">{p.title}</span>
                              <span className="shrink-0 text-[10px] uppercase tracking-widest text-ink/40">
                                {p.date.split(" ")[0].slice(0, 3)}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))
                )}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </SiteShell>
  );
}
