import React from 'react';
import Tools from './tools'
import "./tech_skills.css";

function TechSkills() {
  return (
    <section className="skills__StyledSkills">
      <h5 className="numbered-heading">Technological Skills</h5>
      <div className="inner_tech_skills">
         <Tools />
      </div>
    </section>
  )
}

export default TechSkills;
