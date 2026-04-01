import React from 'react'
import githubData from '../../assets/github.json'
import MacWindows from './MacWindows'
import './github.scss'


const GitCard= ({data}={id:1, image:"", title:"", description:"", tags:[], repoLink:"", demoLink:""})=>{
    return <div className="card">
        <img src={data.image} alt="" />
        <h1>{data.title}</h1>
        <p className='description'>{data.description}</p>

        <div className="tags">
            {
                data.tags.map(tag => <p className='tag'>{tag}</p>)
            }
        </div>

        <div className="urls">
            <a href={data.repoLink}>Repository Link</a>
            {data.demoLink && <a href={data.demoLink}>Live demo..</a>}
        </div>

    </div>
}


const Github = ({windowName, setWindowsState}) => {
  return (
    <MacWindows windowName={windowName} setWindowsState={setWindowsState}>
        <div className="cards">
            {githubData.map(project=>{
                return <GitCard key={project.id} data={project} />
            })}
        </div>
    </MacWindows>
  )
}

export default Github