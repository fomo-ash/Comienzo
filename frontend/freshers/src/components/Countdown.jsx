import React, { useEffect, useState, useRef } from "react";


function getTimeParts(ms) {
  if (ms <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

export default function Countdown({ targetDate, onEnd }) {
  const target = useRef(new Date(targetDate).getTime());
  const [remaining, setRemaining] = useState(() => Math.max(target.current - Date.now(), 0));
  const [ended, setEnded] = useState(remaining <= 0);

  useEffect(() => {
    if (isNaN(target.current)) {
      console.error("Countdown: invalid targetDate", targetDate);
      return;
    }

    const tick = () => {
      const now = Date.now();
      const diff = Math.max(target.current - now, 0);
      setRemaining(diff);
      if (diff === 0) {
        setEnded(true);
        if (onEnd) onEnd();
      }
    };

    const id = setInterval(tick, 1000);
    tick();
    return () => clearInterval(id);
  }, [targetDate, onEnd]);

  const { days, hours, minutes, seconds } = getTimeParts(remaining);

  const pad = (n) => String(n).padStart(2, "0");

  if (ended) {
    return (
      <div className="w-full flex flex-col items-center gap-3">
        <div className="inline-block px-4 py-2 rounded-full bg-yellow-100 text-xs font-semibold tracking-wide text-[#2f2b2b]">
          THE EVENT IS LIVE!
        </div>
        <div className="text-2xl md:text-3xl font-bold text-[#2f2b2b] animate-bounce">Join Now 🎉</div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-wrap justify-center gap-4 md:gap-6 items-center">
      <TimeBlock label="Days" value={String(days)} />
      <Divider />
      <TimeBlock label="Hours" value={pad(hours)} />
      <Divider />
      <TimeBlock label="Minutes" value={pad(minutes)} />
      <Divider />
      <TimeBlock label="Seconds" value={pad(seconds)} />
    </div>
  );
}

function TimeBlock({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div
        aria-hidden
        className="w-28 md:w-36 lg:w-44 h-20 md:h-24 lg:h-28 rounded-lg bg-white/90 border border-gray-200 shadow-countdown flex items-center justify-center font-extrabold text-2xl md:text-3xl lg:text-4xl text-[#2f2b2b] tracking-tight"
      >
        {value}
      </div>
      <div className="mt-2 text-xs md:text-sm text-[#334444] uppercase tracking-wider">{label}</div>
    </div>
  );
}

function Divider() {
  return <div className="hidden md:block w-1 h-10 bg-white/40 rounded" aria-hidden />;
}
