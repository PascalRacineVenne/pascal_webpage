import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer_StyledFooter">
      <div className="footer__centered">
        <div className="footer_StyledLinks">
          <a href="" target="_blank" rel="noopener noreferrer">
            github
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            linkedin
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
             instagram
           </a>
        </div>
        <div className="footer_StyledCopyright">
         <a href="https://github.com/PascalRacineVenne" alt="github_link" target="_blank" rel="noopener noreferrer">
          <p>Pascal Racine-Venne @ 2021</p>
         </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
