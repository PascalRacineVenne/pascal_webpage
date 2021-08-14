import React from 'react';

import './social.css';

const Social = ( {social} ) => {
  return (
    <span>
      <a href={social.URL} target="_blank" rel="noopener noreferrer"><p>{social.name}</p></a>
    </span>
  )
}

export default Social;
