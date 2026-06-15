import { skills } from "@/content";
import { eyebrowMuted } from "@/constants/typography";
import { Section } from "@/components/Layout/Section";

/** Skills section listing the primary tech stack. */
export function Skills() {
  return (
    <Section id="skills" label="Skills" tone="warm">
      <p className="text-block mb-10 text-2xl sm:text-4xl md:text-5xl">
        Stack
      </p>
      <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-x-4 gap-y-2">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className={`${eyebrowMuted} font-medium tracking-[0.25em]`}
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </Section>
  );
}
