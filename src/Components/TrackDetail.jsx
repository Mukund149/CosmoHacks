import React from 'react'
import './tracks.css'


export default function TrackDetail({ track, onClose }) {
  if (!track) return null

  return (
    <div className='track-detail-main'>
      <div className='track-bg' style={{backgroundImage: `url(${track.image})`,}}>
        <p className='track-desc'>{track.description}</p>
      </div>
      <h2 className='track-text'>{track.text}</h2>
      <button onClick={onClose}>
        Back
      </button>
    </div>
  )
}