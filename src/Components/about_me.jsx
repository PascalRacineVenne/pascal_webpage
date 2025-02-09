import React from "react";
import Headshot from "./headshot";
import "./about_me.css";

const AboutMe = () => {
  return (
    <section id="about" className="about__StyledAbout section">
      <h5 className="numbered-heading">About me</h5>
      <div className="inner_about_me">
        <div className="about__StyledText">

          <p><strong>🚀 Engineering Manager | Web Development | Leadership & Innovation</strong></p>
          <p>
            Passionate about web dev and team management, I help our team build
            solid, high-performing, and innovative solutions. My role? Making
            collaboration smoother, improving processes, and driving technical
            excellence to deliver top-notch products.
          </p>

          <p>👨‍💻 Tech: Frontend, React,
            TypeScript, API, scalable architecture.</p>
            <p>📈 Management: Supportive
            leadership, mentoring, continuous improvement, agility.</p>
            <p>🤝 Vision: A
            work environment where every dev can grow and thrive.</p>

          <p>
          I’ve also been
            a musician for 25 years, and I’ve always been excited about how
            music and technology intersect. To me, coding feels like another way
            to shape and create dynamic material, built on interaction and
            harmony between languages—just like music!</p>
            
            <p>The idea is to find the
            right balance between innovation, performance, and team well-being.
            Always curious about new tech trends and best practices in
            management, I believe that people are the key to success.</p>
        </div>
        <div>
          <Headshot />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
