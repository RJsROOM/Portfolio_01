import React from 'react'
import './app.scss'
import Taskbar from './components/Taskbar'
import Nav from './components/Nav'

const App = () => {
  return (
    <main>
      <Nav />
      <Taskbar />
    </main>
  )
}

export default App