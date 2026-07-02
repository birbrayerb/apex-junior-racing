import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";
import { getTeamStats } from "@/lib/stats";

/** "01 — Team": mission copy on the left, a dashboard stat column on the right. */
export function TeamStory() {
  const s = site.sections[0];
  const stats = getTeamStats();

  return (
    <Section id={s.id}>
      <SectionHeading
        index={s.index}
        label={s.label}
        title="A development team, run like a pro one."
        intro="Founded to give American juniors a real path — with the structure, standards, and taste of the teams they want to ride for one day."
      />

      <div className="grid gap-16 md:grid-cols-12">
        <div className="space-y-6 md:col-span-7">
          <Reveal>
            <p className="text-lg leading-relaxed text-fg/90">
              {site.teamName} exists for one reason: to develop young road racers
              the right way. We race a full domestic calendar — stage races,
              criteriums, and the national championships — against the best
              juniors in the country, and we show up prepared.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="text-lg leading-relaxed text-muted">
              Results matter, but so does how you get them. Our riders learn race
              craft, recovery, and how to carry themselves on and off the bike.
              Training is structured around school and sleep, not the other way
              around.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-muted">
              We keep the roster small and the standards high. Every rider gets
              coaching, a proper bike, and a plan — because the point isn&apos;t
              just this season. It&apos;s the next ten.
            </p>
          </Reveal>
        </div>

        <div className="md:col-span-5">
          <Reveal delay={0.1}>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <StatBlock value={site.foundedYear.toString()} label="Founded" />
              <StatBlock value={`${stats.avgAge}`} label="Avg. rider age" />
              <StatBlock value={`${stats.wins}`} label="Wins this season" accent />
              <StatBlock value={`${stats.podiums}`} label="Podiums" />
            </dl>
            <p className="mt-6 text-sm leading-relaxed text-faint">
              {stats.completed} races completed · {stats.upcoming} still to come on
              the {new Date().getFullYear()} calendar.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function StatBlock({
  value,
  label,
  accent,
}: {
  value: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <div className="bg-bg/40 px-6 py-8">
      <div
        className={`text-stat font-display font-bold ${
          accent ? "text-accent" : "text-fg"
        }`}
      >
        {value}
      </div>
      <div className="mt-2 font-display text-[11px] font-medium uppercase tracking-label text-muted">
        {label}
      </div>
    </div>
  );
}
