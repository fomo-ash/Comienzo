import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { X } from "lucide-react";

export default function CursorFollower({ onClose }) {
  // 1. Track Mouse Position
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // 2. Physics for Button 1 (Fast/Tight)
  const springConfigA = { damping: 25, stiffness: 150 };
  const x1 = useSpring(mouseX, springConfigA);
  const y1 = useSpring(mouseY, springConfigA);

  // 3. Physics for Button 2 (Slow/Loose - creates the "tail" effect)
  const springConfigB = { damping: 40, stiffness: 100 };
  // Add a slight delay/offset feeling by referencing the same mouse value but with different physics
  const x2 = useSpring(mouseX, springConfigB);
  const y2 = useSpring(mouseY, springConfigB);

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  // 4. Render via Portal (so it floats above EVERYTHING, even the navbar)
  return createPortal(
    <div className="fixed inset-0 z-[99999] pointer-events-none bg-black/60 backdrop-blur-sm">
      {/* EXIT INSTRUCTION */}
      <div className="absolute top-10 left-0 w-full text-center text-white/40 text-sm uppercase tracking-widest animate-pulse">
        Press ESC or Click X to close
      </div>

      {/* CLOSE BUTTON */}
      <button 
        onClick={onClose}
        className="pointer-events-auto absolute top-8 right-8 p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
      >
        <X size={24} />
      </button>

      {/* BUTTON 1: 1st YEAR */}
      <motion.div
        style={{ x: x1, y: y1 }}
        className="absolute top-0 left-0 pointer-events-auto"
      >
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfxpSM_8xBvA7s3KSF0C_eEktU9T1J5oTKh4CxnIj_rzkXJJQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-48 h-20 -ml-24 -mt-10 
                     bg-yellow-300 text-black font-black text-xl uppercase 
                     rounded-full shadow-[0_0_30px_rgba(253,224,71,0.6)]
                     hover:scale-110 transition-transform cursor-none"
        >
          1st Year
        </a>
      </motion.div>

      {/* BUTTON 2: 2nd YEAR */}
      <motion.div
        style={{ x: x2, y: y2 }}
        className="absolute top-0 left-0 pointer-events-auto"
      >
        {/* We add a margin-top to physically separate it slightly from the cursor center */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScR1FefXTBLhkQg23v8GZ_rq-173JYijEN-kGSQPTfAwhkB6g/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-48 h-20 -ml-24 mt-14 
                     bg-white text-black font-black text-xl uppercase 
                     rounded-full shadow-[0_0_30px_rgba(255,255,255,0.4)]
                     hover:scale-110 transition-transform cursor-none"
        >
          2nd Year
        </a>
      </motion.div>
    </div>,
    document.body
  );
}