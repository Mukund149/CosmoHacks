import React, { useEffect, useRef, useState } from 'react'
import '../Components/register.css'
import Speaker from './Speaker'
import Sponsors from './Sponsors'
import RegisterCard from './RegisterCard'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { AnimatePresence } from 'motion/react'
gsap.registerPlugin(ScrollTrigger)

const Register = ({ isMobile }) => {
  const [isPlan, setIsPlan] = useState(false)
  const [isTed, setIsTed] = useState(false)
  const hackathonRef = useRef()
  const tedRef = useRef()
  const initialDims = useRef(null)
  const initialDimsTed = useRef(null)
  const triggerRef = useRef()
  const hackCirc = useRef()
  const tedCirc = useRef()



  useEffect(() => {
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
    breakText('.register-title h1 .ready', "")
    breakText('.register-title h1 .to', "")
    breakText('.register-title h1 .start', "")
    breakText('.register-title h1 .your', "")
    breakText('.register-title h1 .journey', "")


    requestAnimationFrame(() => {
      if (!isMobile) {
        gsap.to(".register-title h1 span", {
          y: 0,
          stagger: 0.02,
          duration:0.5,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top 50%",
            end: "top 55%",
            // markers: true,
          },
        });
      }
      if (isMobile) {
        gsap.to(".register-title h1 span", {
          y: 0,
          stagger: 0.02,
          duration:0.5,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top 90%",
            // end: "top 55%",
            // markers: true,
          },
        });
      }
    });
  }, [])


  useEffect(() => {
    if (hackathonRef.current) {
      initialDims.current = {
        width: hackathonRef.current.offsetWidth + 'px',
        height: hackathonRef.current.offsetHeight + 'px'
      }

    }
    if (tedRef.current) {
      initialDimsTed.current = {
        width: tedRef.current.offsetWidth + 'px',
        height: tedRef.current.offsetHeight + 'px'
      }

    }
  }, [])

  const animatePlan = () => {
    var tl = gsap.timeline()
    if (!isPlan) {
      tl.to('.hack-title', {
        opacity: 0,
        duration: 0.5
      })
      tl.to(hackathonRef.current, {
        width: isMobile ? '66vw' : '22vw',
        height: isMobile ? "38vh" : '62vh',
        duration: 0.5,
        onComplete: () => {
          setIsPlan(true)
        }
      })
      tl.to('.hack-title', {
        opacity: 1
      })
    }
    else if (isPlan) {
      setIsPlan(false)
      tl.to('.hack-title', {
        opacity: 0,
        duration: 0.5
      })
      tl.to(hackathonRef.current, {
        delay: 0.5,
        width: initialDims.current.width,
        height: initialDims.current.height,
        duration: 0.8,
      })
      tl.to('.hack-title', {
        opacity: 1
      })
    }
  }
  const animateTed = () => {
    var tl = gsap.timeline()
    if (!isTed) {
      tl.to('.tech-title', {
        opacity: 0,
        duration: 0.5
      })
      tl.to(tedRef.current, {
        width: isMobile ? '66vw' : '22vw',
        height: isMobile ? "38vh" : '62vh',
        duration: 0.5,
        // backgroundColor: '#070707',
        onComplete: () => {
          setIsTed(true)
        }
      })
      tl.to('.tech-title', {
        opacity: 1
      })
    }
    else if (isTed) {
      setIsTed(false)
      tl.to('.tech-title', {
        opacity: 0,
        duration: 0.5
      })
      tl.to(tedRef.current, {
        delay: 0.5,
        width: initialDimsTed.current.width,
        height: initialDimsTed.current.height,
        duration: 0.8,
        backgroundColor:'transparent'
      })
      tl.to('.tech-title', {
        opacity: 1
      })
    }
  }

  const animateCirc=(ref, type)=>{
    if (type == 'enter') {
      gsap.to(ref.current, {
        scale:1,
        duration:0.3,
        ease:'power1.inOut',
        backgroundColor:'white'
      })
    }
    if (type == 'leave') {
      gsap.to(ref.current, {
        scale:0.5,
        duration:0.3,
        ease:'power1.inOut',
        backgroundColor:'transparent'
      })
    }

  }

  return (
    <>
      <div className='register-main'>
        <div className="register-container">
          <div ref={triggerRef} className="register-title">
            <h1><div className="ready">READY</div></h1>
            <h1><div className="to">TO</div> <div className="start">START</div></h1>
            <h1><div className="your">YOUR</div> <div className="journey">JOURNEY</div></h1>
          </div>
          <div className="plans">

            <div ref={hackathonRef} className=" plan hackathon-plan">
              <div onMouseEnter={()=>animateCirc(hackCirc, 'enter')} onMouseLeave={()=>animateCirc(hackCirc, 'leave')} onClick={() => animatePlan()} className="plan-title hack-title">
                <h3> REGISTER FOR HACKATHON </h3>
                <div  ref={hackCirc} className="arrow"></div>
              </div>
              <AnimatePresence>
                {isPlan && <RegisterCard status={"Locked"} prize={350} perks={
                  <>
                    <ul>
                      <li><h3>AR/VR Experience</h3></li>
                      <li><h3>AI Prompt Engineering Workshop</h3></li>
                      <li><h3>Free access to TED-STYLE Tech Talk with Industry Influencers</h3></li>
                      <li><h3>Food Coupons & Activity Access</h3></li>
                      <li><h3>Eligibility for Final Round Selection</h3></li>
                      <li><h3>Access to 1 lakh+ prize pool</h3></li>
                    </ul>
                  </>
                } />}
              </AnimatePresence>
            </div>

            <div className="or"><h3>or</h3></div>

            <div ref={tedRef} className=" plan ted-plan">

              <div onMouseEnter={()=>animateCirc(tedCirc, 'enter')} onMouseLeave={()=>animateCirc(tedCirc, 'leave')} onClick={() => animateTed()} className="plan-title tech-title">
                <h3>REGISTER FOR TECH-TALK</h3>
                <div ref={tedCirc} className="arrow"></div>
              </div>
              <AnimatePresence>
                {isTed && <RegisterCard link={"https://unstop.com/hackathons/cosmohacks25-guru-nanak-dev-university-amritsar-1570711"} status={"pay"} prize={100} perks={
                  <>
                    <ul>
                      <li><h3>Inspiring talks by industry experts & influencers</h3></li>
                      <li><h3>Open for all (no hackathon entry required)</h3></li>
                      <li><h3>Certificate of participation for attendees</h3></li>
                      <li><h3>Access to fun zones & mini activities</h3></li>
                    </ul>
                  </>
                } />}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
