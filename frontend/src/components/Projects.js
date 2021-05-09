import React from 'react'
import Project from '../components/Project'



const Projects = ({project}) => {
    
    return (
        <>
            {project.map((pro,index)=>
            <Project key={index} pro={pro}/>
            )}
        </>
    )
}

export default Projects
