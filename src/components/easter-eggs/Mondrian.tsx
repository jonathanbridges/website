import { useEffect, useMemo, useState } from "react";
import {
  getMondrianColor,
  mondrianColors,
} from "@/content/mondrian";

export function Mondrian() {
  const [open, setOpen] = useState(false);

  const gridItems = useMemo(() => {
    const items = [];
    for (let row = 1; row < 16; row++) {
      for (let col = 1; col < 22; col++) {
        const colorKey = getMondrianColor(col, row);
        items.push(
          <div
            key={`${row}-${col}`}
            style={{ backgroundColor: mondrianColors[colorKey] }}
            className={
              colorKey === "transparent"
                ? "shadow-[inset_0_0_0_1px_rgba(0,0,0,0.15)]"
                : undefined
            }
          />
        );
      }
    }
    return items;
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-xs text-muted underline underline-offset-4 transition-colors hover:text-primary"
      >
        What are you looking here for anyways?
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Mondrian easter egg"
          onClick={() => setOpen(false)}
        >
          <div
            className="max-h-[90vh] max-w-4xl overflow-auto bg-white p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <a
              href="https://www.museothyssen.org/en/collection/artists/mondrian-piet/new-york-city-3-unfinished"
              target="_blank"
              rel="noopener noreferrer"
              title="A CSS grid version of Mondrian's New York City, 3"
            >
              <div className="grid aspect-[21/15] w-full grid-cols-[repeat(21,1fr)] grid-rows-[repeat(15,1fr)] gap-px bg-neutral-300">
                {gridItems}
              </div>
            </a>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-2 w-full py-2 text-sm text-neutral-600 hover:text-neutral-900"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
