import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader, Eyebrow } from "@/components/site-shell";
import { Smartphone, Users, Globe, Heart } from "lucide-react";

export const Route = createFileRoute("/my-role")({
  head: () => ({
    meta: [
      { title: "My Role in Manila — Ivy Dunlap" },
      {
        name: "description",
        content:
          "A clear look at Ivy's role with Kids International Ministries: KidsConnect, hosting teams, Tagalog and gospel sharing, and youth and kids ministry.",
      },
      { property: "og:title", content: "My Role in Manila — Ivy Dunlap" },
      {
        property: "og:description",
        content:
          "Hands-on ministry, behind-the-scenes support, and helping teams experience the same life-changing things that first called me to Manila.",
      },
    ],
  }),
  component: MyRolePage,
});

const roles = [
  {
    number: "01",
    icon: Smartphone,
    tone: "clay" as const,
    title: "KidsConnect",
    subtitle: "Communication Ministry",
    description:
      "I’ll be helping build and support the KidsConnect app, which helps missionaries, ministries, and visiting teams communicate clearly. I’ll be working on things like setting up the platform, helping people share updates, and strengthening communication inside KIM. It’s a behind-the-scenes role, but it impacts every ministry and every team — and it fits my strengths in organization, clarity, and connection.",
  },
  {
    number: "02",
    icon: Users,
    tone: "sage" as const,
    title: "Hosting Teams",
    subtitle: "Welcoming & Guiding Visitors",
    description:
      "I’ll also be helping host teams when they come to serve. This means welcoming them, guiding them, helping them understand the culture, and connecting them with the community. This part is really personal to me because it’s exactly how God first grabbed my heart in Manila.",
  },
  {
    number: "03",
    icon: Globe,
    tone: "clay" as const,
    title: "Tagalog + Gospel Sharing",
    subtitle: "Language & Relationship",
    description:
      "I’m learning Tagalog so I can connect more deeply with people, build real relationships, and share the gospel in a way that honors their culture. Speaking someone’s language shows love, respect, and humility — and it opens doors for meaningful conversations. This is a big part of why I’m going, because I want to love people well and communicate in a way that feels personal and genuine.",
  },
  {
    number: "04",
    icon: Heart,
    tone: "sage" as const,
    title: "Youth + Kids Ministry",
    subtitle: "Showing Up Where Needed",
    description:
      "I’ll have opportunities to serve in youth and kids programs, help in the children’s home, and support different youth and children’s ministries. A lot of my role is simply showing up where I’m needed and being part of what God is already doing.",
  },
];

function MyRolePage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="My Role"
        title="What I'll be doing in Manila."
        intro="My role at Kids International Ministries is a mix of hands-on ministry, behind-the-scenes support, and helping teams experience the same life-changing things that first impacted me. I’m stepping into several areas where I can serve, grow, and make a real difference."
      />

      {/* Commitment length */}
      <section className="px-6 pb-4 pt-2 md:pb-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-clay">
            My Commitment
          </p>
          <p className="mt-3 font-display text-2xl italic leading-snug text-ink/80 md:text-3xl">
            I'm committed to my first year in Manila from September 2026 to
            September 2027, but I'm following God for as long as He calls me
            there.
          </p>
        </div>
      </section>

      {/* Role cards — editorial grid */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-2xl">
            <Eyebrow>Four Areas of Service</Eyebrow>
            <h2 className="font-display text-balance text-4xl font-medium leading-tight md:text-5xl">
              Every piece has a{" "}
              <span className="italic text-clay/90">purpose.</span>
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden bg-ink/10 md:grid-cols-2">
            {roles.map((role) => (
              <RoleCard key={role.number} {...role} />
            ))}
          </div>
        </div>
      </section>

      {/* Why this matters — closing editorial block */}
      <section className="border-t border-ink/10 bg-paper/60 px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.3fr] md:gap-20">
          <div>
            <Eyebrow>Why This Matters</Eyebrow>
            <h2 className="font-display text-balance text-4xl font-medium leading-[1.05] md:text-5xl">
              Small roles,{" "}
              <span className="italic">faithful work.</span>
            </h2>
          </div>
          <div className="space-y-6 leading-relaxed text-ink/75">
            <p>
              Some people are called to preach from a stage. Others are called
              to set up the platform, translate a sentence, or hold a child’s
              hand. I believe faithfulness in the hidden places is just as
              sacred as the visible ones.
            </p>
            <p>
              Whether I’m behind a screen, beside a team, or on the floor with
              kids, every part of this matters because every person I serve is
              made in the image of God. That is why I’m going — and why I’m
              asking you to come with me.
            </p>
            <div className="pt-4">
              <Link
                to="/partnership"
                className="inline-flex rounded-full bg-clay px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-clay/90"
              >
                Partner With Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

function RoleCard({
  number,
  icon: Icon,
  tone,
  title,
  subtitle,
  description,
}: {
  number: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  tone: "clay" | "sage";
  title: string;
  subtitle: string;
  description: string;
}) {
  const toneColor = tone === "clay" ? "text-clay" : "text-sage";
  const toneBg = tone === "clay" ? "bg-clay/15" : "bg-sage/15";
  return (
    <div className="bg-base p-10 md:p-14">
      <div className="mb-8 flex items-center justify-between">
        <span className="font-display text-3xl italic text-ink/30">
          {number}
        </span>
        <span className={`grid size-12 place-items-center rounded-full ${toneBg} ${toneColor}`}>
          <Icon className="size-5" strokeWidth={1.75} />
        </span>
      </div>
      <span
        className={`mb-3 block text-[10px] font-bold uppercase tracking-[0.28em] ${toneColor}`}
      >
        {subtitle}
      </span>
      <h3 className="font-display mb-5 text-3xl font-medium leading-tight md:text-4xl">
        {title}
      </h3>
      <p className="leading-relaxed text-ink/75">{description}</p>
    </div>
  );
}
