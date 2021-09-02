import React from 'react';
import "./navlinks.css";
import Pdf from '../images/resume-PascalRacineVenne.pdf';
import { navLinks } from '../config';

function NavLinks() {
  return(
    <div className="navlinks--StyledLinks">
      <ol>
        {navLinks &&
         navLinks.map(({ url, name }, i) => (
          <li key={i}>
            <a href={url}>{name}</a>
          </li>
        ))}
      </ol>
      <div className="btn">
        <a href={Pdf} rel="noopener noreferrer" target="_blank"  className="resume-btn" >Resume</a>
      </div>
    </div>
  );
}

export default NavLinks;
