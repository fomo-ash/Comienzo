import { useState } from "react";
import EntryAnimation from "./components/intro";
import Hero from "./components/Hero";
import MusicPlayer from "./components/music";

export default function App() {
  const [showEntry, setShowEntry] = useState(true);

  return (
    <div className="relative min-h-screen overflow-hidden">
      
      
      {showEntry && (
        <EntryAnimation onFinish={() => setShowEntry(false)} />
      )}

     
      {!showEntry && (
        <>
          <Hero />
          <MusicPlayer/>    
        </>
      )}
    </div>
  );
}
