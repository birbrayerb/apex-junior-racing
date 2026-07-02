"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealState = "idle" | "hidden" | "shown";

/**
 * Tasteful reveal-on-scroll — a short upward fade, no bounce, no neon.
 *
 * Robust by construction:
 * - SSR / no-JS / crawlers render the "idle" state, which is fully visible, so
 *   the site is always readable without JS.
 * - After mount, only content still BELOW the fold is hidden and then revealed
 *   as it scrolls into view. Content already on screen stays visible (no flash;
 *   the hero doesn't use Reveal, so nothing above the fold animates).
 * - Reveal is driven by an IntersectionObserver AND a passive scroll fallback,
 *   so a single silent primitive can never leave content stuck hidden.
 * - `prefers-reduced-motion` is honored in globals.css.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section";
}) {
  const Tag = as as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<RevealState>("idle");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const inView = () => {
      const r = node.getBoundingClientRect();
      return r.top < window.innerHeight * 0.9 && r.bottom > 0;
    };

    // Already on screen at load — leave it visible, no animation.
    if (inView()) return;

    setState("hidden");

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setState("shown");
      cleanup();
    };
    const onScroll = () => {
      if (inView()) reveal();
    };

    const io =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              if (entries[0]?.isIntersecting) reveal();
            },
            { rootMargin: "-80px 0px" },
          )
        : null;
    io?.observe(node);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    function cleanup() {
      io?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    }
    return cleanup;
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={state}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
