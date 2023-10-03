import React, { useState } from 'react'
import { Header, Home, SideBar } from './components'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaYoutube } from 'react-icons/fa'

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev)
  }
  return (
    <div className="App">
      <div className={`app-drawer ${isDrawerOpen ? 'open' : ''}`}>
        <div
          style={{
            height: '56px',
            width: '167.833px',
            marginLeft: '16px',
            marginTop: '8px',
          }}
        >
          <div
            className="flex-center"
            style={{
              height: '40px',
            }}
          >
            <div
              className="flex-center"
              style={{ marginLeft: '8px', cursor: 'pointer' }}
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
              <p
                style={{
                  display: 'block',
                  fontWeight: 'bolder',
                  fontSize: '20px',
                }}
              >
                Premium
              </p>
              <sup style={{ fontSize: '0.5em' }}>IN</sup>
            </a>
          </div>
        </div>
        <div className="drawer"></div>
      </div>
      <div className="outer-container">
        <Header toggleDrawer={toggleDrawer} />
        <div className="inner-container">
          <SideBar />
          <Home />
        </div>
      </div>
      <div className={`overlay ${isDrawerOpen ? 'visible' : ''}`}></div>
    </div>
  )
}

export default App
