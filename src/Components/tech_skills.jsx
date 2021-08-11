import React, { useState, useEffect } from 'react';
import Tools from './tools'
import "./tech_skills.css";


const TechSkills = () => {
  const [techSkills, setTechSkills] = useState([])

  console.log(techSkills);

useEffect(() => {
  fetch("https://raw.githubusercontent.com/PascalRacineVenne/pascal_webpage/master/src/data/skill_data.json?token=ASMX3724OCT6R3L44MOBVMDBCQV42")
    .then(response => response.json())
    .then(data => setTechSkills(data))
}, [])

  return (
    <section className="skills__StyledSkills">
      <h5 className="numbered-heading">Technological Skills</h5>
      <div className="inner_tech_skills">
        {techSkills.map((skill) => {
          console.log(skill)
          return (
            <Tools skill={skill} key={skill.id}/>
          )
        })}
      </div>
    </section>
  )
}

export default TechSkills;
