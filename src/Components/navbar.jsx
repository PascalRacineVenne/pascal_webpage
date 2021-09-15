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
  // const controlNavbar = () => {
  //   const currentScrollY = window.pageYOffset;
  //   console.log(currentScrollY);

  //   if (currentScrollY > 50 || currentScrollY > currentScrollY + 50) {
  //     setShow(false);
  //   } else {
  //     setShow(true);
  //   }
  // }

  useEffect(()=> {
    window.addEventListener('scroll', controlNavbar)
    return() => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])

    // VERSION 3
  // let prevScrollpos = window.pageYOffset;
  //   window.onscroll = function() {
  //     const currentScrollPos = window.pageYOffset;
  //     if (prevScrollpos > currentScrollPos) {
  //       document.querySelector("nav--StyledHeader").style.top = "0";
  //     } else {
  //       document.querySelector("nav--StyledHeader").style.top = "-50px";
  //     }
  //     prevScrollpos = currentScrollPos;
  //   }

    return (
      <header className={`${show && 'nav--StyledHeader'}`}>
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
