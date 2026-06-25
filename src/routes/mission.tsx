import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader, Eyebrow } from "@/components/site-shell";
import { Mail, Users, MessageCircle, Sparkles } from "lucide-react";
import kimChildren from "@/assets/kim-children.jpg";

export const Route = createFileRoute("/mission")({
  head: () => ({
    meta: [
      { title: "What I'll Be Doing — Ivy Dunlap" },
      {
        name: "description",
        content:
          "An overview of Kids International Ministries and the roles Ivy will serve in: KidsConnect, hosting teams, Tagalog learning, and youth ministry.",
      },
      { property: "og:title", content: "What I'll Be Doing — Ivy Dunlap" },
      {
        property: "og:description",
        content:
          "KidsConnect, hosting teams, Tagalog and gospel sharing, youth and kids ministry.",
      },
    ],
  }),
  component: MissionPage,
});

const roles = [
  {
    num: "01",
    icon: MessageCircle,
    title: "KidsConnect",
    body: "Leading the communication ministry that connects sponsors to the children they support — letters, updates, photos, and stories of God's work.",
  },
  {
    num: "02",
    icon: Users,
    title: "Hosting Visiting Teams",
    body: "Welcoming short-term teams from churches around the world and helping them experience ministry on the ground in Manila.",
  },
  {
    num: "03",
    icon: Sparkles,
    title: "Tagalog & Gospel Sharing",
    body: "Learning Tagalog so I can share the Gospel and build real relationships with families in the local communities we serve.",
  },
  {
    num: "04",
    icon: Mail,
    title: "Youth & Kids Ministry",
    body: "Walking weekly with children and teens — Bible studies, mentoring, after-school care, and showing up consistently in their lives.",
  },
];

function MissionPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="The Work"
        title="What I'll be doing in Manila."
        intro="A short overview of Kids International Ministries and the day-to-day roles I'll be stepping into."
      />

      {/* KIM overview — asymmetric split with offset photo frame */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
          <div className="relative md:col-span-7">
            <div className="absolute -inset-3 -z-10 bg-clay/15 md:-inset-4" />
            <img
              src={kimChildren}
              alt="Children served through Kids International Ministries"
              loading="lazy"
              width={1280}
              height={896}
              className="aspect-[4/3] w-full object-cover shadow-lg"
            />
          </div>
          <div className="md:col-span-5">
            <Eyebrow>Kids International Ministries</Eyebrow>
            <h2 className="font-display mb-6 text-3xl font-medium leading-[1.1] md:text-4xl">
              Thirty years of Gospel-rooted care{" "}
              <span className="italic text-clay/90">in the Philippines.</span>
            </h2>
            <div className="my-6 h-px w-12 bg-clay/40" />
            <p className="leading-relaxed text-ink/75">
              KIM exists to share the love of Christ in word and deed —
              running children's homes, schools, medical clinics, and
              community feeding programs across the Philippines. They are the
              local hands that I get to come alongside.
            </p>
          </div>
        </div>
      </section>

      {/* Roles — numbered editorial cards */}
      <section className="border-t border-ink/10 bg-paper/60 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 max-w-2xl">
            <Eyebrow>My Roles</Eyebrow>
            <h2 className="font-display text-balance text-4xl font-medium leading-tight md:text-5xl">
              Four ways I'll{" "}
              <span className="italic">spend my days.</span>
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden bg-ink/10 sm:grid-cols-2">
            {roles.map((r) => (
              <div
                key={r.title}
                className="group flex flex-col bg-base p-8 transition-colors hover:bg-paper md:p-10"
              >
                <div className="mb-8 flex items-start justify-between">
                  <span className="font-display text-3xl italic text-clay/80">
                    {r.num}
                  </span>
                  <r.icon className="size-5 text-ink/40" strokeWidth={1.5} />
                </div>
                <h3 className="font-display mb-3 text-2xl font-medium leading-snug md:text-3xl">
                  {r.title}
                </h3>
                <p className="leading-relaxed text-ink/70">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
