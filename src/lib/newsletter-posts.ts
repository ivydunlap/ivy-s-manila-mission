export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "img"; src: string; alt: string; caption?: string }
  | { type: "prayer"; items: string[] }
  | { type: "quote"; text: string };

export type NewsletterPost = {
  slug: string;
  title: string;
  date: string; // human "May 2026"
  isoDate: string; // for sorting "2026-05-01"
  year: number;
  excerpt: string;
  cover: string;
  blocks: PostBlock[];
};

// No newsletters have been written yet — posts will be added here starting
// September 2026. See README/newsletter_.email.tsx for how to add a new post.
export const posts: NewsletterPost[] = [];

export function getPostBySlug(slug: string): NewsletterPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByYear(): Array<{ year: number; items: NewsletterPost[] }> {
  const sorted = [...posts].sort((a, b) => b.isoDate.localeCompare(a.isoDate));
  const map = new Map<number, NewsletterPost[]>();
  for (const p of sorted) {
    if (!map.has(p.year)) map.set(p.year, []);
    map.get(p.year)!.push(p);
  }
  return Array.from(map.entries())
    .sort((a, b) => b[0] - a[0])
    .map(([year, items]) => ({ year, items }));
}
