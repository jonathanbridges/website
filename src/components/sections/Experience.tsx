import { useCallback, useState, type KeyboardEvent } from "react";
import { experience } from "@/content";
import { Section } from "@/components/Layout/Section";
import { eyebrowMuted } from "@/constants/typography";

function formatRoles(roles: (typeof experience)[number]["roles"]) {
  return roles.map((role) => `${role.title} · ${role.date}`).join("  /  ");
}

function MobileTimelineDots({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div
      className="flex shrink-0 justify-center gap-1.5 md:hidden"
      role="tablist"
      aria-label="Experience timeline"
    >
      {experience.map((job, index) => {
        const isActive = index === activeIndex;

        return (
          <button
            key={job.company}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={`${job.company}, ${job.roles[0]?.date ?? ""}`}
            onClick={() => onSelect(index)}
            className={`h-2 cursor-pointer rounded-full transition-all ${
              isActive
                ? "w-7 bg-[var(--color-accent)]"
                : "w-2 bg-[var(--color-border)] hover:bg-[var(--color-fg-muted)]"
            }`}
          />
        );
      })}
    </div>
  );
}

function DesktopTimeline({
  activeIndex,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <nav aria-label="Experience timeline" className="hidden md:block">
      <ol className="relative">
        {experience.map((job, index) => {
          const isActive = index === activeIndex;
          const date = job.roles[0]?.date ?? "";
          const isLast = index === experience.length - 1;

          return (
            <li key={job.company} className="relative pb-5 pl-6 last:pb-0">
              {!isLast && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute top-2.5 left-[5px] h-full w-px -translate-x-1/2 bg-[var(--color-border)]"
                />
              )}
              <span
                aria-hidden
                className={`absolute top-2.5 left-[5px] z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 ${
                  isActive
                    ? "border-[var(--color-accent)] bg-[var(--color-accent)]"
                    : "border-[var(--color-border)] bg-[var(--section-cool)]"
                }`}
              />
              <button
                type="button"
                onClick={() => onSelect(index)}
                aria-current={isActive ? "step" : undefined}
                className={`relative w-full cursor-pointer py-0 text-left transition-colors ${
                  isActive
                    ? "text-[var(--color-accent)]"
                    : "text-muted hover:text-[var(--color-accent)]"
                }`}
              >
                <span
                  className={`${eyebrowMuted} block tracking-[0.25em] ${
                    isActive ? "text-[var(--color-accent)]" : ""
                  }`}
                >
                  {date}
                </span>
                <span className="mt-0.5 block text-base font-medium text-primary">
                  {job.company}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeJob = experience[activeIndex];

  const goTo = useCallback((index: number) => {
    setActiveIndex(Math.max(0, Math.min(experience.length - 1, index)));
  }, []);

  const goPrev = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      goPrev();
    }
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      goNext();
    }
  };

  return (
    <Section
      id="experience"
      label="Experience"
      tone="cool"
      align="left"
      mobilePinStart
      className="max-md:pt-32 max-md:pb-14 md:py-20"
    >
      <div
        className="flex w-full flex-col gap-3 md:grid md:grid-cols-[11rem_minmax(0,1fr)] md:gap-10 lg:grid-cols-[12rem_minmax(0,1fr)]"
        onKeyDown={handleKeyDown}
      >
        <MobileTimelineDots activeIndex={activeIndex} onSelect={goTo} />
        <DesktopTimeline activeIndex={activeIndex} onSelect={goTo} />

        <article
          key={activeJob.company}
          aria-live="polite"
          className="text-left"
        >
          <a
            href={activeJob.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-block mb-2 block cursor-pointer text-xl transition-opacity hover:opacity-60 sm:text-2xl md:mb-4 md:text-5xl"
          >
            {activeJob.company}
          </a>
          <p
            className={`${eyebrowMuted} text-xs leading-relaxed font-medium tracking-[0.15em] sm:text-sm sm:tracking-[0.25em] md:mb-5 md:tracking-[0.3em]`}
          >
            {formatRoles(activeJob.roles)}
          </p>

          <div className="mt-3 space-y-3 md:mt-4 md:space-y-4">
            {activeJob.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-blurb text-[0.9375rem] leading-relaxed md:text-base md:leading-[1.8]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between gap-4 border-t border-theme pt-3 md:mt-6 md:border-0 md:pt-0">
            <button
              type="button"
              onClick={goPrev}
              disabled={activeIndex === 0}
              className={`${eyebrowMuted} cursor-pointer text-xs tracking-[0.2em] transition-opacity hover:text-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-30 sm:text-sm sm:tracking-[0.25em]`}
            >
              Previous
            </button>
            <p className={`${eyebrowMuted} text-xs tabular-nums tracking-[0.15em] sm:text-sm sm:tracking-[0.2em]`}>
              {activeIndex + 1} / {experience.length}
            </p>
            <button
              type="button"
              onClick={goNext}
              disabled={activeIndex === experience.length - 1}
              className={`${eyebrowMuted} cursor-pointer text-xs tracking-[0.2em] transition-opacity hover:text-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-30 sm:text-sm sm:tracking-[0.25em]`}
            >
              Next
            </button>
          </div>
        </article>
      </div>
    </Section>
  );
}
