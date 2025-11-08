import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

export default function MusicPlayer() {
  const audioref = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioref.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(err => console.error("Playback failed:", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioref} src="/darkside.mp3" loop preload="auto" />

      <motion.button
        whileTap={{ scale: 0.85 }}
        animate={{
          
          scale: isPlaying ? [1, 1.25, 1] : [1, 1.1, 1],
          rotate: isPlaying ? [0, 3, -3, 0] : 0,
          backgroundColor: isPlaying
            ? ["#FFD700", "#E6C200", "#FFD700"]
            : ["#FFD700", "#F9E65C", "#FFD700"],
          boxShadow: isPlaying
            ? [
                "0 0 20px rgba(255,215,0,0.5)",
                "0 0 60px rgba(255,215,0,1)",
                "0 0 25px rgba(255,215,0,0.6)",
              ]
            : [
                "0 0 10px rgba(255,215,0,0.4)",
                "0 0 30px rgba(255,215,0,0.7)",
                "0 0 10px rgba(255,215,0,0.4)",
              ],
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-[1000] w-16 h-16 rounded-full text-black flex items-center justify-center transition-transform"
      >
        {isPlaying ? (
          <Pause className="w-8 h-8" />
        ) : (
          <Play className="w-8 h-8" />
        )}
      </motion.button>
    </>
  );
}
