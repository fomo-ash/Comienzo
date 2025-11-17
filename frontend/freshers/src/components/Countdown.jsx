// Countdown.jsx (Clean Transparent Floating Circles)
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

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
  const [remaining, setRemaining] = useState(() =>
    Math.max(target.current - Date.now(), 0)
  );
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
      <div className="flex flex-col items-center gap-2">
        <span className="text-yellow-300 font-semibold text-sm tracking-wide">
          EVENT IS LIVE
        </span>
        <span className="text-white text-3xl font-bold animate-pulse">
          🎉 Join Now
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-6 pt-12">

      <h3 className="text-white/80 text-xs tracking-widest uppercase drop-shadow-[0_0_30px_white]">
        T MINUS
      </h3>

     <div className="grid grid-cols-2 gap-8 lg:flex lg:gap-8">
        <Circle value={days} label="Days" delay={0} />
        <Circle value={pad(hours)} label="Hours" delay={0.2} />
        <Circle value={pad(minutes)} label="Minutes" delay={0.4} />
        <Circle value={pad(seconds)} label="Seconds" delay={0.6} />
      </div>

    </div>
  );
}

/* ------------------------ */
/* FLOATING CIRCLE COMPONENT */
/* ------------------------ */

function Circle({ value, label, delay }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2.8, delay, repeat: Infinity, ease: "easeInOut" }}
        className="
          w-24 h-24 
          rounded-full 
          flex items-center justify-center
          border-2 border-white/40
          shadow-[0_0_25px_rgba(255,255,255,0.2)]
        "
      >
        <span className="text-white text-3xl font-extrabold tracking-tight">
          {value}
        </span>
      </motion.div>

      <span className="mt-2 text-white/70 text-xs uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}
