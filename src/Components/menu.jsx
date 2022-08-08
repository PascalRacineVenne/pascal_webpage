import React, { useState } from 'react';
import Burger from './burger';
import { navLinks } from '../config';
import Pdf from '../images/resume PascalRacineVenne.pdf';
import './menu.css';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='menu__StyledMenu'>
      <Burger setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      <aside
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 1 : -1}
        className={
          menuOpen ? 'menuContainer menuContainer__Visible' : 'menuContainer'
        }
      >
        <nav className='menuNav__StyledMenu'>
          <ol>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <li key={i}>
                  <a href={url} onClick={() => setMenuOpen(false)}>
                    {name}
                  </a>
                </li>
              ))}
          </ol>
          <a
            href={Pdf}
            rel='noopener noreferrer'
            target='_blank'
            className='inner-resume-btn'
          >
            Resume
          </a>
        </nav>
      </aside>
    </div>
  );
};

export default Menu;
