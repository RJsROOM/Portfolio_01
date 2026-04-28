import React, { useEffect, useState } from 'react'
import './app.scss'
import Taskbar from './components/Taskbar'
import Nav from './components/Nav'
import MacWindows from './components/windows/MacWindows'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'

const backgroundSlides = [
  '/Rakshit 1.jpg',
  '/Rakshit 2.jpeg',
  '/Rakshit 3.jpeg',
  '/Rakshit 4.jpeg',
  '/Rakshit 5.jpeg',
]

const App = () => {

  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  })
  const [activeBackground, setActiveBackground] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveBackground((current) => (current + 1) % backgroundSlides.length)
    }, 7000)

    return () => window.clearInterval(intervalId)
  }, [])


  return (
    <main>
      <div className="app-background" aria-hidden="true">
        {backgroundSlides.map((slide, index) => (
          <div
            key={slide}
            className={`background-slide${index === activeBackground ? ' is-active' : ''}`}
          >
            <div
              className="background-slide-fill"
              style={{ backgroundImage: `url("${slide}")` }}
            />
            <div className="background-slide-image">
              <img className="background-slide-photo" src={slide} alt="" />
            </div>
          </div>
        ))}
      </div>

      <div className="app-shell">
        <Nav />
        <Taskbar windowsState={windowsState} setWindowsState={setWindowsState} />
        
        {windowsState.github && <Github 
        windowName='github' 
        setWindowsState={setWindowsState} />}

        {windowsState.note && <Note 
        windowName='note' 
        setWindowsState={setWindowsState} />}

        {windowsState.resume && <Resume 
        windowName='resume' 
        setWindowsState={setWindowsState} />}

        {windowsState.spotify && <Spotify 
        windowName='spotify' 
        setWindowsState={setWindowsState} />}

        {windowsState.cli && <Cli 
        windowName='cli' 
        setWindowsState={setWindowsState} />}
      </div>
    </main>
  )
}

export default App
