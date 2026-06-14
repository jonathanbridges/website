import { type ReactNode } from "react";
import { eyebrowMuted } from "@/constants/typography";

export type SectionTone = "base" | "muted" | "warm" | "cool";

interface SectionProps {
  id: string;
  label?: string;
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
  tone?: SectionTone;
  align?: "center" | "left";
}

const toneClass: Record<SectionTone, string> = {
  base: "section-tone-base",
  muted: "section-tone-muted",
  warm: "section-tone-warm",
  cool: "section-tone-cool",
};

export function Section({
  id,
  label,
  children,
  className = "",
  fullHeight = true,
  tone = "base",
  align = "center",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`snap-start ${toneClass[tone]} relative px-6 py-24 md:px-12 ${
        fullHeight ? "h-dvh" : "min-h-dvh"
      } flex flex-col items-center justify-center ${className}`}
      aria-labelledby={label ? `${id}-label` : undefined}
    >
      {label && (
        <p
          id={`${id}-label`}
          className={`mb-8 text-center ${eyebrowMuted} tracking-[0.45em]`}
        >
          {label}
        </p>
      )}
      <div
        className={`flex w-full max-w-4xl flex-col ${
          align === "left" ? "items-stretch text-left" : "items-center text-center"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
