import React from 'react';
import "./menu.css";
import Pdf from '../images/resume-PascalRacineVenne.pdf'
import Burger from './burger';

function Menu() {
  return(
    <div className="menu--StyledLinks">
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
        <a href={Pdf} rel="noopener noreferrer" target="_blank"  className="resume-btn" >Resume</a>
      </div>
      <Burger />
    </div>
  );
}

export default Menu;
