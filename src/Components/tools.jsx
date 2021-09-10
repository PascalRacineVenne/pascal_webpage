import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DevIcon from "devicon-react-svg";
// import { Icon } from '../Components/icons';
// import WebLogo from '../images/web_logo/'

import './tools.css';

const Tools = ({ skill }) => {
  const styledDevIcon = {
    fill: 'var(--primary_light_green',
    width: 'clamp(40px, 4vw, 58px)'
  }

  return (
    <div className ="tools__styledTools">
      <div className="tools__circle">
        <FontAwesomeIcon icon={skill.fontAwesomeIcons} size="3x" />
        <DevIcon icon={skill.devIcon} style={styledDevIcon} className={skill.className}/>
        {/*<Icon name={skill.name} />*/}

      </div>
      <p>{skill.name}</p>
    </div>
  )
}

export default Tools;
