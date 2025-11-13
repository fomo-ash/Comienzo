import React from 'react';


export default function HighlightsGrid() {
return (
<section className="max-w-5xl mx-auto px-6 mt-10 mb-16">
<h3 className="text-3xl font-bold text-center text-[#2f2b2b]">Event Highlights</h3>
<p className="text-center text-sm text-[#666] mt-2">Filter by: <span className="mx-2 px-2 py-1 bg-white text-xs rounded-full">music</span> <span className="mx-2 px-2 py-1 bg-white text-xs rounded-full">games</span> <span className="mx-2 px-2 py-1 bg-white text-xs rounded-full">food</span></p>


<div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
{Array.from({ length: 8 }).map((_, i) => (
<div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm border">
<div className="h-36 bg-gray-100 flex items-center justify-center">
<img src={`/assets/thumb-${i % 4}.jpg`} alt={`thumb-${i}`} className="object-cover h-full w-full" />
</div>
<div className="p-4">
<h4 className="font-bold text-sm text-[#2f2b2b]">Showcase #{i + 1}</h4>
<p className="text-xs text-[#666] mt-2">Short description of this highlight or activity.</p>
</div>
</div>
))}
</div>


<div className="mt-8 text-center">
<button className="px-6 py-2 rounded-full bg-[#d07b6b] text-white font-semibold uppercase tracking-wide">Browse all</button>
</div>
</section>
);
}