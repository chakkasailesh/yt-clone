import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaYoutube } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BiVideoPlus } from 'react-icons/bi'
import { MdMic } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'

const Header = () => {
  return (
    <div className="header">
      <div
        className="flex-center"
        style={{
          height: '40px',
        }}
      >
        <div className="flex-center" style={{ marginLeft: '8px' }}>
          <RxHamburgerMenu size="1.5em" />
        </div>
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
      </div>
      <div style={{ display: 'flex', flex: '0 1 732px', minWidth: 0 }}>
        <div
          style={{
            display: 'flex',
            flex: 1,
            margin: '0 0 0 40px',
            padding: '0 4px',
            flexBasis: '1e-9px',
          }}
        >
          <input
            placeholder="Search"
            style={{
              border: '1px solid #ccc',
              height: '100%',
              width: '90%',
              borderRadius: '20px 0 0 20px',
              padding: '10px',
              fontSize: '1em',
              marginLeft: '10px',
              outline: 'none',
            }}
          />
          <div
            className="flex-center icon"
            style={{
              border: '1px solid #ccc',
              height: '100%',
              width: '10%',
              borderRadius: '0 20px 20px 0',
              backgroundColor: '#f8f8f8',
            }}
          >
            <AiOutlineSearch size="1.5em" />
          </div>
        </div>
        <div
          className="flex-center icon"
          style={{
            marginLeft: '1em',
            backgroundColor: '#f2f2f2',
            width: '40px',
            borderRadius: '20px',
          }}
        >
          <MdMic size="1.5em" />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          height: '40px',
          minWidth: '225px',
          justifyContent: 'flex-end',
          gap: '8px',
        }}
      >
        <div
          className="flex-center icon"
          style={{
            width: '40px',
            borderRadius: '20px',
          }}
        >
          <BiVideoPlus size="1.5em" />
        </div>
        <div
          className="flex-center icon"
          style={{
            width: '40px',
            borderRadius: '20px',
          }}
        >
          <IoMdNotificationsOutline size="1.5em" />
        </div>
        <div
          className="flex-center"
          style={{
            width: '60px',
          }}
        >
          <CgProfile size="2em" />
        </div>
      </div>
    </div>
  )
}

export default Header
