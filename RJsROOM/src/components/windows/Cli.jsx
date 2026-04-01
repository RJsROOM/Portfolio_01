import React, { useState } from 'react'
import MacWindows from './MacWindows'
import Terminal from 'react-console-emulator'
import './cli.scss'

const Cli = ({windowName, setWindowsState}) => {
  const [termKey, setTermKey] = useState(0)

  const commands = {
    clear: {
      description: 'Clear the terminal',
      usage: 'clear',
      fn: () => {
        setTimeout(() => setTermKey(prev => prev + 1), 50)
        return ''
      }
    },
    about: {
      description: 'Learn about Rakshit',
      usage: 'about',
      fn: () => `Hi! I'm Rakshit Jha, a CS student from Roorkee passionate about full-stack & backend development. 🚀`
    },
    skills: {
      description: 'List my tech skills',
      usage: 'skills',
      fn: () => `Languages: JavaScript, Python, Java, SQL\nFrontend:   HTML, CSS, React\nBackend:    Node.js, Express\nDatabases:  MongoDB, MySQL\nTools:      Git, GitHub, VS Code`
    },
    projects: {
      description: 'View my top projects',
      usage: 'projects',
      fn: () =>
        `1. LMS  - Learning Management System\n   🔗 https://github.com/RJsROOM/project-4\n\n2. EMS  - Employee Management System\n   🔗 https://github.com/RJsROOM/Project-3\n\n3. Online Piano\n   🔗 https://github.com/RJsROOM/FRONTEND/tree/main/frontend_proj/PROJ2%20DAY48-online%20piano\n\n4. YT Shorts UI Clone\n   🔗 https://github.com/RJsROOM/FRONTEND/tree/main/frontend_proj/PROJ3%20DAY50-YT%20shorts\n\n5. Card Animations (Part 2)\n   🔗 https://github.com/RJsROOM/FRONTEND/tree/main/frontend_proj/PROJ6%20DAY54-%20Card%20animations(part2)`
    },
    contact: {
      description: 'Get my contact/social links',
      usage: 'contact',
      fn: () => `GitHub:https://github.com/RJsROOM\nLinkedIn:      https://linkedin.com/in/rakshit-jha-614412204\nStackOverflow: https://stackoverflow.com/users/32178366/rakshit-jha\nInstagram:     https://www.instagram.com/_rakshit._.jha_/`
    },
    github: {
      description: 'Open my GitHub profile',
      usage: 'github',
      fn: () => {
        window.open('https://github.com/RJsROOM', '_blank')
        return 'Opening GitHub profile... 🚀'
      }
    },
    whoami: {
      description: 'Who is RJsROOM?',
      usage: 'whoami',
      fn: () => `RJsROOM = Rakshit Jha | CS Student | Full-Stack Developer | Roorkee, India`
    },
    echo: {
      description: 'Echo a string',
      usage: 'echo <string>',
      fn: (...args) => args.join(' ')
    },
  }

  const welcomeMessage = [
    '╔═══════════════════════════════════════════╗',
    '║       Welcome to RJsROOM Portfolio CLI    ║',
    '╚═══════════════════════════════════════════╝',
    '',
    'Available commands:',
    '  about      →  Learn about Rakshit',
    '  skills     →  View tech stack & skills',
    '  projects   →  Browse top projects',
    '  contact    →  Get social & contact links',
    '  github     →  Open GitHub profile in browser',
    '  whoami     →  Who is RJsROOM?',
    '  echo       →  Echo a string',
    '  clear      →  Clear the terminal',
    '',
    'Type any command to get started! 👨‍💻',
  ]

  return (
    <MacWindows windowName={windowName} setWindowsState={setWindowsState}>
      <div className="cli-window">
        <Terminal
          key={termKey}  
          noDefaults         
          commands={commands}
          welcomeMessage={welcomeMessage}
          promptLabel={"RJsROOM:~$"}
          promptLabelStyle={{color: '#0ca50c'}}
        />
      </div>
    </MacWindows>
  )
}

export default Cli