import React from 'react'
import MacWindows from './MacWindows'
import './resume.scss'

const Resume = () => {
  return (
    <MacWindows>
        <div className="resume-window">
            <iframe src="/RAKSHIT_J Resume.pdf" frameborder="0"></iframe>
        </div>
    </MacWindows>
  )
}

export default Resume