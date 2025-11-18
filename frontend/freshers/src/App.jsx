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

// IMPORT ARCHIVE IMAGES PROPERLY
import img1 from "./assets/2.jpeg";
import img2 from "./assets/1.jpeg";
import img3 from "./assets/3.jpeg";
import img4 from "./assets/something1.jpg";
import img5 from "./assets/_DSC8026.jpg";
import img6 from "./assets/something3.jpg";



export default function App() {
  const [showEntry, setShowEntry] = useState(true);

  // ARCHIVE PHOTOS LIST (NOW VALID)
  const archivePhotos = [
    { src: img1, caption: "The beginning ✦" },
    { src: img2, caption: "Golden night memories" },
    { src: img3, caption: "Laughs we won't forget" },
    { src: img4, caption: "Captured joy ✦" },
    { src: img5, caption: "Moments frozen in time" },
    { src: img6, caption: "Batch memories ✦" },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0F766E] via-[#0b5e59] to-[#073f3c] relative">
      
      {showEntry && (
        <div className="absolute inset-0 z-50 bg-gradient-to-br from-[#0F766E] via-[#0b5e59] to-[#073f3c]">
          <EntryAnimation onFinish={() => setShowEntry(false)} />
        </div>
      )}

      {!showEntry && (
        <>
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
        </>
      )}
    </div>
  );
}
