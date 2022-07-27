import React from 'react';
import Project from './project';
import dataProjects from '../data/projects.json';
import './projects_list.css';

const ProjectsList = () => {
  return (
    <section id='projects' className='projects__StyledProjects'>
      <h5 className='numbered-heading'>Past and current Projects</h5>
      <p className='projects__StyledPresentation'>
        Since completing{' '}
        <a
          href='https://www.lewagon.com/'
          className='link_wagon'
          alt='Le Wagon'
          target='_blank'
          rel='noreferrer'
        >
          Le Wagon
        </a>
        's full stack coding bootcamp, I have had the privilege of joining their
        team as a teacher and workshop instructor for both the French and
        English programs. Today, I'm looking to join a team as a full stack web
        developer to deepen and share the knowledge of these languages. Putting
        these concepts into practice is extremely motivating.
      </p>
      <ul className='inner_projects'>
        {dataProjects.map((project) => {
          return <Project project={project} key={project.id} />;
        })}
      </ul>
    </section>
  );
};

export default ProjectsList;
