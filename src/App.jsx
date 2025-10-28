
import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import About from "./Components/About";
import ReactLenis from "lenis/react";
import Tracks from "./Components/Tracks";
import Speakers from "./Components/Speaker";
import Sponsors from "./Components/Sponsors";
import Register from "./Components/Register";


const App = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const homeRef = useRef()
  const aboutRef = useRef()
  const trackref = useRef()
  const sponsorRef = useRef()
  const speakerRef = useRef()
  const registerRef = useRef()

  return (
    <>
      <ReactLenis
        root
        options={{
          lerp: isMobile? 1.2: 0.5,
          duration: isMobile? 0.2:1.5,
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          smoothTouch: false,
          touchMultiplier: 2
        }}>
        <Navbar homeRef={homeRef} aboutRef={aboutRef} trackRef={trackref} sponsorRef={sponsorRef} registerRef={registerRef} speakerRef={speakerRef} />

        <section ref={homeRef}>
          <HomePage />
        </section>

        <section ref={aboutRef}>
          <About isMobile={isMobile}/>
        </section>

        <section ref={trackref}>
          {<Tracks />}
        </section>

        <section ref={speakerRef}>
          <Speakers isMobile={isMobile} />
        </section>

        <section ref={registerRef}>
          <Register isMobile={isMobile} />
        </section>

        <section ref={sponsorRef} >
          <Sponsors/>
        </section>

      </ReactLenis>
    </>
  );
};

export default App;
