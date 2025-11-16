// src/components/NavBar.jsx
import React, { useState } from "react";
import logo from "../assets/logo.jpeg";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Navbar */}
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="
          fixed top-6 left-1/2 -translate-x-1/2
          w-[92%] md:w-[80%] lg:w-[70%]
          z-50
        "
      >
        <nav
          className="
            flex items-center justify-between 
            px-6 py-4
            bg-white/20 backdrop-blur-xl 
            border border-white/30 
            shadow-xl rounded-2xl
          "
        >
          {/* LOGO + TITLE */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full overflow-hidden border-4 border-white/60 shadow-md bg-white flex items-center justify-center">
              <img src={logo} alt="Comienzo Logo" className="w-full h-full object-cover" />
            </div>

            <div className="text-white text-2xl md:text-3xl tracking-wider font-extrabold">
              COMIENZO
            </div>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex gap-10 text-white uppercase text-sm tracking-wider font-medium">
            <li className="cursor-pointer hover:text-yellow-300 transition">Home</li>
            <li className="cursor-pointer hover:text-yellow-300 transition">Events</li>
            <li className="cursor-pointer hover:text-yellow-300 transition">Venue</li>
            <li className="cursor-pointer hover:text-yellow-300 transition">Menu</li>
          </ul>

          {/* MOBILE MENU ICON */}
          <div
            className="lg:hidden text-white text-3xl cursor-pointer select-none"
            onClick={() => setOpen((prev) => !prev)}
          >
            ☰
          </div>
        </nav>
      </motion.header>

      {/* -------------------------- */}
      {/* MOBILE MENU DROPDOWN       */}
      {/* -------------------------- */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="
              lg:hidden
              fixed top-[90px]
              left-1/2 -translate-x-1/2
              w-[92%] md:w-[80%]
              bg-white/20 backdrop-blur-xl
              border border-white/30
              shadow-xl
              rounded-2xl
              py-5
              z-[60]
            "
          >
            <ul className="flex flex-col items-center gap-6 text-white text-lg tracking-wide">
              <li
                className="hover:text-yellow-300 transition cursor-pointer"
                onClick={() => setOpen(false)}
              >
                Home
              </li>
              <li
                className="hover:text-yellow-300 transition cursor-pointer"
                onClick={() => setOpen(false)}
              >
                Events
              </li>
              <li
                className="hover:text-yellow-300 transition cursor-pointer"
                onClick={() => setOpen(false)}
              >
                Venue
              </li>
              <li
                className="hover:text-yellow-300 transition cursor-pointer"
                onClick={() => setOpen(false)}
              >
                Menu
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
