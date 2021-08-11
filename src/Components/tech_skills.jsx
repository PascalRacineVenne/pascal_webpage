import React, { useState, useEffect } from 'react';
import Tools from './tools'
import "./tech_skills.css";
// import Json from '../data/skill.json';


const TechSkills = () => {
  const [techSkills, setTechSkills] = useState([])

useEffect(() => {
  fetch("https://raw.githubusercontent.com/PascalRacineVenne/pascal_webpage/master/src/data/skill.json?token=ASMX377KK4QTKJZ4KXBTQGTBCQ7QW")
    .then(response => response.json())
    .then(data => setTechSkills(data))
}, [])

  return (
    <section className="skills__StyledSkills">
      <h5 className="numbered-heading">Technological Skills</h5>
      <div className="inner_tech_skills">
        {techSkills.map((skill) => {
          console.log(skill);
          return (
            <Tools skill={skill} key={skill.id}/>
          )
        })}
      </div>
    </section>
  )
}

export default TechSkills;
