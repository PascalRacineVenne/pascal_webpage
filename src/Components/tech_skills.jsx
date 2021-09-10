import React from 'react';
import Tools from './tools'
import "./tech_skills.css";

// import {Icon} from '../Components/icons';

import dataSkill from '../data/skill.json';
// import dataSkill from '../data/skill_data_2.json';

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
