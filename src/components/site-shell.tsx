import type { ReactNode } from "react";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-base text-ink selection:bg-sage/15">
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="px-6 pt-16 pb-12 md:pt-24 md:pb-16">
      <div className="mx-auto max-w-3xl text-center">
        {eyebrow && (
          <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.2em] text-clay">
            {eyebrow}
          </span>
        )}
        <h1 className="font-display text-balance text-4xl font-medium leading-tight md:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="text-pretty mx-auto mt-8 max-w-[56ch] text-lg leading-relaxed text-ink/70">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
