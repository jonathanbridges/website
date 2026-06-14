import { profile } from "@/content";
import { Section } from "@/components/Layout/Section";

export function About() {
  return (
    <Section id="about" label="About" tone="muted" align="left">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 text-left md:gap-10">
        {profile.blurb.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="text-newspaper">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
