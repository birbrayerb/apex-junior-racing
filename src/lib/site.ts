/**
 * SITE-WIDE PLACEHOLDERS — edit this file to rebrand the whole site.
 *
 * Renaming the team, changing the tagline, or updating contact emails here
 * propagates everywhere. Riders live in `roster.ts`, the calendar in
 * `season.ts`, and partners in `sponsors.ts`.
 */

export const site = {
  /** Full team name, used in the wordmark and page titles. */
  teamName: "Apex Junior Racing",
  /** Short form for the wordmark lockup (kept as two tokens for styling). */
  wordmark: { primary: "APEX", secondary: "JUNIOR RACING" },
  /** One-line brand promise, shown under the hero headline. */
  tagline: "Junior road racing, ridden right.",
  /** The big hero statement. Kept short — it renders at 100–140px. */
  heroHeadline: ["FASTER", "BY DESIGN"],
  /** Sub-hero support copy. */
  heroSub:
    "A U19 development team on the American road racing calendar. Built for young riders who take the sport seriously.",

  discipline: "Road Cycling",
  level: "U19 Development",
  location: "United States",
  foundedYear: 2021,

  /** Contact routes — surfaced in the Contact section as the two paths. */
  contact: {
    recruit: {
      label: "Ride for us",
      email: "riders@apexjuniorracing.example",
      blurb:
        "U15–U19 riders with a racing license and a serious work ethic. We develop talent, not egos.",
    },
    sponsor: {
      label: "Sponsor us",
      email: "partners@apexjuniorracing.example",
      blurb:
        "Reach an engaged racing audience and invest in the next generation of American cycling.",
    },
    general: "hello@apexjuniorracing.example",
    instagram: "@apexjuniorracing",
  },

  /** Section labels drive the "01 — Team" style tags and nav. */
  sections: [
    { id: "team", index: "01", label: "Team" },
    { id: "riders", index: "02", label: "Riders" },
    { id: "season", index: "03", label: "Season" },
    { id: "partners", index: "04", label: "Partners" },
    { id: "contact", index: "05", label: "Contact" },
  ],
} as const;

export type SiteSection = (typeof site.sections)[number];
