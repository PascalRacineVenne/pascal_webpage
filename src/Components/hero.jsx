import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <section className="hero__StyledHeroSection section1">
      <div>
        <h2>Hello! My name is</h2>
      </div>
      <div>
        <h1>Pascal Racine-Venne</h1>
      </div>
      <div>
        <h3>Building for the web is my playground.</h3>
      </div>
      <div>
        <p>I'm a front-end developer specializing in building great digital experiences.  Currently, I'm focused on gathering my knowledge into accessible and people-oriented projects.</p>
      </div>
      <div>
        <a href="https://www.google.com" className="email-link" target="_blank" rel="noreferrer">Get in touch</a>
      </div>
    </section>
  )
}

export default Hero;
