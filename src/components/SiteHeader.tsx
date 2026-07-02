"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

/**
 * Fixed header. Transparent over the hero, then a subtle frosted bar once the
 * user scrolls. Section anchors + a single restrained accent CTA.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-bg/70 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-shell items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="group flex items-baseline gap-2">
          <span className="font-display text-lg font-bold tracking-tight text-fg">
            {site.wordmark.primary}
          </span>
          <span className="hidden font-display text-[11px] font-medium uppercase tracking-label text-muted sm:inline">
            {site.wordmark.secondary}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {site.sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="font-display text-xs font-medium uppercase tracking-label text-muted transition-colors hover:text-fg"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn-primary !px-5 !py-2 text-xs">
          Sponsor us
        </a>
      </div>
    </header>
  );
}
