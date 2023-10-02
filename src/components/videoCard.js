import React, { useEffect, useState } from 'react'
import image from './channels4_profile.jpg'
import { AiFillCheckCircle } from 'react-icons/ai'

const VideoCard = ({ data }) => {
  return (
    <div className="video-card">
      <div className="thumbnail">
        <a className="link" href={`https://www.youtube.com/video/${data.id}`}>
          <img
            src={data.thumbnail}
            alt="image"
            style={{
              borderRadius: '10px 10px 10px 10px',
              // maxWidth: '100%',
              // height: 'auto',
              // maxHeight: '100%',
              width: '100%',
              height: '100%',
              display: 'inline-block',
              objectFit: 'cover',
            }}
          />
        </a>
      </div>
      <div className="details">
        <div
          style={{
            width: '50px',
            height: '50px',
            margin: '12px 12px 0 0',
            flexShrink: 0,
          }}
        >
          <a
            className="link"
            href={`https://www.youtube.com/channel/${data.channelId}`}
          >
            <img
              src={image}
              alt="channel"
              style={{ width: '100%', borderRadius: '25px' }}
            />
          </a>
        </div>
        <div className="info">
          <a className="link" href={`https://www.youtube.com/video/${data.id}`}>
            <h3>{data.title}</h3>
          </a>
          <div style={{ color: '#606060' }}>
            <a
              className="link"
              href={`https://www.youtube.com/channel/${data.channelId}`}
            >
              <div style={{ display: 'flex', gap: '2px', color: '#606060' }}>
                <div>
                  <p>{data.channelTitle}</p>
                </div>
                <div>
                  <AiFillCheckCircle />
                </div>
              </div>
            </a>
            <p>{data.publishedAt}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoCard
