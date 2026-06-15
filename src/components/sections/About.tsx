import { profile, type AboutSegment } from "@/content/profile";
import { Section } from "@/components/Layout/Section";

/** Renders one about paragraph with optional emphasized spans. */
function AboutParagraph({ segments }: { segments: AboutSegment[] }) {
  return (
    <p className="text-newspaper">
      {segments.map((segment, index) =>
        segment.emphasis ? (
          <strong key={index}>{segment.text}</strong>
        ) : (
          <span key={index}>{segment.text}</span>
        )
      )}
    </p>
  );
}

/** About section with newspaper-style bio copy. */
export function About() {
  return (
    <Section
      id="about"
      label="About"
      tone="muted"
      align="left"
      fullHeight={false}
    >
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 text-left md:gap-10">
        {profile.aboutBlurb.map((paragraph, index) => (
          <AboutParagraph key={index} segments={paragraph} />
        ))}
      </div>
    </Section>
  );
}
