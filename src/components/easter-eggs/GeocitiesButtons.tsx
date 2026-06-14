import { geocitiesButtons } from "@/content/geocities-buttons";

interface GeocitiesButtonsProps {
  showCredit?: boolean;
  className?: string;
}

export function GeocitiesButtons({
  showCredit = true,
  className = "",
}: GeocitiesButtonsProps) {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
        {geocitiesButtons.map(({ src, alt, href }) => (
          <a
            key={src}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer border border-[#ff0000] bg-[#000000] p-0.5 transition-opacity hover:opacity-80"
          >
            <img src={src} alt={alt} width={88} height={31} className="block" />
          </a>
        ))}
      </div>
      {showCredit && (
        <p className="text-[10px] text-[#00ff00]">
          88×31 buttons via{" "}
          <a
            href="https://anlucas.neocities.org/88x31Buttons"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ffff] underline"
          >
            A.N. Lucas
          </a>
        </p>
      )}
    </div>
  );
}
