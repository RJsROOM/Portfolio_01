import React from 'react'
import {Rnd} from 'react-rnd'
import './window.scss'

const MacWindows = () => {
  return (
    <Rnd>
        <div className="window">
            <div className="nav">
                <div className="dots">
                    <div className="dot red"></div>
                    <div className="dot yellow"></div>
                    <div className="dot green"></div>
                </div>

                <div className="title">
                    <p>rjsroom - zsh</p>
                </div>
            </div>
            <div className="main-content"></div>
        </div>
    </Rnd>
  )
}

export default MacWindows