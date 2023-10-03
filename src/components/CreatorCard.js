import React from 'react'
import { BsBroadcast } from 'react-icons/bs'
import { AiOutlinePlaySquare } from 'react-icons/ai'

const CreatorCard = ({ isVisible }) => {
  return (
    <div className={`${isVisible ? 'creator-card' : 'hidden'}`}>
      <div
        className="flex-center icon"
        style={{
          height: '40px',
          justifyContent: 'flex-start',
          padding: '8px',
        }}
      >
        <BsBroadcast size="1.5em" />
        <p style={{ marginLeft: '6px' }}>Upload Video</p>
      </div>
      <div
        className="flex-center icon"
        style={{
          height: '40px',
          justifyContent: 'flex-start',
          padding: '8px',
        }}
      >
        <AiOutlinePlaySquare size="1.5em" fontWeight="300" />
        <p style={{ marginLeft: '6px' }}>Go Live</p>
      </div>
    </div>
  )
}

export default CreatorCard
