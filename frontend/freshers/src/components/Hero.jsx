import { motion } from "framer-motion";
import logo from "../assets/logo.png.png"

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#000000] via-[#0A0A0A] to-[#1A1A1A] text-white text-center relative overflow-hidden">
      {/* Golden spotlight behind logo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.12),transparent_70%)] blur-2xl"></div>

      {/* Floating gold particles (optional subtle effect) */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#FFD700]/50 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 5}s ease-in-out infinite`,
            }}
          ></div>
        ))}
      </div>

      {/* Logo */}
      <motion.img
        src={logo}
        alt="AAGAAZ Logo"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="w-[250px] md:w-[350px] mb-8 drop-shadow-[0_0_25px_rgba(255,215,0,0.4)] z-10"
      />

      {/* Text */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold text-[#FFD700] drop-shadow-[0_0_20px_rgba(255,215,0,0.8)] z-10"
      >
        Why So Serious?
      </motion.h1>
    </section>
  );
}
