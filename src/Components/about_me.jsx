import React from 'react';
import Headshot from "./headshot";
import './about_me.css';

function AboutMe() {
  return (
    <section id="about" className="about__StyledAbout">
      <h5 className="numbered-heading">About me</h5>
      <div className="inner_about_me">
        <div className="about__StyledText">
          <p>
            All the magis stuff about me on multiple lines. All the magis stuff about
            me on multiple lines. All the magis stuff about me on multiple lines. All
            the magis stuff about me on multiple lines.All the magis stuff about me
            on multiple lines. All the magis stuff about me on multiple lines. All the
            magis stuff about me on multiple lines.
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
