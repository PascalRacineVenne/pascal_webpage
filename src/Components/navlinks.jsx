import React from 'react';
import "./navlinks.css";
import Pdf from '../images/resume_PascalRacineVenne_nov2021.pdf';
import { navLinks } from '../config';

function NavLinks() {
  function handleClick(e) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;

    window.scroll({
      top: offsetTop,
      behavior: 'smooth'
    });
  }

  return(
    <div className="navlinks--StyledLinks">
      <ol>
        {navLinks &&
         navLinks.map(({ url, name }, i) => (
          <li key={i}>
            {/*<a href={url}>{name}</a>*/}
            <a href={url} onClick={handleClick}>{name}</a>
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
