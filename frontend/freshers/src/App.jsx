import React, { useState } from "react";
import NavBar from "./components/navbar";
import Hero from "./components/Hero";
import HighlightsGrid from "./components/HighlightsGrid";
import Menu from "./components/menu";
import Footer from "./components/Footer";
import EntryAnimation from "./components/intro";
import ArchivesGallery from "./components/ArchivesGallery";
import Venue from "./components/venue";
import Background from "./components/Background";

// IMPORT ARCHIVE IMAGES
import img1 from "./assets/2.jpeg";
import img2 from "./assets/1.jpeg";
import img3 from "./assets/3.jpeg";
import img4 from "./assets/something1.jpg";
import img5 from "./assets/_DSC8026.jpg";
import img6 from "./assets/something3.jpg";

// --- NIGHT ATMOSPHERE COMPONENT ---
const NightOverlay = () => (
  <div className="fixed inset-0 z-[40] pointer-events-none overflow-hidden h-full w-full">
    {/* 1. NOISE/FILM GRAIN TEXTURE */}
    <div 
      className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
      style={{ 
        backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
        filter: "contrast(170%) brightness(1000%)" 
      }}
    ></div>
    
    {/* 2. DARK VIGNETTE (Darkens the edges) */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,rgba(0,0,0,0.7)_100%)]"></div>
    
    {/* 3. COLOR TINT (Subtle teal wash to unify) */}
    <div className="absolute inset-0 bg-[#0F766E] mix-blend-color opacity-10"></div>
  </div>
);

export default function App() {
  const [showEntry, setShowEntry] = useState(true);

  // ARCHIVE PHOTOS LIST
  const archivePhotos = [
    { src: img1, caption: "The beginning ✦" },
    { src: img2, caption: "Golden night memories" },
    { src: img3, caption: "Laughs we won't forget" },
    { src: img4, caption: "Captured joy ✦" },
    { src: img5, caption: "Moments frozen in time" },
    { src: img6, caption: "Batch memories ✦" },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#052e2b] via-[#041f1d] to-[#000000] relative text-white overflow-x-hidden">
      
      {/* Render the Night Effect everywhere */}
      <NightOverlay />

      {showEntry && (
        <div className="fixed inset-0 z-[9999]">
          <EntryAnimation onFinish={() => setShowEntry(false)} />
        </div>
      )}

      {!showEntry && (
        <div className="relative z-10">
          <Background />
          <NavBar />
          <Hero />
          <Venue />

          <div className="max-w-screen-2xl mx-auto px-8 lg:px-16">
            <HighlightsGrid />
            <Menu />

            {/* 📘 FROM THE ARCHIVES SECTION */}
            <ArchivesGallery photos={archivePhotos} />
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
}
