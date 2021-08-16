import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DevIcon from "devicon-react-svg";



import './tools.css';

const Tools = ({ skill }) => {
  const styledDevIcon = {
    fill: 'var(--primary_light_green',
    width: '50px'
  }

  return (
    <div className ="tools__styledTools">
      <div className="tools__circle">
        <DevIcon icon={skill.devIcon} style={styledDevIcon}/>
        <FontAwesomeIcon icon={skill.fontAwesomeIcons} size="3x" />
      </div>
      <p>{skill.name}</p>
    </div>
  )
}

export default Tools;
