import React, { useState } from 'react';
import Burger from './burger';
import {navLinks} from '../config';
import Pdf from '../images/resume-PascalRacineVenne.pdf';
import './menu.css';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen[!menuOpen];
  const handleClickOnA = (e) => {
    console.log('menu will be closed');
  }

  const menuStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: '0px',
    right: '0px',
    padding: '50px 10px',
    width: 'min(70vw, 400px)',
    height: '100vh',
    outline: '0px',
    backgroundColor: 'var(--primary_mid_green)',
    boxShadow: '-10px 0px 30px -15px var(--primary-mid-green)',
    zIndex: '9',
    // props magic need to happen here
    // transform: `translateX(${props => (props.menuOpen ? 0 : 100)}vw)`,
    transform: 'translateX(0vw)',
    // visibility: `${props => (props.menuOpen ? 'visible' : 'hidden')}`,
    visibility: 'visible',
    transition: 'var(--transition3)'
  }

  return(
    <div className="menu__StyledMenu">
      <Burger
        onClick={toggleMenu}
        menuOpen={menuOpen}
      />
      <aside menuOpen={menuOpen} aria-hidden={!menuOpen} tabIndex={menuOpen ? 1 : -1} style={menuStyle}>
        <nav className="menuNav__StyledMenu">
          <ol>
            {navLinks &&
           navLinks.map(({ url, name }, i) => (
            <li key={i}>
              {/*<a href={url} onClick={() => setMenuOpen(false)}>{name}</a>*/}
              <a href={url} onClick={handleClickOnA}>{name}</a>
            </li>
          ))}
          </ol>
          <a href={Pdf} rel="noopener noreferrer" target="_blank"  className="inner-resume-btn" >Resume</a>
        </nav>
      </aside>
    </div>
  )
}

export default Menu;
