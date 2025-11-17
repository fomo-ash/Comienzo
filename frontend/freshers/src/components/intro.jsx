import { motion } from "framer-motion";

export default function EntryAnimation({ onFinish }) {

  const letters = "COMIENZO".split("");

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >

      {/* BACKGROUND COLOR ANIMATION */}
      <motion.div
        className="absolute inset-0"
        initial={{ backgroundColor: "#063F38" }}
        animate={{ backgroundColor: "#0D7160" }}
        transition={{ duration: 2 }}
      />

      {/* GRAIN OVERLAY (OPTIONAL AESTHETIC) */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay"
        style={{ backgroundImage: "url('/grain.png')" }} />

      {/* COMIENZO LETTER ANIMATION */}
      <div className="relative z-10 flex gap-2 md:gap-4">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3 + i * 0.15,
              duration: 0.6,
              ease: "easeOut"
            }}
            className="text-white text-5xl md:text-7xl tracking-widest"
            style={{ fontFamily: "Limelight, cursive" }}

          >
            {letter === "I" ? (
              <motion.span
                className="inline-block relative"
              >
                I
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 + i * 0.15 + 0.2 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#FFD300] rounded-full"
                ></motion.span>
              </motion.span>
            ) : letter}
          </motion.span>
        ))}
      </div>

      {/* TAGLINE */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-[40%] text-white/80 text-lg tracking-wider italic"


      >
        cse’t la fkin vie
      </motion.p>

      {/* EXIT ANIMATION - SLIDE UP */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ delay: 4, duration: 1.2, ease: "easeInOut" }}
        onAnimationComplete={onFinish}
        className="absolute inset-0"
      />
    </motion.div>
  );
}
