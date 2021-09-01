import React from 'react';
import Project from './project';
// import Iframe from './iframe';
import "./projects_list.css";

import dataProjects from '../data/projects.json';

const ProjectsList= () => {
  return (
    <section id="projects" className="projects__StyledProjects">
      <h5 className="numbered-heading">Past and current Projects</h5>
      <p className="projects__StyledPresentation">
        Recently completed Le Wagon's full-stack coding bootcamp
        and looking forward to applying this new knowledge.
        Seeking to join a team as a front-end web developer
        to deepen and share knowledge of these languages by connecting
        my synthesis and teaching skills to this new career.
      </p>
      <ul className="inner_projects">
        {dataProjects.map(project => {
          return(
            <Project project={project} key={project.id} />
          )
        })
        }
      </ul>
      {/*<Iframe />*/}
    </section>
  )
}

export default ProjectsList;
