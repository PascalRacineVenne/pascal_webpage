import React from 'react';

import "./project.css";

function Project() {
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
              <a href="" style={styledLink}>Le nom du Projet</a>
            </h5>
          </div>
          <div className="project__StyledDescription">
            <p>Une magnifique description de tout ce qui a été faitUne magnifique description de tout ce qui a été faitUne magnifique description de tout ce qui a été faitUne magnifique description de tout ce qui a été fait</p>
          </div>
          <ul>
            <li>HTML</li>
            <li>React</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <div>
            <a href="" style={styledLink}></a>
            <a href="" style={styledLink}>lien app</a>
          </div>
        </div>
      </div>
      <div className="project__StyledImg">
        <a href="" style={styledLink}>
          <img src="" alt="un img/lien de l'app" />
        </a>
      </div>
    </li>
  )
}

export default Project;