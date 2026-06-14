import { profile } from "@/content";
import { Section } from "@/components/Layout/Section";

export function About() {
  return (
    <Section id="about" label="About">
      <h2 className="text-display mb-12 text-5xl text-primary md:text-7xl">
        Who Am I?
      </h2>
      <div className="space-y-6 text-lg leading-relaxed text-muted">
        {profile.bio.map((paragraph, i) =>
          typeof paragraph === "string" ? (
            <p key={i}>{paragraph}</p>
          ) : (
            <p key={i}>
              <strong className="text-primary">{paragraph.emphasis}</strong>
              {paragraph.text}
            </p>
          )
        )}
      </div>
    </Section>
  );
}
