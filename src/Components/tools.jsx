import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './tools.css';

const Tools = ({ skill }) => {
  return (
    <div className ="tools__styledTools">
      <div className="tools__circle">
        <FontAwesomeIcon icon={skill.fontAwesomeIcons} size="3x" />
      </div>
      <p>{skill.name}</p>
    </div>
  )
}

export default Tools;
