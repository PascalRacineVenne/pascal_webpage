import React from 'react';
// import ProjectTools from './project_tools'
import GithubLogo from '../images/web_logo/12-github_5050.svg';

import "./project.css";

function Project({ project }) {
  const styledLink = {
    textDecoration: "none",
    color: "var(--primary_light_green)",
    fontFamily: "var(--body-font)"
  }

  return (
    <li className="project__StyledProject">
      <div className="project__StyledContent">
        <div className="project__StyledOverline">
          <p>Projets récents</p>
          <div>
            <h5 className="project__StyledTitle">
              <a href={project.appURL} style={styledLink} target="_blank" rel="noreferrer" >{project.name}</a>
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
            <a href={project.githubURL} style={styledLink} target="_blank" rel="noreferrer"  className="project__link">
              <img src={GithubLogo} alt="github logo" />
            </a>
            <a href={project.appURL} style={styledLink} target="_blank" rel="noreferrer" className="project__link">
              lien app
            </a>
          </div>
        </div>
      </div>
      <div className="project__StyledImg">
        <a href={project.appURL} style={styledLink} target="_blank" rel="noreferrer">
          <img src={project.imgURL} alt="un img/lien de l'app" />
        </a>
      </div>
    </li>
  )
}

export default Project;
