import { useState } from "react";
import Intro from "./components/intro.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/navbar.jsx";
import MusicPlayer from "./components/music.jsx";


export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
    

      <Intro show={showIntro} onFinish={() => setShowIntro(false)} />

      {!showIntro && (
        <>
          <Navbar />
          <Hero />
          <MusicPlayer/>
        </>
      )}
    </div>
  );
}
