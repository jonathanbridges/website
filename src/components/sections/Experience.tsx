import { experience } from "@/content";
import { Section } from "@/components/Layout/Section";

export function Experience() {
  return (
    <Section id="experience" label="Experience" fullHeight={false}>
      <h2 className="text-display mb-16 text-5xl text-primary md:text-7xl">
        Work Experience
      </h2>
      <div className="space-y-20">
        {experience.map((job) => (
          <article
            key={job.company}
            className="border-t border-theme pt-10 first:border-t-0 first:pt-0"
          >
            <a
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-display mb-4 block text-4xl text-primary transition-colors hover:text-[var(--color-accent)] md:text-6xl"
            >
              {job.company}
            </a>
            <div className="mb-6 flex flex-wrap gap-x-6 gap-y-2">
              {job.roles.map((role) => (
                <p key={role.title} className="text-sm text-muted">
                  <span className="font-medium text-primary">{role.title}</span>
                  <span className="mx-2">·</span>
                  {role.date}
                </p>
              ))}
            </div>
            <div className="max-w-3xl space-y-4 text-muted">
              {job.paragraphs.map((p, i) => (
                <p key={i} className="leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
