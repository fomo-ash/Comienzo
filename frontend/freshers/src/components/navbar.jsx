import React from "react";
import logo from "../assets/logo.jpeg"; 

export default function NavBar() {
  return (
    <header className="w-full border-b border-[#c1dad9]/60 shadow-sm backdrop-blur-sm">
      <nav className="flex items-center justify-between py-6 px-8">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-white shadow-md bg-white flex items-center justify-center">
            <img src={logo} alt="Comienzo Logo" className="w-full h-full object-cover" />
          </div>
          <div className="text-white text-3xl lg:text-4xl tracking-wider font-extrabold">
            COMIENZO
          </div>
        </div>

        <ul className="hidden lg:flex gap-8 text-white uppercase text-sm tracking-widest">
          <li className="cursor-pointer hover:underline">About</li>
          <li className="cursor-pointer hover:underline">Events</li>
          <li className="cursor-pointer hover:underline">Schedule</li>
          <li className="cursor-pointer hover:underline">Contact</li>
        </ul>
      </nav>
    </header>
  );
}