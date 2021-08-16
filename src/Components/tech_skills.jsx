import React from 'react';
import Tools from './tools'
import "./tech_skills.css";

import dataSkill from '../data/skill.json';

const TechSkills = () => {
  return (
    <section id="skills" className="skills__StyledSkills">
      <h5 className="numbered-heading">Technological Skills</h5>
      <div className="inner_tech_skills">
        {dataSkill.map((skill) => {
          return (
            <Tools skill={skill} key={skill.id} />
          )
        })}
      </div>
    </section>
  )
}

export default TechSkills;
