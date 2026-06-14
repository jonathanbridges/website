import { useRef, type ReactNode } from "react";
import { useInView } from "@/hooks/useScroll";

interface SectionProps {
  id: string;
  label?: string;
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export function Section({
  id,
  label,
  children,
  className = "",
  fullHeight = true,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref);

  return (
    <section
      id={id}
      ref={ref}
      className={`snap-section relative px-6 py-24 md:px-12 lg:px-20 ${
        fullHeight ? "min-h-screen flex flex-col justify-center" : ""
      } ${className}`}
      aria-labelledby={label ? `${id}-label` : undefined}
    >
      {label && (
        <p
          id={`${id}-label`}
          className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-muted"
        >
          {label}
        </p>
      )}
      <div className={`animate-in-view w-full max-w-5xl ${inView ? "visible" : ""}`}>
        {children}
      </div>
    </section>
  );
}
