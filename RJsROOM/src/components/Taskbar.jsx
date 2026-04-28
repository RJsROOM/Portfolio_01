import React from 'react'
import './Taskbar.scss'

const Taskbar = ({ windowsState, setWindowsState }) => {
  const taskbarItems = [
    {
      id: 'github',
      className: 'github',
      label: 'GitHub',
      icon: '/taskbar-icons/github.svg',
      alt: 'GitHub icon',
      onClick: () => {
        setWindowsState((state) => ({ ...state, github: true }))
      },
      isActive: windowsState?.github,
    },
    {
      id: 'note',
      className: 'note',
      label: 'Notes',
      icon: '/taskbar-icons/note.svg',
      alt: 'Notes icon',
      onClick: () => {
        setWindowsState((state) => ({ ...state, note: true }))
      },
      isActive: windowsState?.note,
    },
    {
      id: 'resume',
      className: 'pdf',
      label: 'Resume',
      icon: '/taskbar-icons/pdf.svg',
      alt: 'Resume icon',
      onClick: () => {
        setWindowsState((state) => ({ ...state, resume: true }))
      },
      isActive: windowsState?.resume,
    },
    {
      id: 'calendar',
      className: 'calender',
      label: 'Calendar',
      icon: '/taskbar-icons/calender.svg',
      alt: 'Calendar icon',
      onClick: () => window.open('https://calendar.google.com', '_blank'),
    },
    {
      id: 'spotify',
      className: 'spotify',
      label: 'Spotify',
      icon: '/taskbar-icons/spotify.svg',
      alt: 'Spotify icon',
      onClick: () => {
        setWindowsState((state) => ({ ...state, spotify: true }))
      },
      isActive: windowsState?.spotify,
    },
    {
      id: 'mail',
      className: 'mail',
      label: 'Mail',
      icon: '/taskbar-icons/mail.svg',
      alt: 'Mail icon',
      onClick: () => window.open('mailto:rakshitjha05@gmail.com', '_blank'),
    },
    {
      id: 'linkedin',
      className: 'link',
      label: 'LinkedIn',
      icon: '/taskbar-icons/link.svg',
      alt: 'LinkedIn icon',
      onClick: () => window.open('https://www.linkedin.com/in/rakshit-jha-614412204/', '_blank'),
    },
    {
      id: 'cli',
      className: 'cli',
      label: 'Terminal',
      icon: '/taskbar-icons/cli.svg',
      alt: 'Terminal icon',
      onClick: () => {
        setWindowsState((state) => ({ ...state, cli: true }))
      },
      isActive: windowsState?.cli,
    },
  ]

  return (
    <footer className='Taskbar'>
        <div className="dock-shine" aria-hidden="true"></div>
        {taskbarItems.map((item) => (
          <div
            key={item.id}
            onClick={item.onClick}
            className={`icon ${item.className}${item.isActive ? ' is-active' : ''}`}
            title={item.label}
          >
            <span className="icon-glow" aria-hidden="true"></span>
            <img src={item.icon} alt={item.alt} />
            <span className="icon-label">{item.label}</span>
            {item.isActive && <span className="icon-indicator" aria-hidden="true"></span>}
          </div>
        ))}
    </footer>
  )
}

export default Taskbar
