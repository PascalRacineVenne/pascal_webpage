import React from 'react';

function NavRight() {
  return(
    <div className="nav--StyledLinks">
      <ol>
        <li>
          <a href="/#about">About</a>
        </li>
        <li>
          <a href="/#skills">Experience</a>
        </li>
        <li>
          <a href="/#projects">Projects</a>
        </li>
        <li>
          <a href="/#contact">Contact</a>
        </li>
      </ol>
      <div>
        <a className="resume-btn" href="../images/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </div>
  );
}

export default NavRight;
