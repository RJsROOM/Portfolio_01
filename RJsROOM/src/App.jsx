import React from 'react'
import './app.scss'
import Taskbar from './components/Taskbar'
import Nav from './components/Nav'
import MacWindows from './components/windows/MacWindows'

const App = () => {
  return (
    <main>
      <Nav />
      <Taskbar />

      <MacWindows />
    </main>
  )
}

export default App