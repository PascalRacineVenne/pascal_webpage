import React, { useState, useEffect } from 'react';
import MainLogo from './main_logo';
import NavLinks from './navlinks';
import Menu from './menu';

import './navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(true);

  const controlNavbar = () => {
    window.pageYOffset > 50 ? setShow(false) : setShow(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <header
      className={
        show
          ? 'nav--StyledHeader'
          : 'nav--StyledHeader nav--StyledHeader_scroll'
      }
    >
      <nav className='nav--StyledNav'>
        <div className='logo'>
          <MainLogo />
        </div>
        <NavLinks />
        <Menu />
      </nav>
    </header>
  );
};

export default Navbar;
