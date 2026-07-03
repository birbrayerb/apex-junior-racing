"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "@/lib/site";

/**
 * Fixed header: wordmark (home link) on the left, a single hamburger button on
 * the right. All navigation collapses into a full-screen overlay menu — the
 * classy-minimal pattern. The button morphs to an X when open; the panel fades
 * + scales in (Framer Motion), highlights the active route, and sets the
 * "Sponsor us" primary action apart below a divider.
 *
 * Transparent over the home hero, solid on scroll and on interior pages.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ESC to close + lock body scroll while the overlay is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const solid = scrolled || pathname !== "/";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          open
            ? "border-b border-transparent"
            : solid
              ? "border-b border-white/10 bg-bg/70 backdrop-blur-md"
              : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-shell items-center justify-between px-6 py-4 md:px-10">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="group flex items-baseline gap-2"
          >
            <span className="font-display text-lg font-bold tracking-tight text-fg">
              {site.wordmark.primary}
            </span>
            <span className="hidden font-display text-[11px] font-medium uppercase tracking-label text-muted sm:inline">
              {site.wordmark.secondary}
            </span>
          </Link>

          <MenuButton open={open} onClick={() => setOpen((o) => !o)} />
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <MenuOverlay pathname={pathname} onClose={() => setOpen(false)} />
        ) : null}
      </AnimatePresence>
    </>
  );
}

/** Hamburger that morphs into an X. */
function MenuButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  const line = "absolute left-0 h-[2px] w-full rounded-full bg-fg";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      className="relative z-50 -mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/5"
    >
      <span className="relative block h-4 w-6">
        <motion.span
          className={line}
          style={{ top: 1, transformOrigin: "center" }}
          animate={open ? { y: 6, rotate: 45 } : { y: 0, rotate: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.span
          className={line}
          style={{ top: 7 }}
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className={line}
          style={{ top: 13, transformOrigin: "center" }}
          animate={open ? { y: -6, rotate: -45 } : { y: 0, rotate: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </span>
    </button>
  );
}

/** Full-screen overlay menu. */
function MenuOverlay({
  pathname,
  onClose,
}: {
  pathname: string;
  onClose: () => void;
}) {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06, delayChildren: 0.08 } },
    exit: {},
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
    exit: { opacity: 0, y: 8, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl"
    >
      <motion.nav
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        className="mx-auto flex h-full max-w-shell flex-col justify-center px-6 md:px-10"
      >
        <motion.p variants={item} className="section-label mb-8">
          Menu
        </motion.p>

        <ul className="flex flex-col gap-1">
          {site.sections.map((s) => {
            const href = `/${s.id}`;
            const active = pathname === href;
            return (
              <motion.li key={s.id} variants={item}>
                <Link
                  href={href}
                  onClick={onClose}
                  aria-current={active ? "page" : undefined}
                  className={`group flex items-baseline gap-4 py-2 font-display text-5xl font-bold tracking-tight transition-colors md:text-7xl ${
                    active ? "text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  <span className="font-display text-sm font-medium tracking-tight text-faint">
                    {s.index}
                  </span>
                  <span className="relative">
                    {s.label}
                    {active ? (
                      <span className="absolute -bottom-1 left-0 h-[3px] w-full bg-accent" />
                    ) : null}
                  </span>
                </Link>
              </motion.li>
            );
          })}
        </ul>

        {/* Primary action, set apart below a divider. */}
        <motion.div variants={item} className="mt-12 border-t border-white/10 pt-8">
          <Link
            href="/contact"
            onClick={onClose}
            className="btn-primary text-sm"
          >
            Sponsor us
          </Link>
          <p className="mt-4 max-w-sm text-sm text-muted">
            Back a fast, well-run junior development team.
          </p>
        </motion.div>
      </motion.nav>
    </motion.div>
  );
}
