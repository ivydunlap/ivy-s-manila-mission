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
    slug: "a-community-that-carries-me",
    title: "A Community That Carries Me",
    date: "September 2026",
    isoDate: "2026-09-01",
    year: 2026,
    excerpt:
      "A first newsletter, a departure update, and a grateful look at the community carrying me toward Manila.",
    cover: "/images/IMG_2723.jpeg",
    blocks: [
      {
        type: "p",
        text: "Hello everyone!",
      },
      {
        type: "p",
        text: "I am so excited to be sending out my official first newsletter! I have been looking forward to sharing updates with you as I prepare to move to Manila, and I wanted to start by saying a huge thank you. Thank you to everyone who has committed to supporting me through prayer, financial partnership, encouragement, or simply showing up. I am so grateful that God has given me such wonderful people to walk with me into this next chapter.",
      },
      {
        type: "p",
        text: "If you are new to my story, here is the short version of how I got here. Two years ago, I went to Manila with my family, and I came home with my heart changed. I experienced people whose lives looked very different from mine, but what stayed with me most was seeing their hunger for Christ, hope, and the assurance that they were seen and loved. God used that experience to reveal Himself to me in a way that felt real. He put Manila on my heart, and not a day has gone by since then that I have not thought about it. I can never unsee what I experienced there, and I can never forget it.",
      },
      {
        type: "p",
        text: "Now I am getting ready to return to the community that changed my heart, and I am honestly so excited to be going back! Through Kids International Ministries, I will be serving in several different ways. I will help support KidsConnect, KIM's communication platform, welcome and guide visiting teams, continue learning Tagalog so I can build deeper relationships and share the gospel respectfully, and serve in youth and children's ministry wherever I am needed. Some of this work will happen behind the scenes, and some of it will happen directly with children and families. I love that my role includes both, and I am excited to see how God uses each part of it.",
      },
      {
        type: "p",
        text: "I also have a little departure update! I originally expected to leave during the last week of September, but I am now planning to leave on October 8. My dad will fly down with me, help me get settled, and work with the ministry's director for about 10 days. This date works best for both of our schedules, and I am especially grateful that he will be able to share the beginning of this experience with me.",
      },
      {
        type: "p",
        text: "If there is anything I have learned about following God, it is that I need to hold my plans loosely! We never know when He will change our timelines or lead us into something we did not expect. This change has been a fun reminder that even when my plans move, God is still faithful and is always working things together in ways I could not have planned myself.",
      },
      {
        type: "p",
        text: "One of the sweetest ways I have seen God's provision recently was through my church community. Restoration Church turned their annual end-of-summer barbecue into a fundraiser for my mission this year. It was such a fun and special evening, and I felt completely surrounded by the love of my church family and community. Everyone who supported me, and everyone who simply came and showed up, reminded me that I am not carrying this alone. I truly felt like I was seeing God's provision right in front of my eyes, and I cannot put into words how much it meant to me.",
      },
      {
        type: "p",
        text: "Because of the generosity and prayers of so many people, I am already 37% funded for my year in Manila! I am so, so grateful. That number represents people choosing to join me in this mission, and I do not take that support for granted. Thank you for helping make this possible!",
      },
      {
        type: "p",
        text: "As I spend these last weeks with my family, friends, and community, I want to soak up this time with the people I love while also preparing my heart for change. I know one of the hardest parts of moving will be facing loneliness, settling into a new place and culture, making new friends, and finding community. I am nervous about that, but I am also excited to see how God provides. He has been showing me that He provides community and love, and I am trusting that He will continue to do so in Manila.",
      },
      {
        type: "h",
        text: "A few prayer requests",
      },
      {
        type: "prayer",
        items: [
          "Pray for my heart as I prepare to leave behind my family, friends, and community.",
          "Pray for Kids International Ministries as a whole - for provision, for stamina for the long-term staff, and for wisdom for the leaders.",
          "Pray that God will draw me closer to Him and teach me to abide in Him as my faith is stretched in new ways.",
        ],
      },
      {
        type: "p",
        text: "Thank you again for being part of this with me! Whether you are praying, giving, encouraging me, or simply following along, you are helping carry me toward Manila. I am excited, nervous, and so ready to get there and be part of what God is doing. I cannot wait to share more updates with you along the way!",
      },
      {
        type: "p",
        text: "With gratitude,",
      },
      {
        type: "p",
        text: "Ivy",
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
