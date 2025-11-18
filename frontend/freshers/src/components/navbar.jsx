// src/components/NavBar.jsx
import React, { useState } from "react";
import logo from "../assets/logo.jpeg";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  // Smooth scroll
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const navItems = ["events", "venue","attire", "menu", "gallery", ];

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
            px-4 sm:px-6 py-4
            bg-white/20 backdrop-blur-xl 
            border border-white/30 
            shadow-2xl rounded-3xl
          "
        >
          {/* LOGO + TITLE */}
          <div
            className="flex items-center gap-2 sm:gap-3 md:gap-4 cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            <div
              className="
                w-10 h-10 
                sm:w-12 sm:h-12 
                md:w-14 md:h-14 
                rounded-full overflow-hidden 
                border-2 sm:border-[3px] md:border-4 
                border-white/60 shadow-md 
                bg-white flex items-center justify-center
              "
            >
              <img
                src={logo}
                alt="Comienzo Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div
              className="
                text-white 
                text-2xl        /* 320–380px */
                sm:text-3xl     /* 390–475px */
                md:text-4xl     /* Tablets & above */
                tracking-widest font-extrabold
              "
              style={{ fontFamily: "Limelight, cursive" }}
            >
              COMIENZO
            </div>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex gap-10 text-white uppercase text-sm tracking-wider font-medium">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => scrollToSection(item)}
                className="
                  cursor-pointer relative 
                  hover:text-yellow-300 transition
                "
              >
                {item.toUpperCase()}
              </li>
            ))}
          </ul>

          {/* MOBILE MENU ICON */}
          <div
            className="
              lg:hidden 
              text-white 
              text-3xl 
              cursor-pointer select-none
              pr-1
            "
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
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="
              lg:hidden
              fixed top-[95px]
              left-1/2 -translate-x-1/2
              w-[92%] md:w-[80%]
              bg-white/20 backdrop-blur-xl
              border border-white/30
              shadow-xl
              rounded-2xl
              py-6
              z-[60]
            "
          >
            <ul className="flex flex-col items-center gap-6 text-white text-lg tracking-wide">
              {["home", "events","attire","venue", "menu"].map((item) => (
                <li
                  key={item}
                  className="hover:text-yellow-300 transition cursor-pointer"
                  onClick={() => scrollToSection(item)}
                >
                  {item.toUpperCase()}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
