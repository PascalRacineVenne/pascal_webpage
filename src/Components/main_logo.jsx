import React from 'react';
import logo from '../images/logo_maroon.svg'; // Tell webpack this JS file uses this image

const MainLogo = () => {
  return (
    <a href="/">
      <img src={logo} alt="Logo" />
    </a>
  )
}

export default MainLogo;
