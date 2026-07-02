import type { Config } from "tailwindcss";

/**
 * Tailwind theme is derived from `src/lib/design-tokens.ts`. If Brian tweaks a
 * brand color, change it in ONE place there and mirror it here (kept in sync
 * manually so the Tailwind config stays static/serializable).
 */
const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0F",
        surface: "#101018",
        fg: "#F2F4F7",
        muted: "#8A8F98",
        faint: "#4B4F58",
        accent: {
          DEFAULT: "#0057FF",
          hover: "#2E74FF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.24em",
      },
      fontSize: {
        // Big confident hero type. Fluid via clamp so it never squishes.
        hero: [
          "clamp(3.25rem, 11vw, 8.75rem)",
          { lineHeight: "0.92", letterSpacing: "-0.03em" },
        ],
        display: [
          "clamp(2.25rem, 6vw, 4.5rem)",
          { lineHeight: "0.98", letterSpacing: "-0.02em" },
        ],
        stat: [
          "clamp(2.75rem, 7vw, 5.5rem)",
          { lineHeight: "0.9", letterSpacing: "-0.03em" },
        ],
      },
      maxWidth: {
        shell: "1400px",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(120% 120% at 50% 0%, #12131C 0%, #0A0A0F 55%, #08080C 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
