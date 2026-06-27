import { Link } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/story", label: "My Story" },
  
  { to: "/need", label: "The Need" },
  { to: "/partnership", label: "Partnership" },
  { to: "/newsletter", label: "Newsletter" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 border-b border-border/60 bg-base/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          className="font-display text-xl font-medium italic tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          Ivy Dunlap
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
          {links.slice(1, -1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="transition-colors hover:text-ink"
              activeProps={{ className: "text-ink" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="text-sage transition-colors hover:text-ink"
            activeProps={{ className: "text-ink" }}
          >
            Contact
          </Link>
        </div>

        <Link
          to="/partnership"
          className="hidden rounded-full border border-ink/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-ink hover:text-base md:inline-block"
        >
          Give
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex size-9 flex-col items-center justify-center gap-1.5 rounded-full border border-ink/10 md:hidden"
        >
          <span className="h-px w-4 bg-ink" />
          <span className="h-px w-4 bg-ink" />
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-base md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink/80 hover:bg-paper"
                activeProps={{ className: "bg-paper text-ink" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
