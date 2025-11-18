// src/components/Venue.jsx
import React from 'react';

export default function Venue() {
  return (
    <section 
      id="venue" 
      className="py-20 w-full flex justify-center relative overflow-hidden" 
    >
      
      {/* 🌟 World Map Background Layer 🌟 */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30" 
        style={{ 
          backgroundImage: 'url("src/assets/worldmap.png")', 
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          // Applying filters to make the map blend seamlessly with the dark gradient:
          filter: 'grayscale(100%) brightness(50%)' 
        }}
      ></div>

      <div className="max-w-6xl w-full px-6 relative z-10">

        {/* 🌟 STYLIZED VENUE TITLE 🌟 */}
        <div className="relative z-10 px-6 md:px-12 mb-12 flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter mb-4 uppercase">
                THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">SPACE</span>
            </h1>
        </div>
        
        {/* CONTAINER FOR MAP (Full width) */}
        <div className="flex justify-center">

          {/* 🌟 Map Embed 🌟 */}
          <div 
            className="
              w-full min-h-[450px]
              rounded-3xl overflow-hidden relative
              shadow-[0_0_30px_rgba(0,0,0,0.6)]
              border border-white/20
              backdrop-blur-xl
            "
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.2591165450294!2d85.81446930000004!3d20.289539100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19096313940f77%3A0xf862b01b8adef757!2sKINGPIN%20RESTRO%20BAR!5e0!3m2!1sen!2sin!4v1763390171010!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}