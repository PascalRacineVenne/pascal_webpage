import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './social.css';

const Social = ( {social} ) => {
  return (
    <span>
      <a href={social.URL} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={social.fontAwesomeIcons} size="2x" /></a>
    </span>
  )
}

export default Social;
