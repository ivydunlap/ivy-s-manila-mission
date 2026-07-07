import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteShell, PageHeader, Eyebrow } from "@/components/site-shell";
import { posts } from "@/lib/newsletter-posts";
import { renderPostEmail } from "@/lib/newsletter-email";

export const Route = createFileRoute("/newsletter_/email")({
  head: () => ({
    meta: [
      { title: "Send a newsletter — Ivy Dunlap" },
      // This is a private tool page; keep it out of search results.
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: EmailToolPage,
});

function EmailToolPage() {
  const sorted = [...posts].sort((a, b) => b.isoDate.localeCompare(a.isoDate));
  const [copied, setCopied] = useState<string | null>(null);

  async function copy(slug: string, html: string) {
    try {
      await navigator.clipboard.writeText(html);
      setCopied(slug);
      setTimeout(() => setCopied((s) => (s === slug ? null : s)), 2500);
    } catch {
      // Clipboard API needs https or localhost; fall back to a prompt.
      window.prompt("Copy this HTML (Cmd/Ctrl+C, then Enter):", html);
    }
  }

  return (
    <SiteShell>
      <PageHeader
        eyebrow="For Ivy"
        title="Send a newsletter"
        intro="Write the post on the site, then copy its email version here and paste it into Mailchimp. This page is just for you — it isn't linked anywhere or shown in search."
      />

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl">
          {/* Steps */}
          <ol className="mb-12 space-y-3 rounded-2xl border border-ink/10 bg-paper/70 p-7 text-sm leading-relaxed text-ink/75">
            <li>
              <strong>1.</strong> Add your new post to the site (newsletter-posts) and let it
              deploy.
            </li>
            <li>
              <strong>2.</strong> Find it below and click <em>Copy email HTML</em>.
            </li>
            <li>
              <strong>3.</strong> In Mailchimp: <em>Campaigns → Create → Email → Regular</em>. For
              the content, choose <em>Code your own → Paste in code</em> and paste (Cmd/Ctrl+V).
            </li>
            <li>
              <strong>4.</strong> Use the suggested subject line, send yourself a test, then{" "}
              <em>Send</em> to your audience.
            </li>
          </ol>

          <div className="space-y-8">
            {sorted.map((p) => {
              const html = renderPostEmail(p);
              return (
                <article key={p.slug} className="rounded-2xl border border-ink/10 p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-clay">
                        {p.date}
                      </div>
                      <h3 className="font-display mt-2 text-2xl font-medium leading-snug">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-sm text-ink/60">
                        <span className="font-semibold text-ink/75">Suggested subject:</span>{" "}
                        {p.title.trim()}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => copy(p.slug, html)}
                      className="shrink-0 rounded-full bg-clay px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-clay/90"
                    >
                      {copied === p.slug ? "Copied ✓" : "Copy email HTML"}
                    </button>
                  </div>

                  <details className="mt-5">
                    <summary className="cursor-pointer text-sm font-semibold text-ink/60 hover:text-clay">
                      Preview email
                    </summary>
                    <iframe
                      title={`Email preview: ${p.title}`}
                      srcDoc={html}
                      className="mt-4 h-[520px] w-full rounded-xl border border-ink/10"
                    />
                  </details>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
