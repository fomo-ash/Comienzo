import React, { useState } from "react";
import NavBar from "./components/navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HighlightsGrid from "./components/HighlightsGrid";
import Footer from "./components/Footer";
import EntryAnimation from "./components/intro";
import Menu from "./components/menu";

export default function App() {
  const [showEntry, setShowEntry] = useState(true);

  return (
    <div className="min-h-screen w-full  bg-gradient-to-br from-[#0F766E] via-[#0b5e59] to-[#073f3c] font-sans text-gray-800 overflow-hidden relative">
      {/* Entry animation overlay */}
      {showEntry && (
        <div className="absolute inset-0 z-50 bg-gradient-to-br from-[#0F766E] via-[#0b5e59] to-[#073f3c] ">
          <EntryAnimation onFinish={() => setShowEntry(false)} />
        </div>
      )}

      {/* Main content */}
      {!showEntry && (
        <>
          <NavBar />
          <Hero />
          <div className="max-w-screen-2xl mx-auto px-8 lg:px-16 ">
            
            <HighlightsGrid/>
            <Menu/>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

