import React from 'react';
import Social from './social';
import "./footer.css";

import dataSocial from '../data/social.json';

const Footer = () => {
  return (
    <div className="footer_StyledFooter">
      <div className="footer__centered">
        <div className="social__StyledMediaSocial">
          {dataSocial.map((social) => {
            return(
              <Social social={social} key={social.id}/>
            )
          })}
        </div>
        <div className="footer_StyledCopyright">
         <a href="https://github.com/PascalRacineVenne" alt="github_link" target="_blank" rel="noopener noreferrer">
          <p><bold>&copy;</bold> 2021 Pascal Racine-Venne</p>
         </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
