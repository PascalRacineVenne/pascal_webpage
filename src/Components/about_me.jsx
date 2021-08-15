import React from 'react';
import Headshot from "./headshot";
import './about_me.css';

const AboutMe= () => {
  return (
    <section id="about" className="about__StyledAbout section">
      <h5 className="numbered-heading">About me</h5>
      <div className="inner_about_me">
        <div className="about__StyledText">
          <p>
            I've been a musician for 20 years and I've always been very
            enthusiastic about the possible relations between music and
            technology. For me code seems to be another way to shape and
            create dynamic material based on the interaction and harmony
            between languages. Pretty much like music!
          </p>
          <p>
            All the magis stuff about me on multiple lines. All the magis stuff about
            me on multiple lines. All the magis stuff about me on multiple lines. All
            the magis stuff about me on multiple lines.All the magis stuff about me
            on multiple lines. All the magis stuff about me on multiple lines. All the
            magis stuff about me on multiple lines.
          </p>
        </div>
        <div>
          <Headshot />
        </div>
      </div>
    </section>
  )
}

export default AboutMe;
