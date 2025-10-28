import React, { useEffect, useRef } from 'react'
import '../Components/speaker.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'


const SpeakerCard = ({image, name, occupation, insta}) => {

    const profileRef = useRef()

        const animationProfile = ()=>{
            gsap.to(profileRef.current, {
                scale:1.2,
                // y:-200,
                duration:0.5
            })
        }
        const revertAnimationProfile = ()=>{
            gsap.to(profileRef.current, {
                scale:1,
                duration:0.5
            })
        }

    return (
        <div className="speaker-div">
            <div ref={profileRef} className="profile"><img src={image} alt="" /></div>
            <div className="job">
                <div className="speaker-name">
                    <h1>{name}</h1>
                </div>
                <div className="occupation">
                    <h2>{occupation}</h2>
                </div>
                <div onMouseEnter={()=>animationProfile()} onMouseLeave={()=>revertAnimationProfile()} className="touch">
                    <a target='_' href={insta}>Get in touch</a>
                </div>
                <div className="about-speaker"></div>
            </div>
        </div>
    )
}

export default SpeakerCard
