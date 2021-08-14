import React from 'react';
// import ProjectTools from './project_tools'
import GithubLogo from '../images/link_logo/github_link.svg';
import AppLink from '../images/link_logo/external_link.svg';

import "./project.css";

function Project({ project }) {
  return (
    <li className="project__StyledProject project__Child">
      <div className="project__StyledContent">
        <div className="project__StyledOverline">
          <p>Projets récents</p>
          <div>
            <h5 className="project__StyledTitle">
              <a href={project.appURL} target="_blank" rel="noreferrer" >{project.name}</a>
            </h5>
          </div>
          <div className="project__StyledDescription">
            <p>Une magnifique description de tout ce qui a été faitUne magnifique description de tout ce qui a été faitUne magnifique description de tout ce qui a été faitUne magnifique description de tout ce qui a été fait</p>
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
          <div>
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
