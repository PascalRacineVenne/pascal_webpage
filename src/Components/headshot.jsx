import React from 'react';
import "./headshot.css";
import headshot from '../images/pascal_300x300.jpg';

function Headshot() {
  return(
    <div className="about__StyledPic">
      <div className="wrapper">
        <img src={headshot} className="headshot_Styled"alt="headshot" />
      </div>
    </div>
  )
}

export default Headshot;
