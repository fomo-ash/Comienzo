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
    <div className="min-h-screen w-full bg-[#9ccfcf] font-sans text-gray-800 overflow-hidden relative">
      {/* Entry animation overlay */}
      {showEntry && (
        <div className="absolute inset-0 z-50 bg-[#9ccfcf]">
          <EntryAnimation onFinish={() => setShowEntry(false)} />
        </div>
      )}

      {/* Main content */}
      {!showEntry && (
        <>
          <NavBar />
          <Hero />
          <div className="max-w-screen-2xl mx-auto px-8 lg:px-16">
            <Features />
            <HighlightsGrid/>
            <Menu/>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

