import Intro from "./components/intro.jsx";
import { useState } from "react";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/navbar.jsx";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <Intro show={showIntro} onFinish={() => setShowIntro(false)} />

      {!showIntro && (
        <>
          <Hero/>
          <Navbar/>

        </>
      )}
    </>
  );
}
