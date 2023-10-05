import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaYoutube } from 'react-icons/fa'

const HamMenu = ({ toggleDrawer }) => {
  return (
    <div
      className="flex-center"
      style={{
        height: '40px',
      }}
    >
      <div
        className="flex-center"
        style={{ padding: '0 8px 0 8px', cursor: 'pointer' }}
        onClick={() => toggleDrawer()}
      >
        <RxHamburgerMenu size="1.5em" />
      </div>
      <a href="https://www.youtube.com/" className="flex-center">
        <div
          className="flex-center"
          style={{
            marginLeft: '1em',
          }}
        >
          <FaYoutube size="30px" color="red" />
        </div>
        <p style={{ display: 'block', fontWeight: 'bolder', fontSize: '20px' }}>
          Premium
        </p>
        <sup style={{ fontSize: '0.5em' }}>IN</sup>
      </a>
    </div>
  )
}

export default HamMenu
