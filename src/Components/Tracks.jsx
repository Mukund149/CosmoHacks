// ...existing code...
import React, { useState } from 'react'
import '../Components/tracks.css'
import FlowingMenu from './FlowingMenu'
import img1 from '../img/belgian.png'
import img2 from '../img/black.jpg'
import TrackDetail from './TrackDetail'

const Tracks = () => {
  const [selectedTrack, setSelectedTrack] = useState(null)

  const tracks = [
    {
      text: 'ASTROTECH',
      image: 'https://images.unsplash.com/photo-1590388143860-6594f1fbc1f4?auto=format&fit=crop&q=80&w=880',
      description: "Step into the universe of innovation! The Astro Technology track is for those passionate about exploring the mysteries of space through technology and creativity. Participants will design solutions that enhance space exploration, satellite communication, astronomical data analysis, and planetary research. From developing AI-powered observation tools to crafting low-cost satellite systems or lunar and interplanetary mission technologies, this track opens doors to building the next era of space-tech breakthroughs. Think cosmic. Build futuristic. Innovate beyond Earth."
    },
  {
    text: 'COMMUNITY BASED',
    image: 'https://images.unsplash.com/photo-1656077217715-bdaeb06bd01f?auto=format&fit=crop&q=80&w=1364',
    description: 'Innovate with purpose! The Community-Based Projects track invites participants to create solutions that positively impact society and local communities.From sustainable initiatives and social awareness campaigns totech-driven solutions for education, healthcare, and environment, this track emphasizes practical innovation for real-world change. Empower communities. Solve problems. Make a difference.'
    },
  {
    text: 'CYBERSECURITY',
    image: 'https://images.unsplash.com/photo-1637984135921-301a7d39e3b7?auto=format&fit=crop&q=80&w=1615',
    description: 'Build the future of secure andtransparent technology.This track invites innovators to create solutions that strengthen digital safety and trust — from threat detection and data protection to blockchain-based authentication, smart contracts, and decentralized applications. Protect systems. Redefinetrust. Secure thefuture.'
    },
  {
    text: 'IOT & ROBOTICS',
    image: 'https://images.unsplash.com/photo-1673586410488-b694d350756e?auto=format&fit=crop&q=80&w=1364',
    description: 'Enter the world where machines meet intelligence. The IoT & Robotics track challenges participants to design systems that seamlessly connect the physical and digital worlds. Build smart devices, autonomous robots, or intelligent sensor networks that solve real-world problems — from automation and precision control to smart cities, healthcare, and industrial systems. Combine creativity, coding, and engineering to shape the next generation of connected intelligence. Automate. Innovate. Elevate.'
    },
  {
    text: 'OPEN INNOVATION',
    image: 'https://images.unsplash.com/photo-1710893161674-f6ad38bc5b7d?auto=format&fit=crop&q=80&w=1632',
    description: 'Breakthe boundaries of creativity! The Open Innovation track encourages participants to think outside the box and develop novel solutions across anydomain.Whether it’s a tech breakthrough, social solution, or futuristic concept, this track celebrates original ideas, experimentation, and disruptive thinking without constraints.Imagine freely. Innovate boldly. Lead the change.'
    },
  ]

return (
  <div className='tracks-main'>
    <div className="track-title"><h1>TRACKS</h1></div>
    <div className="tracks">
      {!selectedTrack && (
        <FlowingMenu items={tracks} onItemClick={setSelectedTrack} />
      )}
      {selectedTrack && (
        <TrackDetail
          track={selectedTrack}
          onClose={() => setSelectedTrack(null)}
        />
      )}
    </div>
  </div>
)
}

export default Tracks
// ...existing code...