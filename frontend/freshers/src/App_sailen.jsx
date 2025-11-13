// src/App.jsx
import React from "react";
import NavBar from "./components/navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import HighlightsGrid from "./components/HighlightsGrid";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#9ccfcf] font-sans text-gray-800">
      <NavBar />
      <Hero />
      <div className="max-w-screen-2xl mx-auto px-8 lg:px-16">
        <Features />
        <HighlightsGrid />
      </div>
      <Footer />
    </div>
  );
}
