import React, { useState } from 'react'
import { Header, Home, SideBar } from './components'
import HamMenu from './components/HamMenu'

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
          <HamMenu toggleDrawer={toggleDrawer} />
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
