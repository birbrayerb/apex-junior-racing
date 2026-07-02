import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

/**
 * "05 — Contact": two clear paths — recruitment and partnership. Each is a
 * mailto for v1 (no backend). Swap to a real form action later if needed.
 */
export function Contact() {
  const s = site.sections[4];
  const { recruit, sponsor } = site.contact;

  return (
    <Section id={s.id}>
      <SectionHeading
        index={s.index}
        label={s.label}
        title="Get involved."
        intro="Two ways in — as a rider or as a partner. Both start with an email."
      />

      <div className="grid gap-5 md:grid-cols-2">
        <ContactCard
          eyebrow="For athletes"
          title={recruit.label}
          blurb={recruit.blurb}
          email={recruit.email}
          cta="Email the team"
          accent
        />
        <ContactCard
          eyebrow="For brands"
          title={sponsor.label}
          blurb={sponsor.blurb}
          email={sponsor.email}
          cta="Start a conversation"
        />
      </div>

      <Reveal>
        <p className="mt-12 text-sm text-faint">
          General enquiries:{" "}
          <a href={`mailto:${site.contact.general}`} className="link-accent">
            {site.contact.general}
          </a>{" "}
          <span className="text-white/10">·</span> {site.contact.instagram}
        </p>
      </Reveal>
    </Section>
  );
}

function ContactCard({
  eyebrow,
  title,
  blurb,
  email,
  cta,
  accent,
}: {
  eyebrow: string;
  title: string;
  blurb: string;
  email: string;
  cta: string;
  accent?: boolean;
}) {
  return (
    <Reveal className="h-full">
      <div
        className={`flex h-full flex-col rounded-2xl border p-8 md:p-10 ${
          accent
            ? "border-accent/30 bg-accent/[0.06]"
            : "border-white/10 bg-surface"
        }`}
      >
        <p className="section-label">{eyebrow}</p>
        <h3 className="mt-4 font-display text-3xl font-bold text-fg md:text-4xl">
          {title}
        </h3>
        <p className="mt-4 max-w-md leading-relaxed text-muted">{blurb}</p>
        <a
          href={`mailto:${email}`}
          className={`mt-8 self-start ${accent ? "btn-primary" : "btn-ghost"}`}
        >
          {cta}
        </a>
      </div>
    </Reveal>
  );
}
