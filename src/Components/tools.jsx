import React from 'react';
import './tools.css';



function Tools({ skill }) {
  const style = {
    backgroundImage: `url(${skill.imgURL})`
  }
  console.log(skill.imgURL);
  return (
    <div className ="tools__styledTools" style={style}>
      <div className="tools__circle">
      </div>
      <p>{skill.name}</p>
    </div>
  )
}

export default Tools;
