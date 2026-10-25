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
    slug: "the-first-days-of-my-new-life",
    title: "The First Days of My New Life",
    date: "October 2026",
    isoDate: "2026-10-01",
    year: 2026,
    excerpt:
      "My first days in Manila have brought excitement, uncertainty, new ministry work, and the start of a year that already feels different.",
    cover: "/images/9A2BA09A-1E16-4B96-AFC5-6B1EABC2CC86_1_102_a.jpeg",
    blocks: [
      {
        type: "p",
        text: "Hello from the Philippines!",
      },
      {
        type: "p",
        text: "I made it to Manila! I've been here for about two weeks, and I'm excited to share what this new season has been like and what God is doing in my life.",
      },
      {
        type: "p",
        text: "I'll be honest, the adjustment has brought a mix of excitement and uncertainty. At times, I feel sure this is where I'm meant to be. At others, everything feels unfamiliar, and I wonder if coming here was the right decision.",
      },
      {
        type: "p",
        text: "From the moment I arrived, I sensed this trip would be different from my short-term visits. On the drive from the airport, it began to sink in that I wasn't here for a few weeks—I was here to live for a year. The differences in daily life between the Philippines and the U.S. felt more immediate, and I remember thinking, \"Oh no, what did I get myself into? I'm really doing this.\"",
      },
      {
        type: "img",
        src: "/images/E9E24499-EA22-4C40-B5AF-524078C6DDD1_1_102_o.jpeg",
        alt: "A Manila neighborhood street beneath a large tree",
      },
      {
        type: "p",
        text: "In that moment, God reminded me that I was right where He wanted me, and I felt a sense of peace. When I stepped out of the car, a local friend I had met on an earlier visit greeted me with a hug. Her welcome felt like a reminder of God's presence, which was exactly what I needed.",
      },
      {
        type: "p",
        text: "My role is beginning to take shape, too. I've joined the marketing team and am helping Norman Denler work toward his vision for KIM to become the best ministry at communicating. We're learning new tools and thinking strategically about how to support the ministry's goal of finding sponsors for children in the children's home. There's been a lot to learn as we go, along with plenty of brainstorming as we explore new ideas and ways to reach that goal.",
      },
      {
        type: "p",
        text: "My dad headed home on Monday after spending about 10 days here. Having him alongside me was such a gift. He helped set up AI tools for the ministry, brainstorm ways to build the marketing team for the future, and made it easier for me to settle in and connect with people. Those 10 days meant a lot to me not only because of the work he contributed, but because we got to share this experience together.",
      },
      {
        type: "img",
        src: "/images/2026-10-ivy-and-dad-on-plane.jpeg",
        alt: "Ivy and her dad smiling together on the plane to Manila",
      },
      {
        type: "p",
        text: "Since he left, the reality of being here for a year has started to sink in again. Being on my own and growing more independent feels harder and scarier than I expected. Even so, I trust God will use these challenges to shape me and help me grow.",
      },
      {
        type: "p",
        text: "I recently discovered that two other interns around my age are also serving here for the year! We're getting to know each other, and I'm grateful God has provided people I can relate to as I settle into this new season.",
      },
      {
        type: "p",
        text: "I have some wonderful news: my personal support is now fully funded! Woohoo! Thank you so much to everyone who has prayed for me and given so generously. I'm deeply grateful and encouraged by the way God has provided. With my personal needs covered, any additional gifts can support KIM and the projects here. There are many needs within the ministry, and I may share specific opportunities in future newsletters. Seeing God's provision is a powerful reminder that this is where He wants me to be.",
      },
      {
        type: "h",
        text: "A few prayer requests",
      },
      {
        type: "prayer",
        items: [
          "Pray for me as I continue settling in and adjusting to life here.",
          "Pray for my health and energy as I begin this year of service.",
          "Pray for continued opportunities to build relationships, and that God will keep reminding me I am not alone.",
          "Pray for wisdom, unity, and good communication as the marketing team builds structure and works toward its goals.",
        ],
      },
      {
        type: "p",
        text: "These first days have been both hard and encouraging. The adjustment keeps reminding me why I'm here: to serve God. Through the uncertainty, the people I'm meeting, and the work beginning to take shape, I'm seeing Him keep His promises and show me more of who He is. Thank you for praying for me and being part of this work.",
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
