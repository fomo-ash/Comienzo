import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WarningBlock({
  message = "WATCH OUT ⚠ WARNING",
  width = "w-80",
  height = "h-40",
  tapeDuration = 3,
  shake = true,
  triggerOnScroll = false
}) {
  const blockRef = useRef(null);
  const tapeRef = useRef(null);

  useEffect(() => {
    const tape = tapeRef.current;
    const block = blockRef.current;

    if (!tape || !block) return;

    // Tape sliding animation (infinite)
    const tapeAnim = gsap.to(tape, {
      xPercent: 100,              // moves tape horizontally
      duration: tapeDuration,
      ease: "none",
      repeat: -1,
    });

    // optional: shake animation for the block
    let shakeAnim;
    if (shake) {
      shakeAnim = gsap.to(block, {
        x: -6,
        duration: 0.06,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        paused: false,
      });
    }

    // If `triggerOnScroll` is true, control playback with ScrollTrigger
    if (triggerOnScroll) {
      ScrollTrigger.create({
        trigger: block,
        start: "top 85%",
        onEnter: () => {
          tapeAnim.play();
          shakeAnim?.play?.();
        },
        onLeaveBack: () => {
          tapeAnim.pause();
          shakeAnim?.pause?.();
        }
      });
      // pause initially so it only runs when in view
      tapeAnim.pause();
      shakeAnim?.pause?.();
    }

    // cleanup
    return () => {
      tapeAnim.kill();
      shakeAnim?.kill();
      ScrollTrigger.getAll().forEach(st => st.kill && st.kill());
    };
  }, [tapeDuration, shake, triggerOnScroll]);

  // duplicate the message several times so the tape content repeats smoothly
  const repeated = Array.from({ length: 6 }, (_, i) => (
    <span key={i} className="warning-tape__text">{message}</span>
  ));

  return (
    <div
      ref={blockRef}
      className={`relative overflow-hidden rounded-lg border-2 border-yellow-400 bg-gray-900 text-white ${width} ${height}`}
      role="region"
      aria-label="warning block"
    >
      {/* content area (centered) */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-4">
          <h3 className="text-lg font-semibold">Danger Zone</h3>
          <p className="mt-2 text-sm opacity-80">Proceed with caution</p>
        </div>
      </div>

      {/* the tape */}
      <div
        ref={tapeRef}
        className="warning-tape absolute -top-12 left-[-100%] z-20"
        aria-hidden="true"
      >
        {repeated}
      </div>
    </div>
  );
}
