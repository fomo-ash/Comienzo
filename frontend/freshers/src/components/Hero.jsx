import React from 'react';


export default function Hero({ heroImg = '/assets/retro-camera.jpg' }) {
return (
<section className="max-w-4xl mx-auto mt-8 px-6">
<div className="bg-white/80 rounded-lg border-4 border-white shadow-lg overflow-hidden">
<div className="p-8 flex flex-col items-center">
<h1 className="text-6xl md:text-7xl font-extrabold tracking-widest text-[#2f2b2b] drop-shadow-sm">FRESHERS</h1>
<div className="mt-3 px-6 py-2 bg-amber-100 rounded-full text-sm uppercase text-[#2f2b2b] font-semibold">Welcome Batch 2025</div>
<div className="mt-6 w-full h-56 md:h-72 bg-gray-100 rounded-md border border-gray-200 flex items-center justify-center">
<img src={heroImg} alt="hero" className="max-h-full object-contain" />
</div>
<p className="mt-6 text-center text-lg md:text-xl font-medium text-[#334444]">Join the celebration — music, games, stalls, and surprises. Come meet your batchmates!</p>
</div>
</div>
</section>
);
}