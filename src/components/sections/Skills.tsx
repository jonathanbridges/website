import { skills } from "@/content";
import { Section } from "@/components/Layout/Section";

export function Skills() {
  return (
    <Section id="skills" label="Skills">
      <h2 className="text-display mb-12 text-5xl text-primary md:text-7xl">
        My Skills
      </h2>
      <ul className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="group flex flex-col items-center gap-2 text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-theme bg-[var(--color-bg-muted)] p-2 transition-transform group-hover:scale-110">
              <img
                src={skill.icon}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            <span className="text-xs text-muted">{skill.name}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
