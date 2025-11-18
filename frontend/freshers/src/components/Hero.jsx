// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import Countdown from "./Countdown";
import TiltCard from "./TiltCard";
import MagneticButton from "./MagneticButton";

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "backOut" } }
};

const containerVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.5 } }
};

const EVENT_DATE = "2025-11-23T18:00:00+05:30";

export default function Hero() {
  return (
    <section id="hero" className="w-full min-h-screen flex flex-col lg:flex-row 
      items-center justify-between 
      px-6 md:px-12 pb-5 lg:px-20 ">

      {/* LEFT SIDE CONTENT */}
      <div className="w-full lg:w-1/2 space-y-6 pt-32 md:pt-35 lg:pt-48">
        {/* ↑ increased mobile margin */}

        <motion.h1 
  variants={containerVariant}
  initial="hidden"
  animate="visible"
  className="text-6xl md:text-8xl font-extrabold leading-none text-white uppercase tracking-tighter"
  style={{ fontFamily: "Limelight, cursive" }}
>
  {/* Split words to stagger them */}
  {["Let", "The", "Chapter", "Unfold"].map((word, i) => (
    <motion.span key={i} variants={textVariant} className={`inline-block mr-4 ${i > 1 ? 'text-yellow-300' : ''}`}>
      {word}
    </motion.span>
  ))}
</motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg md:text-xl text-white/80 max-w-xl"
        >
        COMIENZO marks the first chapter of your CSE journey - a night overflowing with energy, laughter, chaos, and memories that will stay with you long after the lights fade.
        </motion.p>

     {/* BUTTONS CONTAINER */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.35, duration: 0.7 }}
  className="flex flex-col sm:flex-row flex-wrap gap-6 mt-8 w-full"
>
  {/* YELLOW BUTTON */}
  <MagneticButton
    href="https://docs.google.com/forms/d/e/1FAIpQLSfxpSM_8xBvA7s3KSF0C_eEktU9T1J5oTKh4CxnIj_rzkXJJQ/viewform"
    className="
      w-full sm:w-auto text-center
      px-8 py-4 bg-yellow-300 text-black font-bold text-lg
      rounded-xl shadow-[0_0_15px_rgba(253,224,71,0.4)]
      transition-colors duration-300 hover:bg-yellow-400
    "
  >
    1st Year Form
  </MagneticButton>

  {/* WHITE BUTTON */}
  <MagneticButton
    href="https://docs.google.com/forms/d/e/1FAIpQLScR1FefXTBLhkQg23v8GZ_rq-173JYijEN-kGSQPTfAwhkB6g/viewform"
    className="
      w-full sm:w-auto text-center
      px-8 py-4 bg-white text-black font-bold text-lg
      rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.3)]
      transition-colors duration-300 hover:bg-gray-200
    "
  >
    2nd Year Form
  </MagneticButton>
</motion.div>

        {/* MOBILE COUNTDOWN BELOW TEXT */}
        <div className="flex lg:hidden justify-center mt-10">
          <Countdown targetDate={EVENT_DATE} />
        </div>
      </div>

      {/* DESKTOP COUNTDOWN ON RIGHT */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="
          hidden lg:flex
          flex-col items-center justify-center
          rounded-2xl 
          px-10 py-6
          ml-10
        "
      >
        <TiltCard>
        <Countdown targetDate={EVENT_DATE} />
        </TiltCard>
      </motion.div>

    </section>
  );
}
