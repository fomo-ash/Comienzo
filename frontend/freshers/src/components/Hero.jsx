// src/components/Hero.jsx
import React from "react";
import Countdown from "./Countdown";

const EVENT_DATE = "2025-11-23T18:00:00+05:30"; // 23 Nov 2025, 18:00 IST

export default function Hero({ heroImg = null }) {
  return (
    <section className="w-full mx-auto mt-6">
      {/* center and constrain hero to max-w-5xl so features below can match it */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-white/90 rounded-2xl border border-white shadow-xl overflow-hidden">
          <div className="flex flex-col items-center px-8 py-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#2f2b2b] text-center">
              COMIENZO
            </h1>

            <div className="mt-4 px-4 py-2 bg-yellow-100 rounded-full text-xs uppercase text-[#2f2b2b] font-semibold">
              Welcome Batch 2025
            </div>

            <div className="mt-8 w-full">
              {heroImg && (
                <div className="w-full h-56 md:h-72 lg:h-96 overflow-hidden rounded-md border border-gray-100 mb-6">
                  <img src={heroImg} alt="Event preview" className="w-full h-full object-cover" />
                </div>
              )}

              {/* Countdown card */}
              <div className="bg-[#f7fbfb] p-6 md:p-8 rounded-xl border border-gray-200 shadow-md flex flex-col items-center">
                <p className="text-sm text-[#556] mb-2">The big night begins in</p>

                <Countdown targetDate={EVENT_DATE} onEnd={() => console.log("Event started")} />

                <div className="mt-6 flex gap-3">
                  <a
                    href="#tickets"
                    className="inline-block px-6 py-2 rounded-full bg-[#d07b6b] text-white font-semibold uppercase tracking-wide"
                  >
                    Register
                  </a>
                  <a
                    href="#schedule"
                    className="inline-block px-6 py-2 rounded-full border border-[#d07b6b] text-[#2f2b2b] font-semibold uppercase tracking-wide"
                  >
                    Schedule
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* small spacer so features sit below with visible gap */}
        <div className="h-8" />
      </div>
    </section>
  );
}

