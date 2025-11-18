// src/components/Menu.jsx
import React, { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MAIN SECTION */}
      <section id="menu" className="w-full py-20 flex justify-center">
        <div className="max-w-4xl w-full px-6">

          {/* 🌟 STYLIZED "THE SPREAD" TITLE 🌟 */}
          {/* This uses the font-black, large size, gradient-clip style */}
          <div className="relative z-10 px-6 md:px-12 mb-12 flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter mb-4 uppercase">
                THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">SPREAD</span>
            </h1>
          </div>

          {/* GLASS CARD (Original structure retained) */}
          <div
            className="
              backdrop-blur-xl 
              bg-white/10 
              rounded-3xl 
              border border-white/20 
              p-4
              shadow-[0_0_40px_rgba(0,0,0,0.3)]
              cursor-pointer
            "
            onClick={() => setOpen(true)}   // ← OPEN FULL SCREEN
          >
            <img
              src="src/assets/menu.jpeg"
              alt="Comienzo Menu"
              className="
                w-full 
                h-auto 
                rounded-2xl 
                object-cover 
                shadow-xl 
                transition-transform 
                duration-500 
                hover:scale-[1.02]
              "
            />
          </div>

        </div>
      </section>

      {/* FULLSCREEN OVERLAY (Original structure retained) */}
      {open && (
        <div
          className="
            fixed inset-0 bg-black/70 backdrop-blur-sm
            flex items-center justify-center
            z-50
            animate-fadeIn
          "
          onClick={() => setOpen(false)}    // ← CLOSE ON CLICK
        >
          <img
            src="src/assets/menu.jpeg"
            alt="Menu Enlarged"
            className="
              w-[90%] max-w-3xl 
              rounded-xl shadow-2xl
              animate-zoomIn
            "
          />
        </div>
      )}
    </>
  );
}