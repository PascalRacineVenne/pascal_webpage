import React from 'react';
import "./navbar.css";

function NavRight() {
  return(
    <div className="nav--StyledLinks">
      <ol>
        <li>
          <a href="/#about">About</a>
        </li>
        <li>
          <a href="/#skills">Skills</a>
        </li>
        <li>
          <a href="/#projects">Projects</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ol>
      <div className="btn">
        <a className="resume-btn" href="../images/resume_PascalRacineVenne.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </div>
  );
}

export default NavRight;
