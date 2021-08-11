import React from 'react';
import './tools.css';



function Tools({ skill }) {
  return (
    <div className ="tools__styledTools">
      <div className="tools__circle">
        <img src={skill.imgURL} alt="logo" />
      </div>
      <p>{skill.name}</p>
    </div>
  )
}

export default Tools;
