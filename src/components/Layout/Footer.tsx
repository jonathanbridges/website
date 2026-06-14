import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { Mondrian } from "@/components/easter-eggs/Mondrian";

export function Footer() {
  const { theme } = useTheme();
  const isGeocities = theme === "geocities";
  const [visitorCount] = useState(
    () => Math.floor(Math.random() * 90000) + 10000
  );

  return (
    <footer
      className={
        isGeocities
          ? "fixed right-0 bottom-0 left-0 z-40 border-t-2 border-[#ff0000] bg-[#000000] px-4 py-2 text-center shadow-[0_-4px_12px_rgba(0,0,0,0.5)]"
          : "border-t border-theme px-6 py-12 text-center md:px-12"
      }
    >
      {isGeocities && (
        <div className="mb-2 overflow-hidden whitespace-nowrap border-2 border-[#ff0000] bg-[#000000] p-1.5">
          <span className="marquee text-xs text-[#00ff00] sm:text-sm">
            *** WELCOME TO MY HOMEPAGE!!! YOU ARE VISITOR #
            {String(visitorCount)} ***
          </span>
        </div>
      )}

      <p
        className={
          isGeocities
            ? "text-eyebrow tracking-[0.35em]"
            : "text-eyebrow tracking-[0.4em]"
        }
      >
        {isGeocities ? (
          <span className="blink text-[#ffff00]">
            Best viewed in Netscape Navigator 4.0 at 800x600
          </span>
        ) : (
          <>Designed & built by Jonathan Bridges</>
        )}
      </p>

      <div className={isGeocities ? "mt-2" : "mt-6"}>
        <Mondrian />
      </div>
    </footer>
  );
}
