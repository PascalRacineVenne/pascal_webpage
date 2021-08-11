import React from 'react';
import './tools.css';



function Tools({ skill }) {
  console.log(skill.imgURL);
  return (
    <div className ="tools__styledTools">
      <div className="tools__circle">
      </div>
      <p>{skill.name}</p>
    </div>
  )
}

export default Tools;
