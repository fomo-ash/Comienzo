// src/components/Music.jsx
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

export default function Music() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* GLOW ANIMATION WRAPPER */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 20px rgba(255,255,255,0.4)",
            "0 0 40px rgba(255,255,255,0.7)",
            "0 0 20px rgba(255,255,255,0.4)"
          ]
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="rounded-full p-3 bg-white/10 backdrop-blur-xl border border-white/20"
      >
        {/* CIRCLE BUTTON */}
        <motion.button
          onClick={toggleMusic}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.08 }}
          className="
            w-16 h-16
            rounded-full 
            flex items-center justify-center
            bg-yellow-300
            text-[#0F766E]
            shadow-xl
          "
        >
          {playing ? <Pause size={32} /> : <Play size={32} />}
        </motion.button>
      </motion.div>

      {/* Hidden Audio */}
      <audio ref={audioRef} src="/Parano.mpeg" loop />
    </div>
  );
}
