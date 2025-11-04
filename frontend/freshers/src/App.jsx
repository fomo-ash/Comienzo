import Intro from "./components/intro.jsx";
import { useState } from "react";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <Intro show={showIntro} onFinish={() => setShowIntro(false)} />

      {!showIntro && (
        <>
          {/* your existing Hero, Countdown, etc. */}
        </>
      )}
    </>
  );
}
