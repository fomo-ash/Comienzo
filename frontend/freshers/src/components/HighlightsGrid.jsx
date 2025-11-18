import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

// --- 3D TILT CARD COMPONENT ---
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
    
    const rX = (e.clientY - rect.top - height / 2) / 20; 
    const rY = (e.clientX - rect.left - width / 2) / 20; 
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
      style={{
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
      }}
      className={`relative group ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${spotlightX}px ${spotlightY}px,
              ${spotlightColor},
              transparent 80%
            )
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

const EventCard = ({ title, description, img }) => {
  return (
    <TiltCard className="min-w-[340px] md:min-w-[400px] h-[500px] mx-4 snap-center shrink-0">
      <div className="flex flex-col h-full relative z-10">
        <div className="relative h-3/5 overflow-hidden">
          <motion.img
            src={img}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
          <div className="absolute top-4 right-4 px-3 py-1 bg-yellow-300 text-black text-xs font-bold uppercase tracking-widest rounded-full">
            Upcoming
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col justify-end relative">
            <div className="w-12 h-1 bg-yellow-300 mb-4 rounded-full transform origin-left transition-all duration-300 group-hover:w-24" />
            <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight leading-none uppercase group-hover:text-yellow-200 transition-colors">
              {title}
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 group-hover:text-white transition-colors">
              {description}
            </p>
        </div>

        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>
    </TiltCard>
  );
};

export default function HighlightsGrid() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === "left" ? -420 : 420;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const events = [
    {
      title: "Comedy Ke Sitare",
      description: "Prepare for an evening of side-splitting humor as our best comics take the stage. No filter, just raw laughter.",
      img: "https://images.unsplash.com/photo-1585699324551-f6c309eedeca?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Dance Hungama",
      description: "Feel the rhythm, embrace the beat. A high-energy dance showcase that will leave you breathless and wanting more.",
      img: "https://images.unsplash.com/photo-1533174072545-e8d4aa97d848?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Mystery Games",
      description: "Trust no one. Solve the clues before time runs out in this intense, mind-bending interactive experience.",
      img: "https://images.unsplash.com/photo-1633265486064-086b219458ec?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Neon Night",
      description: "When the lights go down, the glow sticks come out. A rave experience right in the heart of the campus.",
      img: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=800&auto=format&fit=crop",
    },
    {
      title: "Code War",
      description: "A battle of logic and speed. Prove your coding dominance in this high-stakes hackathon showdown.",
      img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
    },
  ];
  return (
    <section id="events" className="py-32 relative overflow-visible">
      {/* GLOWING BACKGROUND ORB */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-300/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 px-6 md:px-12 mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
        <div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter mb-2">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">LINEUP</span>
          </h1>
          <p className="text-white/60 text-lg max-w-md">
            Swipe through the chaos. Click to claim your spot.
          </p>
        </div>
        
        {/* NAVIGATION ARROWS */}
        <div className="flex gap-4">
            <button 
                onClick={() => scroll("left")}
                className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-yellow-300 hover:text-black transition-all duration-300 backdrop-blur-md group"
            >
                <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button 
                onClick={() => scroll("right")}
                className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-yellow-300 hover:text-black transition-all duration-300 backdrop-blur-md group"
            >
                <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>

      {/* Horizontal Scroll Row */}
      <div 
        ref={scrollContainerRef}
        className="
          flex gap-6 overflow-x-auto pb-16 px-6 md:px-12 
          snap-x snap-mandatory scroll-smooth
          no-scrollbar 
          mask-image-linear-gradient(to right, transparent, black 5%, black 95%, transparent)
        "
        style={{ scrollbarWidth: 'none' }}
      >
        {events.map((ev, i) => (
          <EventCard key={i} {...ev} />
        ))}
      </div>
    </section>
  );
}