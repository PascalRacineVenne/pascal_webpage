import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './social.css';

const Social = ( {social} ) => {
  return (
    <span>
      <a href={social.URL} target="_blank" rel="noopener noreferrer" className="social__StyledIcon"><FontAwesomeIcon icon={social.fontAwesomeIcons} size="lg" /></a>
    </span>
  )
}

export default Social;
