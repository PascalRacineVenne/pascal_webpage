import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './social.css';

const Social = ( {social} ) => {
  return (
    <span>
      <a href={social.URL} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={social.fontAwesomeIcons} /></a>
    </span>
  )
}

export default Social;
