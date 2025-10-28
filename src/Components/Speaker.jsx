import React, { useRef } from 'react'
import '../Components/speaker.css'
import SpeakerCard from './SpeakerCard'
import vanshika from '../img/Vanshika.png'
import zeeshan from '../img/Zeeshan.png'
import naman from '../img/Naman.png'
import switty from '../img/switty.png'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Sponsors from './Sponsors'
gsap.registerPlugin(ScrollTrigger)

const Speaker = ({ isMobile }) => {
  const speakerRef = useRef()

  useGSAP(() => {
    if (isMobile) {
      gsap.to(speakerRef.current, {
        y: '100%',
        // borderRadius:'50%',
        duration: 1,
        scrollTrigger: {
          trigger: '.speaker-main',
          scroller: 'body',
          // markers: true,
          pin: true,
          scrub: 0.1,
          pinType: 'fixed'
        }
      })
    }
    else{

      gsap.to(speakerRef.current, {
        x: '100%',
        // borderRadius:'50%',
        duration: 1,
        scrollTrigger: {
          trigger: '.speaker-main',
          scroller: 'body',
          // markers: true,
          pin: true,
          scrub: 2,
          pinType: 'fixed'
        }
      })
    }

  })

  return (
    <div className='speaker-main'>
      <div className="speaker-container">
        <div ref={speakerRef} className="speaker-title"><h1>SPEAKERS</h1></div>
        <SpeakerCard image={vanshika} name={"Vanshika Pandey"} occupation={"SDE - II"} insta={"https://www.instagram.com/codecrookshanks/"} />
        <SpeakerCard image={zeeshan} name={"Zeeshan Ali Syed"} occupation={"Engineer"} insta={"https://www.instagram.com/escapistfuror/"} />
        <SpeakerCard image={naman} name={"Naman Vidyabhanu"} occupation={"Engineer"} insta={"https://www.instagram.com/hustle.with.naman/"} />
        <SpeakerCard image={switty} name={"Sweety S Khanna"} occupation={"Entrepreneur"} insta={"https://www.instagram.com/sweety.sharma786/"} />
      </div>

    </div>
  )
}

export default Speaker
