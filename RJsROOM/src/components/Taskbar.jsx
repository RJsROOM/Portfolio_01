import React from 'react'
import './Taskbar.scss'


const Taskbar = () => {
  return (
    <footer className='Taskbar'>
        <div className="icon github">
            <img src="/taskbar-icons/github.svg" alt="" />
        </div>
        <div className="icon note">
            <img src="/taskbar-icons/note.svg" alt="" />
        </div>
        <div className="icon pdf">
            <img src="/taskbar-icons/pdf.svg" alt="" />
        </div>
        <div className="icon calender">
            <img src="/taskbar-icons/calender.svg" alt="" />
        </div>
        <div className="icon spotify">
            <img src="/taskbar-icons/spotify.svg" alt="" />
        </div>
        <div className="icon mail">
            <img src="/taskbar-icons/mail.svg" alt="" />
        </div>
        <div className="icon link">
            <img src="/taskbar-icons/link.svg" alt="" />
        </div>
        <div className="icon cli">
            <img src="/taskbar-icons/cli.svg" alt="" />
        </div>
    </footer>
  )
}

export default Taskbar