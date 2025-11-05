import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-2 left-2 right-2 z-50 w-full bg-white/10 backdrop-blur-lg border-b border-white/20 px-10 py-4 flex items-center justify-center gap-10 text-white text-sm font-medium shadow-[0_0_40px_rgba(255,215,0,0.2)]">
      <a href="#home" className="hover:text-[#FFD700] transition-colors">
        Home
      </a>
      <a href="#events" className="hover:text-[#FFD700] transition-colors">
        Events
      </a>
      <a href="#theme" className="hover:text-[#FFD700] transition-colors">
        Theme
      </a>
      <a href="#gallery" className="hover:text-[#FFD700] transition-colors">
        Gallery
      </a>
      <a href="#signin" className="hover:text-[#FFD700] transition-colors">
        Sign In
      </a>
    </nav>
  );
}
