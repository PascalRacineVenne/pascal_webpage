import React from 'react';
import './experience.css';

import dataExperience from '../data/experience.json';

const Experience = () => {
  return (
    <section id='experience' className='experience__StyledExperience'>
      <h5 className='numbered-heading'>Experience</h5>
      <ul className='inner_experience'>
        {dataExperience.map((job) => {
          return (
            <li className='experience__StyledJob' key={job.id}>
              <h3>
                {job.company} <span className='experience__dates'>· {job.dates}</span>
              </h3>
              <p>{job.description}</p>
            </li>
          );
        })}
      </ul>
      <a
        href='https://www.linkedin.com/in/pascal-racine-venne'
        className='experience__more'
        target='_blank'
        rel='noopener noreferrer'
      >
        More on LinkedIn →
      </a>
    </section>
  );
};

export default Experience;
