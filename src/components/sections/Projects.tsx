import { projects } from "@/content";
import { Section } from "@/components/Layout/Section";

export function Projects() {
  return (
    <Section id="projects" label="Projects" fullHeight={false}>
      <h2 className="text-display mb-16 text-5xl text-primary md:text-7xl">
        Past Projects
      </h2>
      <div className="space-y-12">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group relative overflow-hidden border border-theme"
          >
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20 transition-opacity group-hover:opacity-30"
              style={{ backgroundImage: `url(${project.image})` }}
              aria-hidden
            />
            <div className="relative bg-[var(--color-bg)]/80 p-8 md:p-12">
              <h3 className="text-display mb-3 text-3xl text-primary md:text-5xl">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-accent)]"
                >
                  {project.name}
                </a>
              </h3>
              <p className="mb-2 text-lg text-muted">{project.description}</p>
              <p className="mb-6 text-sm text-muted">{project.stack}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-theme px-4 py-2 text-sm uppercase tracking-wider text-primary transition-colors hover:bg-[var(--color-bg-muted)]"
                >
                  <img src="/graphics/eye.svg" alt="" className="h-4 w-4" />
                  Live
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-theme px-4 py-2 text-sm uppercase tracking-wider text-primary transition-colors hover:bg-[var(--color-bg-muted)]"
                >
                  <img
                    src="/graphics/github-original.svg"
                    alt=""
                    className="h-4 w-4"
                  />
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
