import React from "react";
import { motion } from "framer-motion";

// RANDOM TILT FOR NOTEBOOK / SCRAPBOOK FEEL
const randomRotation = () => {
  const angles = [-6, -4, -2, 0, 2, 4, 6];
  return angles[Math.floor(Math.random() * angles.length)];
};

export default function ArchivesGallery({ photos }) {
  return (
    <section className="w-full py-20 bg-transparent">
      {/* TITLE */}
      <h2 className="text-center text-4xl md:text-5xl font-extrabold text-yellow-300 tracking-wide mb-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
        FROM THE ARCHIVES
      </h2>

      <p className="text-center text-white/70 text-lg mb-12">
        A scrapbook of unforgettable moments ✦
      </p>

      {/* GRID */}
      <div className="
        max-w-6xl mx-auto 
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        gap-10 px-6
      ">
        {photos.map((p, index) => (
          <motion.div
            key={index}
            className="relative bg-white p-4 rounded-xl shadow-2xl"
            style={{ rotate: `${randomRotation()}deg` }}
            whileHover={{ scale: 1.07, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
          >
            {/* Masking Tape */}
            <div className="absolute top-[-14px] left-1/2 -translate-x-1/2 
              w-24 h-6 bg-yellow-200/70 rounded-sm shadow-md opacity-80 rotate-[-3deg]">
            </div>

            {/* PHOTO */}
            <img
              src={p.src}
              alt={p.caption}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />

            {/* CAPTION */}
            <p className="mt-3 text-center text-gray-700 font-semibold italic">
              {p.caption}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
