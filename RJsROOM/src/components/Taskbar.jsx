import React from 'react'
import './Taskbar.scss'


const Taskbar = ({ windowsState, setWindowsState }) => {
  return (
    <footer className='Taskbar'>

        <div 
        onClick={()=>{setWindowsState(state=>({...state, github:true}))}}
        className="icon github">
            <img src="/taskbar-icons/github.svg" alt="" />
        </div>
        <div 
        onClick={()=>{setWindowsState(state=>({...state, note:true}))}}
        className="icon note">
            <img src="/taskbar-icons/note.svg" alt="" />
        </div>
        <div 
        onClick={()=>{setWindowsState(state=>({...state, resume:true}))}}
        className="icon pdf">
            <img src="/taskbar-icons/pdf.svg" alt="" />
        </div>
        <div 
        onClick={()=>window.open('https://calendar.google.com','_blank')}
        className="icon calender">
            <img src="/taskbar-icons/calender.svg" alt="" />
        </div>
        <div 
        onClick={()=>{setWindowsState(state=>({...state, spotify:true}))}}
        className="icon spotify">
            <img src="/taskbar-icons/spotify.svg" alt="" />
        </div>
        <div 
        onClick={()=>window.open('mailto:rakshitjha05@gmail.com','_blank')}
        className="icon mail">
            <img src="/taskbar-icons/mail.svg" alt="" />
        </div>
        <div 
        onClick={()=>window.open('https://www.linkedin.com/in/rakshit-jha-614412204/', '_blank')}
        className="icon link">
            <img src="/taskbar-icons/link.svg" alt="" />
        </div>
        <div 
        onClick={()=>{setWindowsState(state=>({...state, cli:true}))}}
        className="icon cli">
            <img src="/taskbar-icons/cli.svg" alt="" />
        </div>

    </footer>
  )
}

export default Taskbar