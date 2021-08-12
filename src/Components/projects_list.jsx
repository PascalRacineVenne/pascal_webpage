import React, { useState, useEffect } from 'react';
import Project from './project';
import "./projects_list.css";

const ProjectsList= () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch("")
      .then(response => response.json())
      .then(data => setProjects(data))
  }, [])

  return (
    <section className="projects__StyledProjects">
      <h5 className="numbered-heading">Past and current Projects</h5>
      <ul className="inner_projects">
        {projects.map(project => {
          return(
            <Project project={project} key={project.id} />
          )
        })
        }
      </ul>
    </section>
  )
}

export default ProjectsList;
