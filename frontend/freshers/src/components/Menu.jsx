// src/components/Menu.jsx
import React from "react";


export default function Menu() {
  return (
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
          "
        >
          <img
            src="src/assets/menu.jpeg"   // <-- UPDATE THIS
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
  );
}
