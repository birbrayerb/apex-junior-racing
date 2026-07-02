import Image from "next/image";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";
import { sponsors, type Sponsor } from "@/lib/sponsors";

/**
 * "04 — Partners": partner grid + a "Sponsor us" CTA. Wrapped in a subtly
 * different surface with ONE angular divider at the top (used sparingly).
 */
export function Sponsors() {
  const s = site.sections[3];
  return (
    <div className="clip-diagonal bg-[linear-gradient(180deg,#0C0D14_0%,#0A0A0F_100%)]">
      <Section id={s.id} className="!pt-32">
        <SectionHeading
          index={s.index}
          label={s.label}
          title="Backed by people who get it."
          intro="Our partners make the season possible — from the bikes under our riders to the fuel that gets them to the line."
        />

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-3">
          {sponsors.map((sp, i) => (
            <Reveal key={sp.id} delay={(i % 3) * 0.05}>
              <SponsorCard sponsor={sp} />
            </Reveal>
          ))}
        </div>

        {/* Sponsor CTA */}
        <Reveal>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-2xl border border-accent/30 bg-accent/[0.06] p-8 md:flex-row md:items-center md:p-10">
            <div>
              <h3 className="font-display text-2xl font-bold text-fg md:text-3xl">
                Put your brand on a fast, well-run team.
              </h3>
              <p className="mt-2 max-w-xl text-muted">
                {site.contact.sponsor.blurb}
              </p>
            </div>
            <a
              href={`mailto:${site.contact.sponsor.email}`}
              className="btn-primary shrink-0"
            >
              Become a partner
            </a>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div className="flex h-full flex-col gap-3 bg-bg/40 p-6 md:p-8">
      <div className="flex h-16 items-center">
        {sponsor.logo ? (
          <Image
            src={sponsor.logo}
            alt={sponsor.name}
            width={160}
            height={48}
            className="max-h-12 w-auto opacity-90"
          />
        ) : (
          // Placeholder wordmark in the display font.
          <span className="font-display text-xl font-bold tracking-tight text-fg md:text-2xl">
            {sponsor.name}
          </span>
        )}
      </div>
      <div className="flex items-center gap-2">
        <span className="font-display text-[10px] font-medium uppercase tracking-label text-accent">
          {sponsor.category}
        </span>
        <span className="text-faint">·</span>
        <span className="font-display text-[10px] uppercase tracking-label text-faint">
          {sponsor.tier}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-muted">{sponsor.blurb}</p>
    </div>
  );
}
