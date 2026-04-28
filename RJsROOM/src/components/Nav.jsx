import React from 'react'
import './nav.scss'
import DateTime from './DateTime'

const menuItems = ['file', 'Window', 'Terminal']

const Nav = () => {
  return (
    <nav className="top-nav">
        <div className="left">
            <div className="apple-icon">
                <img src="/navbar-icons/apple.svg" alt="Apple logo" />
            </div>

            <div className="nav-items nav-brand">
                <span className="brand-dot" aria-hidden="true"></span>
                <p>RAKSHIT JHA</p>
            </div>

            {menuItems.map((item) => (
                <div key={item} className="nav-items nav-menu-item">
                    <p>{item}</p>
                </div>
            ))}

        </div>
        <div className="right">
            <div className="nav-icon">
                <img src="/navbar-icons/wifi.svg" alt="Wi-Fi status" />
            </div>

            <div className="nav-item nav-clock">
                <DateTime />
            </div>

        </div>
    </nav>
  )
}

export default Nav
