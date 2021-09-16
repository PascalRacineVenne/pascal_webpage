import React, { useState, useEffect } from 'react';
import MainLogo from './main_logo';
import NavLinks from './navlinks';
import Menu from './menu';

import "./navbar.css";


const Navbar = () => {
  const [show, setShow] = useState(true);

  // VERSION 1
  const controlNavbar = () => {
    window.pageYOffset > 50 ? setShow(false) : setShow(true);
  }

  // Version 2
    // const doc = document.documentElement
    // const startY = doc.scrollTop;
    // let windowScrollY = window.pageYOffset;
    // let prevScroll = windowScrollY || startY;
    // let currentScrollY;
    // let direction = 0;
    // let prevDirection = 0;
    // console.log(startY, windowScrollY, prevScroll);

    // const checkScroll = () => {
    //   currentScrollY = windowScrollY || startY;
    //   if (currentScrollY > prevScroll) {
    //     //scrolled up
    //     direction = 2;
    //   }
    //   else if (currentScrollY < prevScroll) {
    //     //scrolled down
    //     direction = 1;
    //   }

    //   if (direction !== prevDirection) {
    //     toggleHeader(direction, currentScrollY);
    //   }

    //   prevScroll = currentScrollY;
    // }

    // const toggleHeader = (direction, currentScrollY) => {
    //   if (direction === 2 && currentScrollY > 50) {
    //     setShow(false);
    //     prevDirection = direction;
    //   } else if (direction === 1){
    //     setShow(true);
    //     prevDirection = direction;
    //   }
    // }

  useEffect(()=> {
    window.addEventListener('scroll', controlNavbar)
    return() => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])

    return (
      <header className={show ? 'nav--StyledHeader' : 'nav--StyledHeader nav--StyledHeader_scroll'}>
        <nav className="nav--StyledNav">
          <div className="logo">
            <MainLogo />
          </div>
          <NavLinks />
          <Menu />
        </nav>
      </header>
    )
}

export default Navbar;
