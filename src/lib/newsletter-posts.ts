import kimChildren from "@/assets/kim-children.jpeg.asset.json";
import heroAsset from "@/assets/ivy-hero.jpeg.asset.json";
import { assetUrl } from "@/lib/utils";

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

export const posts: NewsletterPost[] = [
  {
    slug: "first-month-in-manila",
    title: "the first trip ",
    date: "May 2026",
    isoDate: "2026-05-01",
    year: 2026,
    excerpt:
      "The jet lag has worn off, my Tagalog is hilariously bad, and the kids at KidsConnect have officially adopted me. Here's what God has been doing.",
    cover: assetUrl(kimChildren.url),
    blocks: [
      {
        type: "p",
        text: "It's hard to believe a month has already passed. The first two weeks were a blur of orientation, paperwork, and trying to remember which jeepney route gets me home. The next two have settled into something that almost feels like a rhythm.",
      },
      { type: "h", text: "Settling in" },
      {
        type: "p",
        text: "My apartment is small but bright, with a window that looks out over a tangle of rooftops and a single, very persistent rooster. Mornings start early — usually because of the rooster — with coffee, my Bible, and a long list of names I'm trying to remember.",
      },
      {
        type: "img",
        src: assetUrl(heroAsset.url),
        alt: "View from the apartment window",
        caption: "Sunrise over the neighborhood — my favorite few minutes of the day.",
      },
      { type: "h", text: "At KidsConnect" },
      {
        type: "p",
        text: "The children are everything I hoped they would be: loud, curious, generous, and unafraid to correct my pronunciation. I've started leading a small reading group on Tuesdays and Thursdays, and a few of them have already decided they're going to teach me Tagalog whether I like it or not.",
      },
      {
        type: "quote",
        text: "Ate Ivy, your Tagalog is so bad it's almost cute. — Jonah, age 9",
      },
      { type: "h", text: "How you can pray" },
      {
        type: "prayer",
        items: [
          "Language learning — that I'd be a humble and patient student.",
          "Wisdom in building real relationships, not just busy ones.",
          "Health and energy in a climate my body is still learning.",
          "The kids at KidsConnect — that God would protect their hearts.",
        ],
      },
      {
        type: "p",
        text: "Thank you for being part of this. Every email, prayer, and gift reminds me I'm not out here alone. More soon.",
      },
    ],
  },
  {
    slug: "packing-up-a-life",
    title: "the second trip",
    date: "March 2026",
    isoDate: "2026-03-01",
    year: 2026,
    excerpt:
      "Saying goodbye is the strangest kind of grief — heavy and hopeful at the same time. A few thoughts on leaving well.",
    cover: assetUrl(heroAsset.url),
    blocks: [
      {
        type: "p",
        text: "I've spent the last six weeks slowly turning my apartment into a stack of boxes labeled in marker. Some are headed to storage, some to friends, and two suitcases are coming with me to Manila.",
      },
      { type: "h", text: "The weight of small things" },
      {
        type: "p",
        text: "It's the small things that get you. The coffee mug from a friend's wedding. The book my dad gave me in college. None of it is essential. All of it is hard to let go.",
      },
      { type: "h", text: "How you can pray" },
      {
        type: "prayer",
        items: [
          "A peaceful goodbye with family and close friends.",
          "Smooth logistics — visa, flights, and final fundraising.",
          "A soft heart that's ready to receive a new place.",
        ],
      },
    ],
  },
  {
    slug: "funded-almost",
    title: "the third trip ",
    date: "January 2026",
    isoDate: "2026-01-01",
    year: 2026,
    excerpt:
      "We're 87% of the way to monthly support. To everyone who has prayed, given, and shared — thank you. Here's what's next.",
    cover: assetUrl(kimChildren.url),
    blocks: [
      {
        type: "p",
        text: "Short version: we're 87% funded. Long version: I cried a little when I saw the spreadsheet this week. Watching God provide through this many of you has been one of the most humbling experiences of my life.",
      },
      { type: "h", text: "What's left" },
      {
        type: "p",
        text: "About $480/month in recurring partners and roughly $4,200 in one-time launch costs. If you've been waiting for the right moment, this is a really good moment.",
      },
      { type: "h", text: "How you can pray" },
      {
        type: "prayer",
        items: [
          "The final 13% — for the right partners at the right time.",
          "Wisdom as I finalize my departure date.",
          "Endurance for the last stretch of support raising.",
        ],
      },
    ],
  },
];

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
