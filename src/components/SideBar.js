import React from 'react'
import {
  MdHomeFilled,
  MdLocalPlay,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
} from 'react-icons/md'
import { SiYoutubemusic } from 'react-icons/si'
import { LiaDownloadSolid } from 'react-icons/lia'

const SideBar = () => {
  const list = [
    { name: 'Home', icon: <MdHomeFilled size="1.5em" /> },
    { name: 'Shorts', icon: <MdLocalPlay size="1.5em" /> },
    { name: 'Subscriptions', icon: <MdOutlineSubscriptions size="1.5em" /> },
    { name: 'YouTube Music', icon: <SiYoutubemusic size="1.5em" /> },
    { name: 'Library', icon: <MdOutlineVideoLibrary size="1.5em" /> },
    { name: 'Downloads', icon: <LiaDownloadSolid size="1.5em" /> },
  ]
  return (
    <div
      className="sidebar flex-center"
      style={{ justifyContent: 'flex-start' }}
    >
      {list.map((item) => (
        <div
          className="flex-center icon"
          style={{
            flexDirection: 'column',
            padding: '16px 0 14px',
            height: '74px',
            width: '100%',
            borderRadius: '10px',
          }}
          key={item.name}
        >
          <div>{item.icon}</div>
          <span
            style={{
              fontSize: '10px',
              display: 'block',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              fontWeight: 400,
              lineHeight: '1.4rem',
            }}
          >
            {item.name}
          </span>
        </div>
      ))}
    </div>
  )
}

export default SideBar
