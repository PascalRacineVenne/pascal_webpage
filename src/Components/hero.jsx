import React from 'react';
import './hero.css';

function Hero() {
  return (
    <section className="hero__StyledHeroSection section1">
      <div>
        <h2>Bonjour je m'appelle</h2>
      </div>
      <div>
        <h1>Pascal Racine-Venne</h1>
      </div>
      <div>
        <h3>Je construis et design pour le web</h3>
      </div>
      <div>
        <p>I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at Upstatement.</p>
      </div>
      <div>
        <a href="" className="email-link">Get in touch</a>
      </div>
    </section>
  )
}

export default Hero;
