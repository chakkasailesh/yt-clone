import React from 'react'
import { FiSettings } from 'react-icons/fi'

const Notifications = ({ isVisible }) => {
  return (
    <div className={`${isVisible ? 'notification-container' : 'hidden'}`}>
      <div className="notification-header">
        <div style={{ flex: 1 }}>
          <h2 style={{ fontWeight: '400' }}>Notifications</h2>
        </div>
        <div className="flex-center">
          <FiSettings size="1.5em" />
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Notifications
