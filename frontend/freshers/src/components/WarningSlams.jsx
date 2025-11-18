// CornerMaskedStripsWithTimer.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Countdown from "./Countdown";

const STRIPS = [
  { text: "WARNING", corner: "top-left" },
  { text: "WATCH OUT", corner: "top-right" },
  { text: "KEEP CLEAR", corner: "bottom-left" },
  { text: "DANGER", corner: "bottom-right" },
];

export default function WarningSlams() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(containerRef.current, { perspective: 1400 });

      // initial: far on z-axis and slightly tilted
      gsap.set(".strip", {
        z: -900,
        rotationX: 18,
        scale: 1.02,
        transformStyle: "preserve-3d",
        transformOrigin: "50% 50% -300px",
      });

      // timeline with a 3s start delay, slower slam
      const tl = gsap.timeline({ delay: 3 });

      tl.to(".strip", {
        z: 0,
        rotationX: 0,
        scale: 1,
        duration: 1.2,            // slower slam
        ease: "power3.out",
        stagger: { each: 0.12, from: "center" },
      });

      // small settle bob to sell impact
      tl.to(
        ".strip",
        {
          y: "-=8",
          duration: 0.12,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
          stagger: { each: 0.08, from: "center" },
        },
        "-=0.6"
      );

      // nothing else — strips remain in place
    }, containerRef);

    return () => ctx.revert();
  }, []);

  function getCornerStyle(corner) {
    const base = {
      position: "absolute",
      width: "34%",
      height: "8%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none",
      zIndex: 80,
      borderRadius: "10px",
      overflow: "visible",
      transformStyle: "preserve-3d",
    };

    switch (corner) {
      case "top-left":
        return { ...base, top: "6%", left: "4%", transform: "rotate(-18deg)" };
      case "top-right":
        return { ...base, top: "6%", right: "12%", transform: "rotate(18deg)" };
      case "bottom-left":
        return { ...base, bottom: "6%", left: "6%", transform: "rotate(18deg)" };
      case "bottom-right":
        return { ...base, bottom: "6%", right: "10%", transform: "rotate(-18deg)" };
      default:
        return base;
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[520px]" // match your hero height
      style={{ perspectiveOrigin: "50% 45%" }}
    >
      {/* Underlying content block (your actual hero content should be behind this overlay) */}
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(6,120,111,0.95), rgba(10,25,40,0.95))",
        }}
      />

      {/* Timer wrapper — place your timer component inside this div. It will sit middle-right. */}
      <div
        className="timer-wrap absolute top-1/2 right-16 transform -translate-y-1/2"
        style={{ width: 420, maxWidth: "38%", zIndex: 40 }}
      >
        <Countdown targetDate="2025-11-23T18:00:00+05:30" />
      </div>

      {/* Strips overlay with hazard pattern + text mask */}
      <div className="absolute inset-0 pointer-events-none">
        {STRIPS.map((s, idx) => {
          const maskId = `hazard-mask-${idx}`;
          const patternId = `hazard-pattern-${idx}`;

          return (
            <div key={idx} className="strip" style={getCornerStyle(s.corner)} aria-hidden>
              <svg
                viewBox="0 0 1000 200"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "100%", height: "100%", display: "block", borderRadius: 10 }}
              >
                <defs>
                  {/* diagonal yellow/black repeating stripe pattern */}
                  <pattern
                    id={patternId}
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                    patternTransform="rotate(-20)"
                  >
                    <rect x="0" y="0" width="40" height="40" fill="#FFD400" />
                    <rect x="0" y="0" width="20" height="40" fill="#111827" />
                  </pattern>

                  {/* mask: white base (visible), black text (cut-out) */}
                  <mask id={maskId} maskUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="1000" height="200" fill="white" rx="12" />
                    <text
                      x="50%"
                      y="62%"
                      textAnchor="middle"
                      fontFamily="Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial"
                      fontWeight="700"
                      fontSize="28"          // smaller text as requested
                      fill="black"
                      style={{ letterSpacing: "5px" }}
                    >
                      {s.text}
                    </text>
                  </mask>
                </defs>

                {/* rect filled with hazard pattern, masked by text to create holes */}
                <g>
                  <rect
                    x="0"
                    y="0"
                    width="1000"
                    height="200"
                    rx="12"
                    fill={`url(#${patternId})`}
                    mask={`url(#${maskId})`}
                  />
                  {/* subtle overlay for depth */}
                  <rect x="8" y="8" width="984" height="184" rx="10" fill="rgba(0,0,0,0.06)" />
                </g>
              </svg>
            </div>
          );
        })}
      </div>
    </div>
  );
}
