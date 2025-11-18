import { motion } from "framer-motion";

export default function Background() {
  // Create 15-20 floating orbs
  const orbs = Array.from({ length: 20 });

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {orbs.map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-yellow-300 rounded-full opacity-20 blur-xl"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            opacity: [0.2, 0.5, 0.2], // Pulse effect
          }}
          transition={{
            duration: Math.random() * 10 + 10, // Slow, random movement
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
          }}
        />
      ))}
      {/* Grain Overlay to keep it raw */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
    </div>
  );
}