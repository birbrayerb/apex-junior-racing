import { site } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-bg">
      <div className="mx-auto max-w-shell px-6 py-14 md:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-bold tracking-tight text-fg">
                {site.wordmark.primary}
              </span>
              <span className="font-display text-[11px] font-medium uppercase tracking-label text-muted">
                {site.wordmark.secondary}
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted">{site.tagline}</p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {site.sections.map((sct) => (
              <a
                key={sct.id}
                href={`#${sct.id}`}
                className="font-display text-[11px] font-medium uppercase tracking-label text-muted transition-colors hover:text-fg"
              >
                {sct.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/5 pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.teamName}. {site.location}.
          </p>
          <p>Placeholder site — content is illustrative and will be replaced.</p>
        </div>
      </div>
    </footer>
  );
}
