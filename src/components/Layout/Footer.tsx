import { useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import { Mondrian } from "@/components/easter-eggs/Mondrian";

export function Footer() {
  const { theme } = useTheme();
  const [visitorCount] = useState(
    () => Math.floor(Math.random() * 90000) + 10000
  );

  return (
    <footer className="border-t border-theme px-6 py-12 text-center md:px-12">
      {theme === "geocities" && (
        <div className="mb-6 overflow-hidden whitespace-nowrap border-2 border-[#ff0000] bg-[#000000] p-2">
          <span className="marquee text-sm text-[#00ff00]">
            *** WELCOME TO MY HOMEPAGE!!! YOU ARE VISITOR #
            {String(visitorCount)} ***
          </span>
        </div>
      )}

      <p className="text-sm text-muted">
        {theme === "geocities" ? (
          <span className="blink text-[#ffff00]">
            Best viewed in Netscape Navigator 4.0 at 800x600
          </span>
        ) : (
          <>Designed & built by Jonathan Bridges</>
        )}
      </p>

      <div className="mt-6">
        <Mondrian />
      </div>
    </footer>
  );
}
