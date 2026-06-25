import type { ReactNode } from "react";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-base text-ink selection:bg-clay/20">
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

/** Editorial page header — eyebrow with rule, large display title. */
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
    <section className="border-b border-ink/10 bg-base px-6 pt-24 pb-16 md:pt-32 md:pb-20">
      <div className="mx-auto max-w-4xl">
        {eyebrow && (
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-clay/70" />
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-clay">
              {eyebrow}
            </span>
          </div>
        )}
        <h1 className="font-display text-balance text-4xl font-medium leading-[1.05] md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {intro && (
          <p className="text-pretty mt-8 max-w-[58ch] text-lg leading-relaxed text-ink/70">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}

/** Small reusable eyebrow with rule. */
export function Eyebrow({
  children,
  tone = "clay",
}: {
  children: ReactNode;
  tone?: "clay" | "white";
}) {
  const color = tone === "white" ? "text-white/85" : "text-clay";
  const rule = tone === "white" ? "bg-white/60" : "bg-clay/70";
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className={`h-px w-10 ${rule}`} />
      <span className={`text-[10px] font-bold uppercase tracking-[0.28em] ${color}`}>
        {children}
      </span>
    </div>
  );
}
