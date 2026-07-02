/**
 * SPONSORS / PARTNERS — swap for real partners.
 *
 * `mark` is a placeholder wordmark rendered in the display font (no logo files
 * needed yet). When Brian has real logos, drop SVGs in /public/sponsors/ and
 * set `logo` to the path; SponsorCard prefers `logo` over the text mark.
 */

export type SponsorTier = "Title" | "Technical" | "Supporting";

export interface Sponsor {
  id: string;
  /** Display name / wordmark text. */
  name: string;
  /** Category of support. */
  category: string;
  tier: SponsorTier;
  blurb: string;
  /** Optional logo path in /public. Falls back to the text mark. */
  logo?: string;
  /** Optional external URL (used when real partners are added). */
  url?: string;
}

export const sponsors: Sponsor[] = [
  {
    id: "meridian-cycles",
    name: "Meridian Cycles",
    category: "Bikes",
    tier: "Title",
    blurb: "Race-bred frames and the team's title partner. Every rider is on Meridian.",
  },
  {
    id: "vantage-kit",
    name: "Vantage Apparel",
    category: "Race Kit",
    tier: "Technical",
    blurb: "Aero, custom-fit race kit that holds up to a full crit season.",
  },
  {
    id: "kinetic-wheels",
    name: "Kinetic Wheelworks",
    category: "Wheels",
    tier: "Technical",
    blurb: "Hand-built carbon wheelsets tuned for junior gearing restrictions.",
  },
  {
    id: "current-nutrition",
    name: "Current Nutrition",
    category: "Fueling",
    tier: "Technical",
    blurb: "Clean fueling and hydration science for developing athletes.",
  },
  {
    id: "northline-coaching",
    name: "Northline Coaching",
    category: "Coaching",
    tier: "Technical",
    blurb: "Structured training and race craft, built around school and sleep.",
  },
  {
    id: "gearworks-shop",
    name: "Gearworks Bike Co.",
    category: "Local Shop",
    tier: "Supporting",
    blurb: "Home-base mechanics and race-day support out of Boulder.",
  },
  {
    id: "aster-recovery",
    name: "Aster Recovery",
    category: "Recovery",
    tier: "Supporting",
    blurb: "Physio and recovery so young riders build up, not burn out.",
  },
  {
    id: "summit-optics",
    name: "Summit Optics",
    category: "Eyewear",
    tier: "Supporting",
    blurb: "Photochromic race eyewear for every condition on the calendar.",
  },
  {
    id: "trailhead-media",
    name: "Trailhead Media",
    category: "Media",
    tier: "Supporting",
    blurb: "Race photography and film that tells the team's story.",
  },
];
