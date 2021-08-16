import React from 'react';
import Social from './social';

import './side_left.css';

import dataSocial from '../data/social.json';

const SideLeft = () => {
  return(
    <div className="sideleft__Styled">
      <div className="innerleft">
        {dataSocial.map((social) => {
          return(
            <Social social={social} key={social.id}/>
          )
        })}
      </div>
    </div>
  )
}

export default SideLeft;
