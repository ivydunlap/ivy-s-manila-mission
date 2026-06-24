import { createFileRoute } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site-shell";
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
    icon: MessageCircle,
    title: "KidsConnect",
    body: "Leading the communication ministry that connects sponsors to the children they support — letters, updates, photos, and stories of God's work.",
  },
  {
    icon: Users,
    title: "Hosting Visiting Teams",
    body: "Welcoming short-term teams from churches around the world and helping them experience ministry on the ground in Manila.",
  },
  {
    icon: Sparkles,
    title: "Tagalog & Gospel Sharing",
    body: "Learning Tagalog so I can share the Gospel and build real relationships with families in the local communities we serve.",
  },
  {
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

      {/* KIM overview */}
      <section className="px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src={kimChildren}
              alt="Children served through Kids International Ministries"
              loading="lazy"
              width={1280}
              height={896}
              className="aspect-video w-full rounded-3xl object-cover shadow-sm ring-1 ring-black/5"
            />
          </div>
          <div className="w-full md:w-1/2">
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.2em] text-sage">
              Kids International Ministries
            </span>
            <h2 className="font-display mb-6 text-3xl font-medium leading-tight md:text-4xl">
              Thirty years of Gospel-rooted care in the Philippines.
            </h2>
            <p className="leading-relaxed text-ink/70">
              KIM exists to share the love of Christ in word and deed —
              running children's homes, schools, medical clinics, and
              community feeding programs across the Philippines. They are the
              local hands that I get to come alongside.
            </p>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <span className="mb-4 block text-[10px] font-bold uppercase tracking-[0.2em] text-clay">
              My Roles
            </span>
            <h2 className="font-display text-balance text-4xl font-medium leading-tight">
              Four ways I'll spend my days.
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {roles.map((r) => (
              <div
                key={r.title}
                className="rounded-3xl bg-paper p-8 ring-1 ring-black/5"
              >
                <div className="mb-6 grid size-11 place-items-center rounded-2xl bg-sage/10 text-sage">
                  <r.icon className="size-5" strokeWidth={1.75} />
                </div>
                <h3 className="font-display mb-2 text-2xl font-medium">
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
