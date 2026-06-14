import { useLayoutEffect, useRef, useState } from "react";

const MARQUEE_SPEED_PX = 80;

interface GeocitiesMarqueeProps {
  text: string;
}

function MarqueeHalf({
  segment,
  repeats,
}: {
  segment: string;
  repeats: number;
}) {
  return (
    <>
      {Array.from({ length: repeats }, (_, index) => (
        <span key={index} className="marquee-segment shrink-0">
          {segment}
        </span>
      ))}
    </>
  );
}

export function GeocitiesMarquee({ text }: GeocitiesMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const segmentMeasureRef = useRef<HTMLSpanElement>(null);
  const halfRef = useRef<HTMLDivElement>(null);
  const [segmentRepeats, setSegmentRepeats] = useState(2);
  const [duration, setDuration] = useState(20);

  const segment = `${text}   `;

  useLayoutEffect(() => {
    const container = containerRef.current;
    const segmentMeasure = segmentMeasureRef.current;
    if (!container || !segmentMeasure) return;

    const updateRepeats = () => {
      const segmentWidth = segmentMeasure.offsetWidth;
      const containerWidth = container.clientWidth;
      if (segmentWidth === 0 || containerWidth === 0) return;

      const repeats = Math.max(
        2,
        Math.ceil(containerWidth / segmentWidth) + 1
      );
      setSegmentRepeats(repeats);
    };

    updateRepeats();
    const observer = new ResizeObserver(updateRepeats);
    observer.observe(container);
    return () => observer.disconnect();
  }, [text, segment]);

  useLayoutEffect(() => {
    const half = halfRef.current;
    if (!half) return;

    const updateDuration = () => {
      const halfWidth = half.offsetWidth;
      if (halfWidth === 0) return;
      setDuration(halfWidth / MARQUEE_SPEED_PX);
    };

    updateDuration();
    const observer = new ResizeObserver(updateDuration);
    observer.observe(half);
    return () => observer.disconnect();
  }, [segmentRepeats, text, segment]);

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      <span
        ref={segmentMeasureRef}
        className="pointer-events-none absolute invisible whitespace-nowrap"
        aria-hidden
      >
        {segment}
      </span>

      <div
        className="marquee-track flex w-max text-xs text-[#00ff00] sm:text-sm"
        style={{ animationDuration: `${duration}s` }}
      >
        <div ref={halfRef} className="flex shrink-0">
          <MarqueeHalf segment={segment} repeats={segmentRepeats} />
        </div>
        <div className="flex shrink-0" aria-hidden>
          <MarqueeHalf segment={segment} repeats={segmentRepeats} />
        </div>
      </div>
    </div>
  );
}
