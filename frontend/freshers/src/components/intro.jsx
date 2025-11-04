import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function Intro({ show, onFinish }) {
  useEffect(() => {
    if (show) {
      const t = setTimeout(() => onFinish(), 5000); 
      return () => clearTimeout(t);
    }
  }, [show, onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black overflow-hidden text-[#FFD700] font-extrabold text-center"
        >
         
          <motion.div
            initial={{ opacity: 1, scale: 1.1 }}
            animate={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            className="absolute inset-0 bg-[url('/fog.png')] bg-cover bg-center opacity-80 blur-sm"
            style={{
              mixBlendMode: "lighten",
            }}
          />

         
          <div className="relative z-40 flex items-center gap-3 text-5xl md:text-7xl mt-4">
            
            <motion.span
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
              style={{
                textShadow:
                  "0 0 25px #FFD700, 0 0 45px rgba(255,215,0,0.6)",
              }}
            >
              AAGAAZ
            </motion.span>

           
            <motion.span
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
              className="text-white"
              style={{
                textShadow:
                  "0 0 25px #ffffff, 0 0 45px rgba(255,215,0,0.6)",
              }}
            >
              &nbsp;2.0
            </motion.span>
          </div>

          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-6 text-xl md:text-2xl text-white/90 tracking-wide z-40"
          >
            The OG CSE freshers!!
          </motion.p>

         
          <motion.div
            initial={{ x: "-150%", opacity: 0.6 }}
            animate={{ x: "150%", opacity: [0.6, 1, 0.6] }}
            transition={{
              delay: 2.8,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-[#FFD700]/40 to-transparent blur-2xl z-30"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
