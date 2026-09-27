import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero__StyledHeroSection section1">
      <div>
        <h2>Hello! My name is</h2>
      </div>
      <div>
        <h1 className="hero_BigHeading">Pascal Racine-Venne</h1>
      </div>
      <div>
        <h3 className="hero_BigHeading">Senior Engineering Manager</h3>
      </div>
      <div>
        <p><em>I build reliable products and the high-trust teams behind them.</em></p>
      </div>
      <div>
        <a href="mailto:pascalracinevenne@gmail.com" className="email-link" target="_blank" rel="noreferrer">Get in touch</a>
      </div>
    </section>
  )
}

export default Hero;
