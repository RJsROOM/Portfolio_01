import React from 'react'
import './app.scss'
import Taskbar from './components/Taskbar'
import Nav from './components/Nav'
import MacWindows from './components/windows/MacWindows'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'

const App = () => {
  return (
    <main>
      <Nav />
      <Taskbar />

      <Github />
      <Note />
      <Resume />
      <Spotify />
    </main>
  )
}

export default App