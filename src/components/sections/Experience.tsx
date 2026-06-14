import { experience } from "@/content";
import { eyebrowMuted } from "@/constants/typography";
import { Section } from "@/components/Layout/Section";

export function Experience() {
  return (
    <Section id="experience" label="Experience" fullHeight={false} tone="cool">
      <div className="space-y-16 md:space-y-24">
        {experience.map((job) => (
          <article key={job.company} className="flex flex-col">
            <a
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-block mb-6 block cursor-pointer text-3xl transition-opacity hover:opacity-60 sm:text-5xl md:text-6xl"
            >
              {job.company}
            </a>
            <p
              className={`${eyebrowMuted} mb-6 font-medium tracking-[0.3em]`}
            >
              {job.roles.map((r) => `${r.title} · ${r.date}`).join("  /  ")}
            </p>
            <div className="mx-auto max-w-xl space-y-4">
              {job.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="text-blurb">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
