import React from 'react';
import Project from './project';
import "./projects_list.css";

import dataProjects from '../data/projects.json';

const ProjectsList= () => {
  return (
    <section id="projects" className="projects__StyledProjects">
      <h5 className="numbered-heading">Past and current Projects</h5>
      <ul className="inner_projects">
        {dataProjects.map(project => {
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
