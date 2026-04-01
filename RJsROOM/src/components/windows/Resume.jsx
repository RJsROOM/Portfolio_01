import React from 'react'
import MacWindows from './MacWindows'
import './resume.scss'

const Resume = ({windowName, setWindowsState}) => {
  return (
    <MacWindows windowName={windowName} setWindowsState={setWindowsState}>
        <div className="resume-window">
            <iframe src="/RAKSHIT_J Resume.pdf" frameborder="0"></iframe>
        </div>
    </MacWindows>
  )
}

export default Resume