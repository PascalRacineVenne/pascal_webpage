import React from 'react';
import Project from './project';
import dataProjects from '../data/projects.json';
import './projects_list.css';

const ProjectsList = () => {
  return (
    <section id='projects' className='projects__StyledProjects'>
      <h5 className='numbered-heading'>Past and current Projects</h5>
      <p className='projects__StyledPresentation'>
        Side projects are where I stay curious. I pick technologies that
        inspire me, sketch an idea, and see how far I can take it. We're in an
        era where AI can turn "what if" into "here it is" remarkably quickly,
        and I want to be building in it.
      </p>
      <ul className='inner_projects'>
        {dataProjects.filter((project) => !project.hidden).map((project) => {
          return <Project project={project} key={project.id} />;
        })}
      </ul>
    </section>
  );
};

export default ProjectsList;
