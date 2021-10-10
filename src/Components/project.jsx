import React from 'react';
import GithubLogo from '../images/link_logo/github_link.svg';
import AppLink from '../images/link_logo/external_link.svg';

import "./project.css";

const Project = ({ project}) => {
  return (
    <li className="project__StyledProject project__Child">
      <div className="project__StyledContent">
        <div className="project__StyledOverline">
          <p>Featured project</p>
          <div>
            <h5 className="project__StyledTitle">
              <a href={project.appURL} target="_blank" rel="noreferrer">{project.name}</a>
            </h5>
          </div>
          <div className="project__StyledDescription">
            <p>
              {project.description}
            </p>
          </div>
          <ul>
            {project.tools.map((tool, index )=> {
              return (
              <li key={index}>
                {tool}
              </li>
              )
            })}
          </ul>
          <div className="project_ListLink">
            <a href={project.githubURL} target="_blank" rel="noreferrer"  className="project__link">
              <img src={GithubLogo} alt="github logo" />
            </a>
            <a href={project.appURL} target="_blank" rel="noreferrer" className="project__link">
              <img src={AppLink} alt="path logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="project__StyledImg">
        <a href={project.appURL} target="_blank" rel="noreferrer">
          <img src={project.imgURL} alt="App" />
        </a>
      </div>
    </li>
  )
}

export default Project;
