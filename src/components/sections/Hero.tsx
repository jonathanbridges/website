import { profile } from "@/content";
import { Section } from "@/components/Layout/Section";

export function Hero() {
  return (
    <Section id="home" fullHeight>
      <div className="space-y-8">
        <p className="text-xs font-medium uppercase tracking-[0.4em] text-muted">
          {profile.location}
        </p>
        <h1 className="text-display text-6xl leading-[0.95] font-normal text-primary md:text-8xl lg:text-9xl">
          {profile.name}
        </h1>
        <p className="text-display text-3xl text-[var(--color-accent)] md:text-5xl">
          {profile.tagline}
        </p>
        <p className="max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {profile.pullQuote}
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-theme px-6 py-3 text-sm font-medium uppercase tracking-wider text-primary transition-colors hover:bg-[var(--color-bg-muted)]"
          >
            View Resume
          </a>
          <a
            href="#about"
            className="inline-flex items-center px-6 py-3 text-sm font-medium uppercase tracking-wider text-muted transition-colors hover:text-primary"
          >
            Learn More ↓
          </a>
        </div>
      </div>
    </Section>
  );
}
