import React, { useState } from "react";
import NavBar from "./components/navbar";
import Hero from "./components/Hero";
import HighlightsGrid from "./components/HighlightsGrid";
import Menu from "./components/menu";
import Footer from "./components/Footer";
import EntryAnimation from "./components/intro";
import ArchivesGallery from "./components/ArchivesGallery";
import Venue from "./components/venue";

export default function App() {
  const [showEntry, setShowEntry] = useState(true);

  // ARCHIVE PHOTOS LIST
  const archivePhotos = [
    { src: "/src/assets/archives/pic1.jpeg", caption: "The beginning ✦" },
    { src: "/src/assets/archives/pic2.jpeg", caption: "Golden night memories" },
    { src: "/src/assets/archives/pic3.jpeg", caption: "Laughs we won't forget" },
    { src: "/src/assets/archives/pic4.jpeg", caption: "Captured joy ✦" },
    { src: "/src/assets/archives/pic5.jpeg", caption: "Moments frozen in time" },
    { src: "/src/assets/archives/pic6.jpeg", caption: "Batch memories ✦" },
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
          <NavBar />
          <Hero />
          <Venue/>

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
