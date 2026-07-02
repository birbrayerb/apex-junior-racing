/**
 * Design tokens — single source of truth for the visual language.
 *
 * These mirror the values wired into `tailwind.config.ts`. Keeping them here as
 * plain constants means they can also be used in inline styles, gradients, and
 * anywhere Tailwind classes are awkward (e.g. SVG fills, motion values).
 *
 * Aesthetic target: F1 team site meets Apple product page. Restraint, not neon.
 */

export const colors = {
  /** Deep near-black with a cool undertone. Page background. */
  bg: "#0A0A0F",
  /** Slightly lifted surface for cards / panels. */
  surface: "#101018",
  /** Near-white. Primary text. */
  fg: "#F2F4F7",
  /** Muted gray — secondary text, captions. */
  muted: "#8A8F98",
  /** Faint gray — hairlines, disabled, deep captions. */
  faint: "#4B4F58",
  /** Electric blue. Links, buttons, key stat highlights ONLY. Use sparingly. */
  accent: "#0057FF",
  /** Lighter accent for hover / focus states. */
  accentHover: "#2E74FF",
} as const;

/**
 * Cool-undertone gradient used behind the hero and a couple of section seams.
 * Deliberately low-contrast — implied speed, not a light show.
 */
export const gradients = {
  hero: "radial-gradient(120% 120% at 50% 0%, #12131C 0%, #0A0A0F 55%, #08080C 100%)",
  seam: "linear-gradient(180deg, #0A0A0F 0%, #0C0D14 100%)",
} as const;

export const fonts = {
  display: "var(--font-display)", // Space Grotesk
  body: "var(--font-body)", // Inter
} as const;

export type ColorToken = keyof typeof colors;
