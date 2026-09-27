import React from "react";
import Headshot from "./headshot";
import "./about_me.css";

const AboutMe = () => {
  return (
    <section id="about" className="about__StyledAbout section">
      <h5 className="numbered-heading">About me</h5>
      <div className="inner_about_me">
        <div className="about__StyledText">
          <p>
            I lead a product engineering team building a B2B SaaS platform,
            working with developers across Montréal and Bangalore.
          </p>
          <p>
            I came to code after more than twenty years as a professional
            drummer and music teacher. I still think about teams the way I think
            about bands: everyone listens, everyone keeps time, and the music
            matters more than any solo.
          </p>
          <p>
            These days I spend my time partnering with Product, helping
            distributed teams work well together, and finding ways for AI to
            take the repetitive work off developers' plates.
          </p>
        </div>
        <div>
          <Headshot />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
