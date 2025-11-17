// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import Countdown from "./Countdown";

const EVENT_DATE = "2025-11-23T18:00:00+05:30";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row 
      items-center justify-between 
      px-6 md:px-12 pb-5 lg:px-20  ">

      {/* LEFT SIDE CONTENT */}
      <div className="w-full lg:w-1/2 space-y-6 mt-32 lg:mt-0">
        {/* ↑ increased mobile margin */}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl lg:text-7xl 
          font-extrabold leading-tight text-white"
        >
          Let the  
          <span className="block text-yellow-300">Chapter Unfold</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-lg md:text-xl text-white/80 max-w-xl"
        >
        COMIENZO marks the first chapter of your CSE journey - a night overflowing with energy, laughter, chaos, and memories that will stay with you long after the lights fade.
        </motion.p>

     {/* BUTTONS */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.35, duration: 0.7 }}
  className="flex flex-col sm:flex-row flex-wrap gap-4 mt-6 w-full"
>
  {/* YELLOW BUTTON */}
  <motion.a
    whileHover={{ scale: 1.07, boxShadow: "0px 0px 18px rgba(255, 230, 0, 0.6)" }}
    whileTap={{ scale: 0.96 }}
    href="https://docs.google.com/forms/d/e/1FAIpQLSfxpSM_8xBvA7s3KSF0C_eEktU9T1J5oTKh4CxnIj_rzkXJJQ/viewform"
    target="_blank"
    rel="noopener noreferrer"
    className="
      w-full sm:w-auto
      text-center
      px-6 py-3 bg-yellow-300 text-black font-semibold 
      rounded-xl shadow-lg 
      transition-all duration-300 hover:bg-yellow-400
    "
  >
    1st year Form
  </motion.a>

  {/* WHITE BUTTON */}
  <motion.a
    whileHover={{ scale: 1.07, boxShadow: "0px 0px 16px rgba(255, 255, 255, 0.5)" }}
    whileTap={{ scale: 0.96 }}
    href="https://docs.google.com/forms/d/e/1FAIpQLScR1FefXTBLhkQg23v8GZ_rq-173JYijEN-kGSQPTfAwhkB6g/viewform"
    target="_blank"
    rel="noopener noreferrer"
    className="
      w-full sm:w-auto
      text-center
      px-6 py-3 bg-white text-black font-semibold 
      rounded-xl shadow-lg 
      transition-all duration-300 hover:bg-gray-200
    "
  >
    2nd year Form
  </motion.a>
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
        <Countdown targetDate={EVENT_DATE} />
      </motion.div>

    </section>
  );
}
