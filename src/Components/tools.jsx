import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DevIcon from "devicon-react-svg";
// import WebLogo from '../images/web_logo/'

import './tools.css';

const Tools = ({ skill }) => {
  const styledDevIcon = {
    fill: 'var(--primary_light_green',
    width: '50px'
  }

  return (
    <div className ="tools__styledTools">
      <div className="tools__circle">
        <FontAwesomeIcon icon={skill.fontAwesomeIcons} size="3x" />
        <DevIcon icon={skill.devIcon} style={styledDevIcon} className={skill.className}/>
        {/*<img src={skill.imgURL} alt="" />*/}
      </div>
      <p>{skill.name}</p>
    </div>
  )
}

export default Tools;
