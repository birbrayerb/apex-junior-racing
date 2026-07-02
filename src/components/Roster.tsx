import Image from "next/image";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";
import { riders, type Rider } from "@/lib/roster";

/** "02 — Riders": asymmetric card grid. Gradient placeholders until real photos. */
export function Roster() {
  const s = site.sections[1];
  return (
    <Section id={s.id}>
      <SectionHeading
        index={s.index}
        label={s.label}
        title="The roster."
        intro="A small squad across U15 to U19 — climbers, sprinters, and all-rounders who race for each other."
      />
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {riders.map((rider, i) => (
          <Reveal as="li" key={rider.id} delay={(i % 3) * 0.06}>
            <RiderCard rider={rider} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

function RiderCard({ rider }: { rider: Rider }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface transition-colors duration-300 hover:border-white/25">
      {/* Portrait: real photo if provided, else the placeholder gradient. */}
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        {rider.photo ? (
          <Image
            src={rider.photo}
            alt={rider.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div
            aria-hidden
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.03]"
            style={{
              background: `linear-gradient(155deg, ${rider.headshot.from}, ${rider.headshot.to})`,
            }}
          />
        )}
        {/* Category chip */}
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-bg/60 px-3 py-1 font-display text-[10px] font-medium uppercase tracking-label text-fg backdrop-blur-sm">
          {rider.category}
        </span>
        {/* Bottom gradient scrim for legibility */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl font-bold text-fg">{rider.name}</h3>
          <span className="shrink-0 font-display text-sm text-faint">
            {rider.age}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-muted">{rider.headline}</p>
        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="font-display text-[11px] font-medium uppercase tracking-label text-accent">
            {rider.discipline}
          </span>
          <span className="font-display text-[11px] uppercase tracking-label text-faint">
            {rider.hometown}
          </span>
        </div>
      </div>
    </article>
  );
}
