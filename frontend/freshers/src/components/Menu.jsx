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
          <div className="relative z-10 px-6 md:px-12 mb-12 flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter mb-4 uppercase">
                THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">SPREAD</span>
            </h1>
          </div>

          {/* GLASS CARD CONTAINER with CLICK HANDLER */}
          <div
            className="
              relative 
              backdrop-blur-xl 
              bg-white/10 
              rounded-3xl 
              border border-white/20 
              p-4
              shadow-[0_0_40px_rgba(0,0,0,0.3)]
              cursor-pointer
            "
            onClick={() => setOpen(true)} // ← OPEN FULL SCREEN & REMOVE COVER
          >
            {/* --- NEW MENU COVER (UPDATED TEXT) --- */}
            {!open && (
              <div
                className="
                  absolute inset-0 z-20 
                  rounded-2xl 
                  bg-black/70 backdrop-blur-sm 
                  flex items-center justify-center 
                  text-white 
                  transition-opacity duration-500 
                  hover:bg-black/60
                "
              >
                <p className="
                  // 🌟 Increased Size for better visibility 🌟
                  text-5xl md:text-7xl font-extrabold uppercase tracking-widest 
                  text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500
                  animate-pulse
                ">
                  TAP TO REVEAL                </p>
              </div>
            )}
            {/* --- END NEW MENU COVER --- */}

            {/* MENU IMAGE (Always present inside the container) */}
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
          onClick={(e) => {
            // Allows closing by clicking the backdrop
            setOpen(false);
          }}
        >
          <img
            src="src/assets/menu.jpeg"
            alt="Menu Enlarged"
            // Prevents closing when clicking on the image itself
            onClick={(e) => e.stopPropagation()} 
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