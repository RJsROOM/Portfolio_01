import React from 'react'
import './app.scss'
import Taskbar from './components/Taskbar'
import Nav from './components/Nav'
import MacWindows from './components/windows/MacWindows'
import Github from './components/Github'

const App = () => {
  return (
    <main>
      <Nav />
      <Taskbar />

      <Github />
    </main>
  )
}

export default App