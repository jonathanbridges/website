import { useScrollProgress } from "@/hooks/useScroll";

/** Thin progress bar along the top edge of the viewport. */
export function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 left-0 z-[60] h-1 bg-[var(--color-accent)] transition-[width] duration-150 ease-out"
      style={{ width: `${progress * 100}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Page scroll progress"
    />
  );
}
