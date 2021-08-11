import React, { useState, useEffect } from 'react';
import Tools from './tools'
import "./tech_skills.css";

// import skills from '../data/skill_data.json';


const TechSkills = () => {
  const [techSkills, setTechSkills] = useState([])

  console.log(techSkills);

useEffect(() => {
  fetch("../data/skill_data.json ")
    .then(response => response.json())
    .then(data => setTechSkills(data))
}, [])


  return (
    <section className="skills__StyledSkills">
      <h5 className="numbered-heading">Technological Skills</h5>
      <div className="inner_tech_skills">
      {techSkills.map((skill) => {
        return (
          <Tools skill={skill} key={skill.id}/>
        )
      })}
      </div>
    </section>
  )
}

export default TechSkills;

// const skills = [
//   {
//     id: 1,
//     name: "HTML",

//   },
//   {
//     id: 2,
//     name: "CSS"

//   },
//   {
//     id: 3,
//     name: "JavaScript"

//   },
//   {
//     id: 4,
//     name: "React"

//   },
//   {
//     id: 5,
//     name: "HTML",

//   },
//   {
//     id: 6,
//     name: "CSS"

//   },
//   {
//     id: 7,
//     name: "JavaScript"

//   },
//   {
//     id: 8,
//     name: "React"

//   },
//   {
//     id: 9,
//     name: "React"

//   },
//   {
//     id: 10,
//     name: "React"

//   },
//   {
//     id: 11,
//     name: "React"

//   },
//   {
//     id: 12,
//     name: "React"

//   },
//   {
//     id: 13,
//     name: "React"

//   },
//   {
//     id: 14,
//     name: "React"

//   }
// ]
