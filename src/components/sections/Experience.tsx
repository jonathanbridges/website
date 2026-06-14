import { experience } from "@/content";
import { Section } from "@/components/Layout/Section";

export function Experience() {
  return (
    <Section id="experience" label="Experience" fullHeight={false} tone="cool">
      <div className="space-y-16 md:space-y-24">
        {experience.map((job) => (
          <article key={job.company} className="space-y-3">
            <a
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-block cursor-pointer text-3xl transition-opacity hover:opacity-60 sm:text-5xl md:text-6xl"
            >
              {job.company}
            </a>
            <p className="text-eyebrow tracking-[0.3em]">
              {job.roles.map((r) => `${r.title} · ${r.date}`).join("  /  ")}
            </p>
            <p className="text-blurb mx-auto max-w-xl text-pretty">
              {job.paragraphs[0]}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
