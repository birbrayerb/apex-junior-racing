/**
 * RACE CALENDAR + RESULTS — swap for the real season.
 *
 * Dates are ISO strings. `status` is derived from the date at render time
 * (see `raceStatus`), so you never have to hand-flag a race as done —
 * just keep the dates accurate. Add results to `results[]` as they come in.
 */

export type RaceType =
  | "Stage Race"
  | "Criterium"
  | "Road Race"
  | "Time Trial"
  | "Crit Series";

export interface RaceResult {
  /** Should match a rider id in roster.ts (kept loose so it never crashes). */
  riderId: string;
  riderName: string;
  /** Placing as a display string, e.g. "1st", "3rd", "GC 4th", "DNF". */
  place: string;
  /** Short context, e.g. "Stage 2 · Field sprint". */
  note?: string;
  /** Highlight podiums in accent color. */
  podium?: boolean;
}

export interface Race {
  id: string;
  name: string;
  type: RaceType;
  venue: string;
  location: string;
  /** ISO date (start). */
  date: string;
  /** ISO date (end) for multi-day events. Omit for single-day. */
  endDate?: string;
  /** Priority tier — drives subtle emphasis in the timeline. */
  tier: "Priority" | "Target" | "Development";
  results?: RaceResult[];
}

/** All dates are in the current (placeholder) season. */
export const seasonYear = 2026;

export const races: Race[] = [
  {
    id: "redlands-jr",
    name: "Redlands Bicycle Classic — Junior",
    type: "Stage Race",
    venue: "Redlands",
    location: "Redlands, CA",
    date: "2026-04-02",
    endDate: "2026-04-05",
    tier: "Priority",
    results: [
      { riderId: "maya-okafor", riderName: "Maya Okafor", place: "GC 3rd", note: "Podium on GC · won the closing TT", podium: true },
      { riderId: "eli-vandenberg", riderName: "Eli Vandenberg", place: "Stage 2 · 2nd", note: "Breakaway to the line", podium: true },
      { riderId: "sofia-reyes", riderName: "Sofia Reyes", place: "Stage 4 · 5th", note: "Field sprint" },
    ],
  },
  {
    id: "tour-of-the-gila-jr",
    name: "Tour of the Gila — Junior",
    type: "Stage Race",
    venue: "Silver City",
    location: "Silver City, NM",
    date: "2026-04-29",
    endDate: "2026-05-03",
    tier: "Priority",
    results: [
      { riderId: "theo-marchetti", riderName: "Theo Marchetti", place: "Stage 3 · 1st", note: "Solo over the Gila Monster climb", podium: true },
      { riderId: "maya-okafor", riderName: "Maya Okafor", place: "GC 4th", note: "Held the leader's group all week" },
      { riderId: "harper-nilsson", riderName: "Harper Nilsson", place: "Most Aggressive · Stage 2" },
    ],
  },
  {
    id: "athens-speedweek",
    name: "Athens Speed Week — Junior Crit",
    type: "Criterium",
    venue: "Athens Twilight",
    location: "Athens, GA",
    date: "2026-05-09",
    tier: "Development",
    results: [
      { riderId: "sofia-reyes", riderName: "Sofia Reyes", place: "1st", note: "Bunch sprint from a reduced field", podium: true },
      { riderId: "grace-albright", riderName: "Grace Albright", place: "6th", note: "First elite-adjacent crit" },
    ],
  },
  {
    id: "somerville-jr",
    name: "Junior Tour of Somerville",
    type: "Criterium",
    venue: "Main Street",
    location: "Somerville, NJ",
    date: "2026-05-25",
    tier: "Target",
    results: [
      { riderId: "sofia-reyes", riderName: "Sofia Reyes", place: "2nd", note: "Photo finish on the line", podium: true },
      { riderId: "diego-fuentes", riderName: "Diego Fuentes", place: "9th", note: "Animated the final laps" },
    ],
  },
  {
    id: "cascade-jr-classic",
    name: "Cascade Junior Classic",
    type: "Road Race",
    venue: "Cascade Lakes",
    location: "Bend, OR",
    date: "2026-06-06",
    endDate: "2026-06-07",
    tier: "Development",
    results: [
      { riderId: "grace-albright", riderName: "Grace Albright", place: "1st", note: "U15 road race", podium: true },
      { riderId: "noah-kestrel", riderName: "Noah Kestrel", place: "TT · 2nd", note: "U15 time trial", podium: true },
      { riderId: "diego-fuentes", riderName: "Diego Fuentes", place: "4th", note: "U17 road race" },
    ],
  },
  {
    id: "usa-cycling-pro-road-nats-u19",
    name: "USA Cycling Pro Road Nationals — U19",
    type: "Stage Race",
    venue: "National Championships",
    location: "Charleston, WV",
    date: "2026-06-25",
    endDate: "2026-06-28",
    tier: "Priority",
    results: [
      { riderId: "maya-okafor", riderName: "Maya Okafor", place: "TT · 2nd", note: "U19 national silver medal", podium: true },
      { riderId: "eli-vandenberg", riderName: "Eli Vandenberg", place: "RR · 7th", note: "In the winning move" },
      { riderId: "theo-marchetti", riderName: "Theo Marchetti", place: "RR · 11th", note: "Top U17 finisher" },
    ],
  },
  {
    id: "intelligentsia-cup",
    name: "Intelligentsia Cup — Junior Series",
    type: "Crit Series",
    venue: "Chicago Grand Prix Series",
    location: "Chicago, IL",
    date: "2026-07-17",
    endDate: "2026-07-26",
    tier: "Target",
  },
  {
    id: "tour-of-americas-dairyland",
    name: "Tour of America's Dairyland — Junior",
    type: "Crit Series",
    venue: "ToAD",
    location: "Milwaukee, WI",
    date: "2026-08-06",
    endDate: "2026-08-15",
    tier: "Development",
  },
  {
    id: "chris-thater-memorial",
    name: "Chris Thater Memorial — Junior Crit",
    type: "Criterium",
    venue: "Downtown Circuit",
    location: "Binghamton, NY",
    date: "2026-08-29",
    tier: "Development",
  },
  {
    id: "green-mountain-stage-race-jr",
    name: "Green Mountain Stage Race — Junior",
    type: "Stage Race",
    venue: "Mad River Valley",
    location: "Warren, VT",
    date: "2026-09-04",
    endDate: "2026-09-07",
    tier: "Priority",
  },
];

/** Derive completed / upcoming from a reference date (defaults to today). */
export function raceStatus(race: Race, now: Date = new Date()): "completed" | "upcoming" {
  const end = new Date(race.endDate ?? race.date);
  // Treat the race as completed the day after it ends.
  end.setHours(23, 59, 59, 999);
  return end.getTime() < now.getTime() ? "completed" : "upcoming";
}
