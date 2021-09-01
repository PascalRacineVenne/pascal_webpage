import React, { useState, useEffect } from 'react';
import MainLogo from './main_logo';
import Menu from './menu';
import Burger from './burger';

import "./navbar.css";


const Navbar = () => {
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    window.scrollY > 100 ? setShow(false) : setShow(true);
  }

  useEffect(()=> {
    window.addEventListener('scroll', controlNavbar)
    return() => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])

    return (
      <header className={`${show && 'nav--StyledHeader'}`}>
        <nav className="nav--StyledNav">
          <div className="logo">
            <MainLogo />
          </div>
          <Menu />
          <Burger />
        </nav>
      </header>
    )
}

export default Navbar;
