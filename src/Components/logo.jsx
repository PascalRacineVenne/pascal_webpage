import React from 'react';
import logo from '../images/logo_maroon.svg'; // Tell webpack this JS file uses this image

function MainLogo() {
  return <img src={logo} alt="Logo" />;
}

export default MainLogo;
