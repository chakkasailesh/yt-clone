import React from 'react'

const VideoCard = ({ data }) => {
  return (
    <div className="video-card">
      <div className="thumbnail">
        <img
          src={data.thumbnail}
          alt="image"
          style={{
            borderRadius: '10px 10px 0 0',
            // maxWidth: '100%',
            // height: 'auto',
            // maxHeight: '100%',
            width: '100%',
            height: '100%',
            display: 'inline-block',
            objectFit: 'cover',
          }}
        />
      </div>
      <div className="details">
        <h3>{data.title}</h3>
      </div>
    </div>
  )
}

export default VideoCard
