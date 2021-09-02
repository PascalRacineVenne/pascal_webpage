import React from 'react';
import Burger from './burger';
import {navLinks} from '../config';
import './menu.css';

const innerMenu = () => {
  return(
    <aside>
      <nav>
        <ol>
          {navLinks &&
         navLinks.map(({ url, name }, i) => (
          <li key={i}>
            <a href={url}>{name}</a>
          </li>
        ))}
        </ol>
      </nav>
    </aside>
  )
}

const Menu = () => {
  return(
    <div className="menu__StyledMenu">
      <Burger />
      <innerMenu />
    </div>
  )
}

export default Menu;
