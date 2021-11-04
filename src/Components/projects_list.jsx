import React from 'react';
import Project from './project';
import dataProjects from '../data/projects.json';
// import Iframe from './iframe';
import "./projects_list.css";


const ProjectsList= () => {
  return (
    <section id="projects" className="projects__StyledProjects">
      <h5 className="numbered-heading">Past and current Projects</h5>
      <p className="projects__StyledPresentation">
        I've recently completed <a href="https://www.lewagon.com/" className="link_wagon" alt="Le Wagon" target="_blank" rel="noreferrer">Le Wagon</a>'s full-stack coding bootcamp
        and looking forward to applying this new knowledge.
        Since then, I have had the privilege of joining the Wagon team as an assistant teacher and workshop instructor.
        These days, I'm seeking to join a team as a full stack web developer
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
