import React from "react";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#000000] via-[#0A0A0A] to-[#000000] overflow-hidden">
      {/* ✨ Floating gold particles */}
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-[2px] h-[2px] bg-[#FFD700]/40 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${6 + Math.random() * 8}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}

      {/* 🔆 Soft rotating golden glow */}
      <div className="absolute w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(255,215,0,0.1)_0%,transparent_70%)] blur-3xl animate-spin-slow top-1/3 left-1/3"></div>
    </div>
  );
}
