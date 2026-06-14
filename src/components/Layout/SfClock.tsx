import { useEffect, useState } from "react";
import { eyebrowMuted } from "@/constants/typography";

const SF_TIMEZONE = "America/Los_Angeles";

function getSfTimeParts(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: SF_TIMEZONE,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "00";

  const zone =
    new Intl.DateTimeFormat("en-US", {
      timeZone: SF_TIMEZONE,
      timeZoneName: "short",
    })
      .formatToParts(date)
      .find((part) => part.type === "timeZoneName")?.value ?? "PT";

  return {
    hours: Number(value("hour")),
    minutes: Number(value("minute")),
    seconds: Number(value("second")),
    digital: `${value("hour")}:${value("minute")}:${value("second")}`,
    zone,
  };
}

function useSfTime() {
  const [time, setTime] = useState(getSfTimeParts);

  useEffect(() => {
    const tick = () => setTime(getSfTimeParts());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return time;
}

function AnalogClock({
  hours,
  minutes,
  seconds,
}: {
  hours: number;
  minutes: number;
  seconds: number;
}) {
  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = (hours % 12) * 30 + minutes * 0.5;

  return (
    <div
      className="relative mx-auto h-14 w-14 rounded-full border-2 border-[#00ff00] bg-[#000080] shadow-[inset_0_0_0_2px_#000000]"
      aria-hidden
    >
      {[12, 3, 6, 9].map((mark) => (
        <span
          key={mark}
          className="absolute text-[8px] font-bold text-[#00ff00]"
          style={{
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) rotate(${mark * 30}deg) translateY(-18px) rotate(${mark * -30}deg)`,
          }}
        >
          {mark}
        </span>
      ))}
      <span
        className="absolute top-1/2 left-1/2 h-[18%] w-0.5 origin-bottom rounded-full bg-[#ffff00]"
        style={{
          transform: `translate(-50%, -100%) rotate(${hourDeg}deg)`,
        }}
      />
      <span
        className="absolute top-1/2 left-1/2 h-[26%] w-0.5 origin-bottom rounded-full bg-[#00ff00]"
        style={{
          transform: `translate(-50%, -100%) rotate(${minuteDeg}deg)`,
        }}
      />
      <span
        className="absolute top-1/2 left-1/2 h-[30%] w-px origin-bottom bg-[#ff0000]"
        style={{
          transform: `translate(-50%, -100%) rotate(${secondDeg}deg)`,
        }}
      />
      <span className="absolute top-1/2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff00ff]" />
    </div>
  );
}

export function SfClock({ variant }: { variant: "digital" | "analog" }) {
  const { hours, minutes, seconds, digital, zone } = useSfTime();

  if (variant === "analog") {
    return (
      <div className="flex flex-col items-center gap-1">
        <AnalogClock hours={hours} minutes={minutes} seconds={seconds} />
        <p className="text-[10px] font-bold tracking-wider text-[#00ff00] uppercase">
          SF time
        </p>
      </div>
    );
  }

  return (
    <p
      className={`${eyebrowMuted} tabular-nums`}
      aria-live="off"
      aria-label={`San Francisco time ${digital} ${zone}`}
    >
      [SF] {digital} {zone}
    </p>
  );
}
