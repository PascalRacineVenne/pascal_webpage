import React from 'react';
import MainLogo from './logo';
import NavRight from './navright';

import "./navbar.css";


function Navbar() {
    return (
      <header className="nav--StyledHeader">
        <nav className="nav--StyledNav">
          <div className="logo">
            <MainLogo />
          </div>
          <NavRight />
        </nav>
      </header>
    )
}

export default Navbar;
