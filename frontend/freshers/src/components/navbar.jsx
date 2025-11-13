import React from 'react';


export default function NavBar() {
return (
<header className="max-w-5xl mx-auto px-6 pt-8">
<nav className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-[#2f2b2b] flex items-center justify-center text-2xl font-bold text-cream text-white">JD</div>
<div className="text-white text-2xl tracking-wider font-extrabold drop-shadow-lg">RETRO</div>
</div>
<ul className="hidden md:flex gap-6 text-white uppercase text-sm tracking-widest">
<li className="cursor-pointer">About</li>
<li className="cursor-pointer">Events</li>
<li className="cursor-pointer">Schedule</li>
<li className="cursor-pointer">Contact</li>
</ul>
</nav>
</header>
);
}