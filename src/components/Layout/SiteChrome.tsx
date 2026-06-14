import { useState } from "react";
import { GeocitiesButtons } from "@/components/easter-eggs/GeocitiesButtons";
import { GeocitiesMarquee } from "@/components/easter-eggs/GeocitiesMarquee";
import { SfClock } from "@/components/Layout/SfClock";
import { FOOTER_INSET, FOOTER_INSET_X, FOOTER_INSET_Y, FOOTER_META_HIDDEN_SECTIONS } from "@/constants/layout";
import { eyebrowMuted } from "@/constants/typography";
import { profile } from "@/content/profile";

interface SiteChromeProps {
  theme: "light" | "dark" | "geocities";
  activeSection: string;
}

export function SiteChrome({ theme, activeSection }: SiteChromeProps) {
  const year = new Date().getFullYear();
  const isGeocities = theme === "geocities";
  const hideFooterMeta =
    !isGeocities && FOOTER_META_HIDDEN_SECTIONS.has(activeSection);
  const [visitorCount] = useState(
    () => Math.floor(Math.random() * 90000) + 10000
  );

  if (isGeocities) {
    return (
      <footer
        className="fixed inset-x-0 bottom-0 z-40 border-t-4 border-[#ff0000] bg-[#000080] shadow-[0_-4px_0_#000000]"
        aria-label="Site footer"
      >
        <div className="border-b-2 border-[#ff0000] bg-[#000000] px-2 py-1">
          <GeocitiesMarquee
            text={`*** WELCOME TO MY HOMEPAGE!!! YOU ARE VISITOR #${String(visitorCount)} *** SIGN MY GUESTBOOK!!! ***`}
          />
        </div>

        <div className="border-b border-[#ff0000]/60 px-2 py-2">
          <GeocitiesButtons showCredit={false} className="gap-1" />
        </div>

        <div className={`relative w-full ${FOOTER_INSET_Y}`}>
          <p
            className={`${eyebrowMuted} mb-2 text-center tracking-[0.25em] text-[#ffff00] md:absolute md:top-1/2 md:left-1/2 md:mb-0 md:-translate-x-1/2 md:-translate-y-1/2 md:whitespace-nowrap md:px-2`}
          >
            <span className="blink">
              Best viewed in Netscape Navigator 4.0 at 800x600
            </span>
          </p>

          <div
            className={`relative z-10 flex items-center justify-between gap-4 ${FOOTER_INSET_X}`}
          >
            <p
              className={`${eyebrowMuted} shrink-0 font-bold tracking-[0.2em] text-[#00ff00] uppercase`}
            >
              © {year}{" "}
              <span className="lg:hidden">{profile.shortName}</span>
              <span className="hidden lg:inline">{profile.name}</span>
            </p>
            <div className="shrink-0">
              <SfClock variant="analog" />
            </div>
          </div>
        </div>
      </footer>
    );
  }

  if (hideFooterMeta) {
    return null;
  }

  return (
    <footer
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 ${FOOTER_INSET}`}
      aria-label="Site footer"
    >
      <div className="flex items-end justify-between gap-4">
        <p
          className={`${eyebrowMuted} pointer-events-auto tabular-nums`}
        >
          © {year}{" "}
          <span className="lg:hidden">{profile.shortName}</span>
          <span className="hidden lg:inline">{profile.name}</span>
        </p>
        <div className="pointer-events-auto shrink-0">
          <SfClock variant="digital" />
        </div>
      </div>
    </footer>
  );
}
