import React, { useEffect, useRef, useLayoutEffect } from 'react'
import '../Components/home.css'
import space from '../videos/space.mp4'
import purple from '../videos/purple.mp4'
// import { gsap } from 'gsap/gsap-core'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'


const HomePage = () => {
  const titleRef = useRef()
  const dateRef = useRef()
  const scrollerRef = useRef()

  function breakText(selector, spacing) {
    var elements = document.querySelectorAll(selector);

    elements.forEach(h1 => {
      var h1Text = h1.textContent;
      var splitText = h1Text.split(spacing);
      var clutter = "";

      splitText.forEach(element => {
        clutter += `<span>${element}</span>`;
      });

      h1.innerHTML = clutter;
    });
  }

  useEffect(() => {
    breakText(".title-main h1", ""); // note: target h3 directly

    // gsap.from(".title-main h1 span", {
    //   y:"-100%",
    //   delay:0,
    //   opacity: 0,
    //   stagger: 0.1,
    //   duration: 1
    // })

    gsap.to('.title-main h1 span', {
      y: "-100%",
      opacity: 0,
      stagger: 0.02,
      // duration:1,
      // fontSize:"3vw",
      scrollTrigger: {
        // scroller: scrollerRef.current,
        trigger: titleRef.current,
        // markers:true,
        start: "top 30%",
        end: "bottom 30%",
        scrub: 2,
      }
    })
  }, []);


  return (
    <>
      <div ref={scrollerRef} id='homepage' className="homepage">
        <video autoPlay muted loop src={space}></video>
        <div className="home-title">
          <div ref={dateRef} className="title-date"><h3><i>6-7 Nov, 2025</i></h3></div>
          <div ref={titleRef} className="title-main"><h1>COSMOHACKS'25</h1></div>
        </div>
      </div>
    </>
  )
}

export default HomePage
