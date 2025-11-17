// src/components/Menu.jsx
import React, { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MAIN SECTION */}
      <section className="w-full py-20 flex justify-center">
        <div className="max-w-4xl w-full px-6">

          {/* TITLE */}
          <h2 className="text-center text-4xl font-extrabold text-white mb-10 tracking-wide">
            MENU
          </h2>

          {/* GLASS CARD */}
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
            onClick={() => setOpen(true)}   // ← OPEN FULL SCREEN
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

      {/* FULLSCREEN OVERLAY */}
      {open && (
        <div
          className="
            fixed inset-0 bg-black/70 backdrop-blur-sm
            flex items-center justify-center
            z-50
            animate-fadeIn
          "
          onClick={() => setOpen(false)}    // ← CLOSE ON CLICK
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
