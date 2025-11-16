import React from "react";
import { motion } from "framer-motion";

const EventCard = ({ title, description, img }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.15, zIndex: 20 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className="
        min-w-[320px] md:min-w-[380px] lg:min-w-[430px]
        bg-[#0F766E]/40 backdrop-blur-xl
        rounded-2xl overflow-hidden border-2 border-white/40
        shadow-[0_0_25px_rgba(255,255,255,0.15)]
        hover:shadow-[0_0_35px_10px_rgba(173,243,234,0.35)]
        cursor-pointer transform-gpu
        transition-all duration-300 mx-4
      "
    >
      <img
        src={img}
        alt={title}
        className="w-full h-64 object-cover opacity-95"
      />

      <div className="p-6">
        <h2 className="text-2xl font-extrabold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
          {title}
        </h2>
        <p className="text-white/85 mt-2 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default function HighlightsGrid() {
  const events = [
    {
      title: "Comedy Ke Sitare",
      description:
        "A hilarious comedy night with skits and jokes that bring the house down!",
      img: "/src/assets/test.png",
    },
    {
      title: "Dance Hungama",
      description:
        "A high-energy dance fest filled with performances that set the stage on fire!",
      img: "/src/assets/test.png",
    },
    {
      title: "Mystery Games",
      description:
        "Exciting games that challenge your instincts, speed, and teamwork!",
      img: "/src/assets/test.png",
    },
    {
      title: "Mystery Games",
      description:
        "Exciting games that challenge your instincts, speed, and teamwork!",
      img: "/src/assets/test.png",
    },
    {
      title: "Mystery Games",
      description:
        "Exciting games that challenge your instincts, speed, and teamwork!",
      img: "/src/assets/test.png",
    },
    {
      title: "Mystery Games",
      description:
        "Exciting games that challenge your instincts, speed, and teamwork!",
      img: "/src/assets/test.png",
    },
  ];

  return (
    <div className="py-24 bg-transparent">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] mb-2">
        EVENTS
      </h1>

      <p className="text-white/70 text-center mb-12 tracking-[0.15em] uppercase">
        Scroll → to explore
      </p>

      {/* Horizontal Scroll Row */}
      <div
        className="
          flex overflow-x-auto no-scrollbar
          px-4 pb-8 snap-x snap-mandatory
        "
      >
        {events.map((ev, i) => (
          <div key={i} className="snap-start">
            <EventCard {...ev} />
          </div>
        ))}
      </div>
    </div>
  );
}
