import { profile } from "@/content";
import { eyebrowMuted, eyebrowPrimary } from "@/constants/typography";
import { Section } from "@/components/Layout/Section";

const fullNameParts = profile.name.split(" ");
const shortNameParts = profile.shortName.split(" ");

export function Hero() {
  return (
    <Section id="home" tone="base">
      <div className="flex w-full flex-col items-center gap-6 md:gap-8">
        <p className={`${eyebrowMuted} tracking-[0.5em]`}>
          {profile.location}
        </p>
        <h1 className="text-block flex flex-col items-center text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] xl:text-[8.5rem]">
          <span className="flex flex-col items-center lg:hidden">
            {shortNameParts.map((part) => (
              <span key={part}>{part}</span>
            ))}
          </span>
          <span className="hidden flex-col items-center lg:flex">
            {fullNameParts.map((part) => (
              <span key={part}>{part}</span>
            ))}
          </span>
        </h1>
        <p className="text-block flex flex-col items-center text-3xl text-[var(--color-accent)] sm:text-5xl md:text-6xl lg:text-7xl">
          {profile.tagline.split(" ").map((word) => (
            <span key={word}>{word}</span>
          ))}
        </p>
        <div className="flex flex-wrap items-baseline justify-center gap-x-4 gap-y-2 pt-6">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${eyebrowPrimary} inline-block cursor-pointer border-b border-current pb-0.5 tracking-[0.35em] transition-opacity hover:opacity-60`}
          >
            Resume
          </a>
          <span className="text-muted select-none" aria-hidden>
            ·
          </span>
          <a
            href="#about"
            className={`${eyebrowMuted} inline-block cursor-pointer tracking-[0.35em] transition-colors hover:text-primary`}
          >
            Scroll
          </a>
        </div>
      </div>
    </Section>
  );
}
