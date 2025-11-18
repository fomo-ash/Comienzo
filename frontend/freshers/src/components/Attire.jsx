import React from "react";

export default function Attire() {
  return (
    <section id="attire" className="py-24 md:py-32 relative overflow-hidden">

      {/* Glow orb behind the title for premium look */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
        w-[300px] md:w-[500px] h-[300px] md:h-[500px]
        bg-yellow-300/10 blur-[120px] rounded-full pointer-events-none" 
      />

      {/* Title */}
      <div className="relative z-10 px-6 md:px-12 mb-12 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter mb-4">
          THE{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
            ATTIRE
          </span>
        </h1>

        <p className="text-white/60 text-lg max-w-md">
          Dress sharp. Dress elegant. Dress like the DAY is yours.
        </p>
      </div>

      {/* Attire Cards */}
      <div className="relative z-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6">

        {/* Boys */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-3">For Boys</h2>
          <p className="text-white/70 leading-relaxed">
            • Semi-formals only <br />
            • Shirts, chinos <br />
            • Avoid hoodies, shorts, and sandals
          </p>
        </div>

        {/* Girls */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-3">For Girls</h2>
          <p className="text-white/70 leading-relaxed">
            • Ethnic outfits only <br />
            • Kurtis, suits, lehengas, indo-western fits <br />
            • Avoid sarees & western partywear
          </p>
        </div>

      </div>
    </section>
  );
}
