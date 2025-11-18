import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({ children, href, className }) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // The 0.3 acts as the "strength" of the magnet. 
    // Higher = more pull.
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      // This transition gives it the "gooey" fluid feel
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className} // This allows us to pass the Yellow/White styles in Hero.jsx
      
      // Keeping your original hover/tap scales for extra juice
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}