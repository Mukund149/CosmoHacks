import React, { useEffect, useLayoutEffect, useRef } from 'react'
import '../Components/about.css'
import { gsap } from 'gsap/gsap-core'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)

const About = ({isMobile}) => {

    const aboutRef = useRef()

    function breakText(selector, spacing) {
        var elements = document.querySelectorAll(selector);

        elements.forEach(h1 => {
            var h1Text = h1.textContent;
            var splitText = h1Text.split(spacing);
            var clutter = "";

            splitText.forEach(element => {
                clutter += `<h3 className='fading-word'><span className='fading-text'>${element}</span></h3> `;
            });

            h1.innerHTML = clutter;
        });
    }

    useLayoutEffect(() => {
        breakText(".about-para .para", " "); // note: target h3 directly
    }, [])

    useGSAP(() => {
        var tl = gsap.timeline({
            defaults: { duration: isMobile? 0.5:1 },
            scrollTrigger: {
                trigger: '.about',
                scroller: 'body',
                scrub: 0.1,
                // markers: true,
                start: 'top 0',
                end: '+=300%',
                pin: true,
                pinType: "fixed"
            }
        })

        tl.to(".about-para .para h3", {
            opacity: 1,
            stagger: 0.07
        })
        tl.to(".about-para .para h3", {
            delay: 0.7,
            backgroundColor: "black",
            stagger: 0.07
        }, '<')
        tl.to(".about-para .para h3 span", {
            opacity: 1,
            stagger: 0.07
        }, '<')
        tl.to(".prize-pool", {
            y: isMobile? '-100vh': '-100vh',
            duration: isMobile? 1.5:3
        })

        let afterTimeline = gsap.timeline();
        ScrollTrigger.create({
            animation: afterTimeline,
            trigger: '.about',
            start: 'bottom 99%',
            end: 'bottom 50%',
            scrub: 0.1,
            pin: false
        })

        afterTimeline.to(".about-para .para h3", {
            backgroundColor: '#313131',
            stagger: 0.07
        })
        afterTimeline.to(".about-para .para h3 span", {
            opacity: 0,
            stagger: 0.07
        }, '<')

    }, [])

    return (
        <>

            <div ref={aboutRef} className="about">
                <div className="prize-pool">
                    <h1>100000+ Prize Pool</h1>
                </div>
                <div className="about-para">
                    <div className="para para1">
                        <b><i>CosmoHacks 2025</i></b> is a national weekend-long hackathon hosted at Guru Nanak Dev University, Amritsar, on November 6–7, 2025. Students from across India will collaborate to design and build innovative tech projects through two days of creativity, coding, and problem-solving.
                    </div>
                    <div className="para para2">
                        Alongside the main hackathon, participants can enjoy <b><i>sponsor-led workshops, mentorship sessions, and fun mini-events</i></b> — making CosmoHacks 2025 an unforgettable experience of learning, innovation, and community.
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
