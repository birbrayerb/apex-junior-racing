/**
 * Derived team stats for the dashboard-style number blocks. Computed from the
 * roster + season data so they stay honest when Brian edits the placeholders.
 */
import { riders } from "./roster";
import { races, raceStatus } from "./season";

function countPlaces(predicate: (place: string) => boolean): number {
  let n = 0;
  for (const race of races) {
    for (const r of race.results ?? []) {
      if (predicate(r.place)) n += 1;
    }
  }
  return n;
}

export function getTeamStats() {
  const wins = countPlaces((p) => /(^|\s|·\s)1st\b/.test(p));
  const podiums = races.reduce(
    (sum, race) => sum + (race.results?.filter((r) => r.podium).length ?? 0),
    0,
  );
  const completed = races.filter((r) => raceStatus(r) === "completed").length;
  const upcoming = races.filter((r) => raceStatus(r) === "upcoming").length;
  const avgAge = Math.round(
    riders.reduce((s, r) => s + r.age, 0) / Math.max(riders.length, 1),
  );

  return {
    riders: riders.length,
    wins,
    podiums,
    racesTotal: races.length,
    completed,
    upcoming,
    avgAge,
  };
}
