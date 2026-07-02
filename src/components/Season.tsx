import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";
import { races, raceStatus, type Race } from "@/lib/season";

function fmtDate(iso: string): string {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function dateRange(race: Race): string {
  const start = fmtDate(race.date);
  if (!race.endDate) return start;
  const end = new Date(race.endDate + "T12:00:00").toLocaleDateString("en-US", {
    day: "numeric",
  });
  return `${start}–${end}`;
}

/**
 * "03 — Season": vertical timeline. Completed rows expand with results;
 * upcoming rows show date + venue with an accent marker.
 */
export function Season() {
  const s = site.sections[2];
  // Chronological order.
  const ordered = [...races].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );

  return (
    <Section id={s.id}>
      <SectionHeading
        index={s.index}
        label={s.label}
        title="Race calendar & results."
        intro="A full domestic road season — from spring stage races to the national championships and late-summer crits."
      />

      <ol className="relative border-l border-white/10">
        {ordered.map((race, i) => {
          const status = raceStatus(race);
          const done = status === "completed";
          return (
            <Reveal as="li" key={race.id} delay={(i % 4) * 0.05}>
              <div className="relative pb-12 pl-8 md:pl-12">
                {/* Timeline node */}
                <span
                  aria-hidden
                  className={`absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full border-2 ${
                    done
                      ? "border-white/30 bg-bg"
                      : "border-accent bg-accent shadow-[0_0_0_4px_rgba(0,87,255,0.15)]"
                  }`}
                />

                <div className="grid gap-4 md:grid-cols-12 md:items-start">
                  {/* Date + status */}
                  <div className="md:col-span-3">
                    <div className="font-display text-lg font-bold text-fg">
                      {dateRange(race)}
                    </div>
                    <div
                      className={`mt-1 font-display text-[10px] font-medium uppercase tracking-label ${
                        done ? "text-faint" : "text-accent"
                      }`}
                    >
                      {done ? "Completed" : "Upcoming"}
                    </div>
                  </div>

                  {/* Race + results */}
                  <div className="md:col-span-9">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-display text-lg font-medium text-fg">
                        {race.name}
                      </h3>
                      <span className="font-display text-[10px] uppercase tracking-label text-faint">
                        {race.type} · {race.tier}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted">{race.location}</p>

                    {done && race.results?.length ? (
                      <ul className="mt-4 space-y-2 border-t border-white/5 pt-4">
                        {race.results.map((r, ri) => (
                          <li
                            key={`${race.id}-${ri}`}
                            className="flex flex-wrap items-baseline gap-x-3 text-sm"
                          >
                            <span
                              className={`min-w-[4.5rem] font-display font-bold ${
                                r.podium ? "text-accent" : "text-fg"
                              }`}
                            >
                              {r.place}
                            </span>
                            <span className="text-fg/90">{r.riderName}</span>
                            {r.note ? (
                              <span className="text-faint">— {r.note}</span>
                            ) : null}
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {!done ? (
                      <p className="mt-3 text-sm text-faint">
                        On the calendar — start list to be confirmed.
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}
