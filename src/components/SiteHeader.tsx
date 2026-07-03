"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

/**
 * Fixed header. Transparent over the home hero, then a subtle frosted bar once
 * the user scrolls (and always frosted on interior pages, which have no hero
 * behind them). Real page links with the current route highlighted.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Interior pages get the solid bar from the top; only the home hero starts
  // transparent.
  const solid = scrolled || pathname !== "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "border-b border-white/10 bg-bg/70 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-shell items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-display text-lg font-bold tracking-tight text-fg">
            {site.wordmark.primary}
          </span>
          <span className="hidden font-display text-[11px] font-medium uppercase tracking-label text-muted sm:inline">
            {site.wordmark.secondary}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {site.sections.map((s) => {
            const href = `/${s.id}`;
            const active = pathname === href;
            return (
              <Link
                key={s.id}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`relative font-display text-xs font-medium uppercase tracking-label transition-colors ${
                  active ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {s.label}
                {active ? (
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-accent" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="btn-primary !px-5 !py-2 text-xs">
          Sponsor us
        </Link>
      </div>
    </header>
  );
}
