/**
 * RIDER ROSTER — swap these out for real athletes.
 *
 * `headshot` is a placeholder gradient spec (no image files needed yet). When
 * Brian has real photos, drop them in /public/riders/ and set `photo` to the
 * path (e.g. "/riders/maya-okafor.jpg"); the RiderCard will prefer `photo`
 * over the gradient automatically.
 */

export type RiderCategory = "U15" | "U17" | "U19";

export interface Rider {
  id: string;
  name: string;
  category: RiderCategory;
  age: number;
  /** Home region — flavor, shown as a small caption. */
  hometown: string;
  /** One strong line. Keep it punchy — this is the hook on the card. */
  headline: string;
  /** Optional real photo path in /public. Falls back to the gradient. */
  photo?: string;
  /** Placeholder gradient stops (from → to) used until a photo exists. */
  headshot: { from: string; to: string };
  /** Rider specialty tag. */
  discipline: "Climber" | "Sprinter" | "All-rounder" | "Time Trialist" | "Puncheur";
}

export const riders: Rider[] = [
  {
    id: "conner-enciso",
    name: "Conner Enciso",
    category: "U19",
    age: 18,
    hometown: "Milwaukee, WI",
    headline: "Bio coming soon.",
    photo: "/riders/conner-enciso.jpg",
    headshot: { from: "#1B2A4A", to: "#0A0A0F" },
    discipline: "All-rounder",
  },
  {
    id: "adam-ostrowski",
    name: "Adam Ostrowski",
    category: "U19",
    age: 18,
    hometown: "Milwaukee, WI",
    headline: "Bio coming soon.",
    photo: "/riders/adam-ostrowski.jpg",
    headshot: { from: "#20304F", to: "#0A0A0F" },
    discipline: "All-rounder",
  },
  {
    id: "maya-okafor",
    name: "Maya Okafor",
    category: "U19",
    age: 18,
    hometown: "Boulder, CO",
    headline: "National TT medalist with a diesel engine and no off switch.",
    headshot: { from: "#1B2A4A", to: "#0A0A0F" },
    discipline: "Time Trialist",
  },
  {
    id: "eli-vandenberg",
    name: "Eli Vandenberg",
    category: "U19",
    age: 18,
    hometown: "Asheville, NC",
    headline: "Reads a race two moves ahead. Wins from the front when it splits.",
    headshot: { from: "#20304F", to: "#0A0A0F" },
    discipline: "All-rounder",
  },
  {
    id: "sofia-reyes",
    name: "Sofia Reyes",
    category: "U19",
    age: 17,
    hometown: "San Diego, CA",
    headline: "Pure kick. If it comes down to a bunch sprint, she's the plan.",
    headshot: { from: "#2A1F45", to: "#0A0A0F" },
    discipline: "Sprinter",
  },
  {
    id: "theo-marchetti",
    name: "Theo Marchetti",
    category: "U17",
    age: 16,
    hometown: "Portland, OR",
    headline: "Lightweight climber who gets stronger as the road tilts up.",
    headshot: { from: "#14303A", to: "#0A0A0F" },
    discipline: "Climber",
  },
  {
    id: "harper-nilsson",
    name: "Harper Nilsson",
    category: "U17",
    age: 16,
    hometown: "Minneapolis, MN",
    headline: "Relentless on the front. The engine that softens up the field.",
    headshot: { from: "#2B2540", to: "#0A0A0F" },
    discipline: "All-rounder",
  },
  {
    id: "diego-fuentes",
    name: "Diego Fuentes",
    category: "U17",
    age: 15,
    hometown: "Austin, TX",
    headline: "Explosive over short climbs. First-year U17 already animating races.",
    headshot: { from: "#1D2E3F", to: "#0A0A0F" },
    discipline: "Puncheur",
  },
  {
    id: "grace-albright",
    name: "Grace Albright",
    category: "U15",
    age: 14,
    hometown: "Bend, OR",
    headline: "Fearless bike handling and a sprint that belongs a category up.",
    headshot: { from: "#331F33", to: "#0A0A0F" },
    discipline: "Sprinter",
  },
  {
    id: "noah-kestrel",
    name: "Noah Kestrel",
    category: "U15",
    age: 14,
    hometown: "Salt Lake City, UT",
    headline: "Time-trial specialist in the making. Loves the numbers.",
    headshot: { from: "#12283A", to: "#0A0A0F" },
    discipline: "Time Trialist",
  },
];
