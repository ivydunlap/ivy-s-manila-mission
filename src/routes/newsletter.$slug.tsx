import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell, Eyebrow } from "@/components/site-shell";
import { getPostBySlug, posts, type PostBlock } from "@/lib/newsletter-posts";

export const Route = createFileRoute("/newsletter/$slug")({
  head: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) return { meta: [{ title: "Newsletter — Ivy Dunlap" }] };
    return {
      meta: [
        { title: `${post.title} — Newsletter — Ivy Dunlap` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:image", content: post.cover },
      ],
    };
  },
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  notFoundComponent: () => (
    <SiteShell>
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <Eyebrow>Not found</Eyebrow>
        <h1 className="font-display text-4xl font-medium">
          That letter isn't here.
        </h1>
        <p className="mt-4 text-ink/65">
          It may have been moved or never existed.
        </p>
        <Link
          to="/newsletter"
          className="font-display mt-8 inline-flex items-center gap-2 border-b-2 border-clay/30 pb-1 text-sm font-semibold italic hover:border-clay"
        >
          ← Back to Newsletters
        </Link>
      </div>
    </SiteShell>
  ),
  errorComponent: ({ reset }) => (
    <SiteShell>
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="font-display text-3xl">Something went wrong.</h1>
        <button
          onClick={reset}
          className="font-display mt-6 rounded-full bg-clay px-6 py-3 text-sm font-medium text-white"
        >
          Try again
        </button>
      </div>
    </SiteShell>
  ),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();

  const sorted = [...posts].sort((a, b) => b.isoDate.localeCompare(a.isoDate));
  const idx = sorted.findIndex((p) => p.slug === post.slug);
  const prev = idx < sorted.length - 1 ? sorted[idx + 1] : null;
  const next = idx > 0 ? sorted[idx - 1] : null;

  return (
    <SiteShell>
      <article>
        {/* Header */}
        <header className="border-b border-ink/10 px-6 pt-20 pb-12 md:pt-28 md:pb-16">
          <div className="mx-auto max-w-3xl">
            <Link
              to="/newsletter"
              className="text-[10px] font-bold uppercase tracking-[0.28em] text-clay hover:text-ink"
            >
              ← Back to Newsletters
            </Link>
            <div className="mt-6 text-sm font-medium italic text-ink/60">
              {post.date}
            </div>
            <h1 className="font-display mt-3 text-balance text-4xl font-medium leading-[1.05] md:text-6xl">
              {post.title}
            </h1>
          </div>
        </header>

        {/* Cover */}
        <div className="px-6 pt-10">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-paper">
            <img
              src={post.cover}
              alt={post.title}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-2xl space-y-7 text-lg leading-relaxed text-ink/80">
            {post.blocks.map((b: PostBlock, i: number) => {
              if (b.type === "p") return <p key={i}>{b.text}</p>;
              if (b.type === "h")
                return (
                  <h2
                    key={i}
                    className="font-display !mt-12 text-3xl font-medium leading-tight text-ink"
                  >
                    {b.text}
                  </h2>
                );
              if (b.type === "img")
                return (
                  <figure key={i} className="!my-12">
                    <div className="overflow-hidden rounded-2xl bg-paper">
                      <img
                        src={b.src}
                        alt={b.alt}
                        className="aspect-[16/10] w-full object-cover"
                      />
                    </div>
                    {b.caption && (
                      <figcaption className="mt-3 text-center text-sm italic text-ink/55">
                        {b.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              if (b.type === "quote")
                return (
                  <blockquote
                    key={i}
                    className="font-display !my-10 border-l-2 border-clay pl-6 text-2xl italic leading-snug text-ink/85"
                  >
                    {b.text}
                  </blockquote>
                );
              if (b.type === "prayer")
                return (
                  <div
                    key={i}
                    className="!my-10 rounded-2xl border border-ink/10 bg-paper/70 p-7"
                  >
                    <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-clay">
                      Prayer requests
                    </div>
                    <ul className="mt-4 space-y-3 text-base text-ink/80">
                      {b.items.map((item: string, j: number) => (
                        <li key={j} className="flex gap-3">
                          <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-clay" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              return null;
            })}
          </div>
        </div>

        {/* Prev / Next */}
        {(prev || next) && (
          <nav className="border-t border-ink/10 px-6 py-12">
            <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
              {prev ? (
                <Link
                  to="/newsletter/$slug"
                  params={{ slug: prev.slug }}
                  className="group rounded-2xl border border-ink/10 p-6 transition-colors hover:border-clay/40"
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink/50">
                    ← Older
                  </div>
                  <div className="font-display mt-2 text-lg font-medium group-hover:text-clay">
                    {prev.title}
                  </div>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  to="/newsletter/$slug"
                  params={{ slug: next.slug }}
                  className="group rounded-2xl border border-ink/10 p-6 text-right transition-colors hover:border-clay/40"
                >
                  <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-ink/50">
                    Newer →
                  </div>
                  <div className="font-display mt-2 text-lg font-medium group-hover:text-clay">
                    {next.title}
                  </div>
                </Link>
              ) : (
                <span />
              )}
            </div>
          </nav>
        )}

        {/* Subscribe + Partner CTA */}
        <section className="border-t border-ink/10 bg-paper/60 px-6 py-20">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2 md:items-center">
            <div>
              <Eyebrow>Subscribe</Eyebrow>
              <h2 className="font-display text-3xl font-medium leading-tight md:text-4xl">
                Get the next letter <span className="italic text-clay/90">in your inbox.</span>
              </h2>
              <p className="mt-4 text-ink/65">
                One thoughtful email a month — stories, prayer requests, and
                what God is doing in Manila.
              </p>
              <form
                className="mt-6 flex flex-col gap-3 sm:flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  required
                  placeholder="you@email.com"
                  className="flex-1 rounded-full border border-ink/15 bg-base px-5 py-3 text-sm placeholder:text-ink/40 focus:border-clay focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-clay px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-clay/90"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-base p-8">
              <Eyebrow>Partner</Eyebrow>
              <h3 className="font-display text-2xl font-medium leading-snug">
                Walk with me <span className="italic text-clay/90">financially.</span>
              </h3>
              <p className="mt-3 text-ink/65">
                Every monthly partner makes this work possible. Join the team.
              </p>
              <Link
                to="/partnership"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-base transition-colors hover:bg-clay hover:text-white"
              >
                Partner with me →
              </Link>
            </div>
          </div>
        </section>
      </article>
    </SiteShell>
  );
}
