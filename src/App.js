import React from 'react'
import './App.css'
import { Header, Home, SideBar } from './components'

const App = () => {
  return (
    <div className="App">
      <div className="outer-container">
        <Header />
        <div className="inner-container">
          <SideBar />
          <Home />
        </div>
      </div>
    </div>
  )
}

export default App
