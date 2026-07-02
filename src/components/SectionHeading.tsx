import { Reveal } from "./Reveal";

/**
 * Section header: the "01 — Team" label tag over a big display heading, with a
 * brand hairline above it. Consistent rhythm across every section.
 */
export function SectionHeading({
  index,
  label,
  title,
  intro,
}: {
  index: string;
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-14 md:mb-20">
      <div className="hairline mb-8" />
      <Reveal>
        <p className="section-label">
          {index} <span className="text-faint">—</span> {label}
        </p>
      </Reveal>
      <div className="mt-6 grid gap-6 md:grid-cols-12 md:items-end">
        <Reveal className="md:col-span-8">
          <h2 className="text-display font-display font-bold text-fg text-balance">
            {title}
          </h2>
        </Reveal>
        {intro ? (
          <Reveal delay={0.08} className="md:col-span-4">
            <p className="text-base leading-relaxed text-muted">{intro}</p>
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}
