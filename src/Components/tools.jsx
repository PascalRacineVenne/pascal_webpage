import React from 'react';
import './tools.css';

import TestLogo from "../images/web_logo/07-redux_5050.svg"



function Tools({ skill }) {
  console.log(skill);
  return (
    <div className ="tools__styledTools">
      <div className="tools__circle">
        {/*<img src={skill.imgURL} alt="logo" />*/}
        <img src={TestLogo} alt="logo" />
      </div>
      <p>{skill.name}</p>
    </div>
  )
}

export default Tools;
