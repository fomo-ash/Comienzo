import React, { useRef, useState, useEffect } from "react";
import { 
  motion, 
  useMotionValue, 
  useSpring, 
  useTransform, 
  useMotionTemplate 
} from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useDrag } from "@use-gesture/react";

import Latent from "../assets/Latent.jpg";
import fiesta from "../assets/fiesta.jpg";
import jamming from "../assets/jamming.jpg";
import soon from "../assets/ComingSoon.jpg";
// --- 1. THE 3D TILT WRAPPER (Inner Card Effect) ---
const TiltCard = ({ children, className, spotlightColor = "rgba(253, 224, 71, 0.3)" }) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);

  const rotateX = useMotionTemplate`rotateX(${mouseY}deg)`;
  const rotateY = useMotionTemplate`rotateY(${mouseX}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const rX = (e.clientY - rect.top - height / 2) / 15; 
    const rY = (e.clientX - rect.left - width / 2) / 15; 
    x.set(rY);
    y.set(-rX);

    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
      className={`relative group ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(650px circle at ${spotlightX}px ${spotlightY}px, ${spotlightColor}, transparent 80%)
          `,
          zIndex: 0,
        }}
      />
      <div className="relative h-full rounded-2xl bg-[#0F766E]/30 backdrop-blur-xl p-1 shadow-xl ring-1 ring-white/10 transition-all duration-300 group-hover:ring-yellow-300/50">
        <div className="relative h-full overflow-hidden rounded-xl bg-black/50">
           {children}
        </div>
      </div>
    </motion.div>
  );
};

// --- 2. CAROUSEL ITEM (Handles the 3D Carousel Logic) ---
const CarouselItem = ({ index, x, totalCards, cardWidth, children }) => {
  const childInput = [
    (index - 1) * -cardWidth, // Previous card position
    index * -cardWidth,       // Current card position (center)
    (index + 1) * -cardWidth, // Next card position
  ];

  // 3D Transforms based on position relative to center
  const scale = useTransform(x, childInput, [0.85, 1, 0.85]);
  const opacity = useTransform(x, childInput, [0.5, 1, 0.5]);
  const rotateY = useTransform(x, childInput, [35, 0, -35]);
  const zIndex = useTransform(x, childInput, [1, 10, 1]);

  return (
    <motion.div
      style={{
        width: cardWidth,
        x: useTransform(x, (value) => value + index * cardWidth), // Absolute positioning in the stack
        scale,
        opacity,
        rotateY,
        zIndex,
        position: "absolute",
        left: 0,
        top: 0,
        height: "100%",
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      className="flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
};


// --- 3. MAIN COMPONENT ---
export default function HighlightsGrid() {
  // Define events
  const events = [
    {
      title: "CSE got Latent",
      description: "The ultimate chance to showcase your talents beyond coding - be it singing, dancing, acting, or any unique skill you possess!",
      img: Latent,
    },
    {
      title: "Cultural Fiesta",
      description: "Music, dance, drama - enjoy the vibrant Cultural/Modern performances.",
      img: fiesta,
    },
    {
      title: "Mehfil-e-Jamming",
      description: "Jamming session with the Seniors. Music, vibes, and more.",
      img: jamming,
    },
    {
      title: "Coming Soon",
      description: "SHH... It's a surprise event!",
      img: soon,
    },
    {
      title: "Coming Soon",
      description: "SHH... It's a surprise event!",
      img: soon,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const containerRef = useRef(null);
  
  // CONFIG
  // Mobile: Card width is smaller to fit screen. Desktop: Larger.
  const CARD_WIDTH = width < 640 ? width * 0.85 : 400; 
  
  const x = useSpring(0, { stiffness: 150, damping: 20 });

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (containerRef.current) setWidth(containerRef.current.offsetWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sync spring with current index
  useEffect(() => {
    x.set(-currentIndex * CARD_WIDTH);
  }, [currentIndex, CARD_WIDTH, x]);

  const bind = useDrag(
    ({ movement: [mx], direction: [dx], velocity: [vx], cancel, active }) => {
      // Determine swipe threshold
      if (!active) {
        const swipeConfidenceThreshold = 100;
        const swipe = Math.abs(mx) > swipeConfidenceThreshold && Math.abs(vx) > 0.2;
        
        if (swipe) {
          let newIndex = currentIndex + (dx > 0 ? -1 : 1);
          // Clamp index
          if (newIndex < 0) newIndex = 0;
          if (newIndex >= events.length) newIndex = events.length - 1;
          setCurrentIndex(newIndex);
        } else {
          // Snap back if drag wasn't enough
          x.set(-currentIndex * CARD_WIDTH);
        }
      } else {
        // While dragging
        x.set(-currentIndex * CARD_WIDTH + mx);
      }
    },
    { axis: "x", filterTaps: true }
  );

  return (
    <section id="events" className="py-24 md:py-32 relative overflow-hidden min-h-[800px] flex flex-col justify-center">
      {/* GLOWING BACKGROUND ORB */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-yellow-300/10 blur-[100px] rounded-full pointer-events-none" />

      {/* TEXT HEADER */}
      <div className="relative z-10 px-6 md:px-12 mb-12 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-8xl font-black text-white leading-none tracking-tighter mb-4">
          THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">LINEUP</span>
        </h1>
        <p className="text-white/60 text-lg max-w-md">
          Drag, swipe, or click to explore the chaos.
        </p>
      </div>

      {/* 3D CAROUSEL AREA */}
      <div 
        ref={containerRef}
        className="relative h-[500px] w-full flex items-center justify-center perspective-1000 cursor-grab active:cursor-grabbing touch-none"
        {...bind()}
      >
        {/* CARDS CONTAINER CENTERED */}
        <div className="relative h-full" style={{ width: CARD_WIDTH }}> 
          {events.map((ev, i) => (
            <CarouselItem key={i} index={i} x={x} totalCards={events.length} cardWidth={CARD_WIDTH}>
              <TiltCard className="w-full h-full">
                <div className="flex flex-col h-full relative z-10 select-none">
                  {/* IMAGE */}
                  <div className="relative h-3/5 overflow-hidden">
                    <img
                      src={ev.img}
                      alt={ev.title}
                      className="w-full h-full object-cover pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-300 text-black text-xs font-bold uppercase tracking-widest rounded-full">
                      Upcoming
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 flex-1 flex flex-col justify-end relative">
                      <div className="w-12 h-1 bg-yellow-300 mb-4 rounded-full" />
                      <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-2 uppercase leading-none">
                        {ev.title}
                      </h2>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {ev.description}
                      </p>
                  </div>
                </div>
              </TiltCard>
            </CarouselItem>
          ))}
        </div>
      </div>

      {/* NAVIGATION BUTTONS (Desktop Only) */}
      <div className="hidden md:flex justify-center gap-6 mt-8 relative z-20">
        <button 
          onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
          disabled={currentIndex === 0}
          className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-yellow-300 hover:text-black transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={() => setCurrentIndex(Math.min(events.length - 1, currentIndex + 1))}
          disabled={currentIndex === events.length - 1}
          className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-yellow-300 hover:text-black transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
}