import React from 'react';
import FeatureCard from './FeatureCard';


export default function Features() {
return (
<section className="max-w-5xl mx-auto mt-12 px-6 py-10 bg-[#efe7dd] rounded-t-lg">
<h2 className="text-4xl font-bold text-center text-[#2f2b2b]">About The Event</h2>
<p className="mt-3 text-center text-sm text-[#666]">A retro-themed freshers party — fun activities, performances and memory-making moments.</p>


<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
<FeatureCard title="Music" text="Live bands, DJ nights and open-mic sessions." icon="🎵" />
<FeatureCard title="Competitions" text="Dance, coding and fun challenges with prizes." icon="🏆" />
<FeatureCard title="Food Stalls" text="Local and street-food counters — tasty & affordable." icon="🍜" />
<FeatureCard title="Photo Booth" text="Retro props and instant photos to take home." icon="📸" />
</div>
</section>
);
}