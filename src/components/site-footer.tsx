import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 px-6 pt-20 pb-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-xs">
            <div className="font-display mb-6 text-2xl font-medium italic">
              Ivy Dunlap
            </div>
            <p className="text-sm leading-relaxed text-ink/55">
              A life given for the sake of the Gospel in Manila, Philippines.
              In partnership with Kids International Ministries.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-16">
            <div>
              <div className="mb-6 text-[10px] font-bold uppercase tracking-widest text-ink/40">
                Connect
              </div>
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <Link to="/newsletter" className="hover:text-sage">
                    Newsletter Archive
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-sage">
                    Email Me
                  </Link>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    className="hover:text-sage"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-6 text-[10px] font-bold uppercase tracking-widest text-ink/40">
                Support
              </div>
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <Link to="/partnership" className="hover:text-sage">
                    Give Online
                  </Link>
                </li>
                <li>
                  <Link to="/partnership" className="hover:text-sage">
                    Prayer Team
                  </Link>
                </li>
                <li>
                  <Link to="/need" className="hover:text-sage">
                    The Need
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 md:flex-row">
          <div className="text-[10px] font-medium uppercase tracking-wide text-ink/40">
            © {new Date().getFullYear()} Ivy Dunlap. Soli Deo Gloria.
          </div>
          <div className="text-[10px] font-medium uppercase tracking-wide text-ink/40">
            Sent through Kids International Ministries
          </div>
        </div>
      </div>
    </footer>
  );
}
