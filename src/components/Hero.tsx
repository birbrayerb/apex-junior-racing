"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { site } from "@/lib/site";
import { getTeamStats } from "@/lib/stats";

/**
 * Hero: big confident wordmark statement, one-line tagline, two CTAs, and a
 * slim stat strip. Subtle parallax on the headline + background as you scroll —
 * motion is *implied speed*, not literal speed lines.
 *
 * HERO VIDEO SLOT: drop a looping, muted race clip at /public/hero.mp4 and set
 * HAS_HERO_VIDEO to true. Until then we render the cool-undertone gradient.
 */
const HAS_HERO_VIDEO = false;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Gentle differential motion — foreground drifts up, background lags.
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const stats = getTeamStats();

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-hero-glow px-6 pb-20 pt-32 md:px-10"
    >
      {/* Background layer — video slot or gradient, with parallax. */}
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {HAS_HERO_VIDEO ? (
          <video
            className="h-full w-full object-cover opacity-40"
            autoPlay
            muted
            loop
            playsInline
            src="/hero.mp4"
          />
        ) : null}
        {/* Faint vignette + a single implied motion line via a soft radial. */}
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(0,87,255,0.10),transparent_60%)]" />
      </motion.div>

      <div className="mx-auto w-full max-w-shell">
        <motion.div style={{ y: headlineY, opacity: fade }}>
          <p className="section-label mb-6 animate-fade-up">
            {site.discipline} <span className="text-faint">·</span> {site.level}
          </p>
          <h1 className="text-hero font-display font-bold text-fg">
            {site.heroHeadline.map((line, i) => (
              <span key={line} className="block">
                {i === site.heroHeadline.length - 1 ? (
                  <span className="text-accent">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>

          <div className="mt-10 flex max-w-2xl flex-col gap-8">
            <p className="text-lg leading-relaxed text-muted md:text-xl">
              <span className="font-medium text-fg">{site.tagline}</span>{" "}
              {site.heroSub}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#riders" className="btn-primary">
                Meet the roster
              </a>
              <a href="#contact" className="btn-ghost">
                Partner with us
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stat strip — dashboard numbers, restrained. */}
      <motion.div
        style={{ opacity: fade }}
        className="mx-auto mt-16 w-full max-w-shell"
      >
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4">
          <HeroStat value={stats.riders} label="Riders" />
          <HeroStat value={stats.wins} label="Wins" accent />
          <HeroStat value={stats.podiums} label="Podiums" />
          <HeroStat value={stats.racesTotal} label="Races / season" />
        </div>
      </motion.div>
    </section>
  );
}

function HeroStat({
  value,
  label,
  accent,
}: {
  value: number;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className="bg-bg/60 px-6 py-6">
      <div
        className={`font-display text-4xl font-bold tracking-tight md:text-5xl ${
          accent ? "text-accent" : "text-fg"
        }`}
      >
        {value}
      </div>
      <div className="mt-1 font-display text-[11px] font-medium uppercase tracking-label text-muted">
        {label}
      </div>
    </div>
  );
}
