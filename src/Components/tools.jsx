import React from 'react';
import { IconContext } from "react-icons";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRuby,
  SiRubyonrails,
  SiFigma,
  SiBootstrap,
  SiSass,
  SiGit,
  SiPostgresql,
  SiHeroku } from "react-icons/si";

import './tools.css';

const Icon = ({ name }) => {
  switch (name) {
    case 'HTML':
      return <SiHtml5 />;
    case 'CSS':
      return <SiCss3 />;
    case 'Javascript':
      return <SiJavascript />;
    case 'React':
      return <SiReact />;
    case 'Ruby':
      return <SiRuby />;
    case 'Rails':
      return <SiRubyonrails />;
    case 'Figma':
        return <SiFigma />;
    case 'Bootstrap':
        return <SiBootstrap />;
    case 'Git':
      return <SiGit />;
    case 'Sass':
        return <SiSass />;
    case 'PostgreSQL':
        return <SiPostgresql />;
    default:
      return <SiHeroku />;
  }
};

const Tools = ({ skill }) => {
  return (
    <IconContext.Provider value={{size: 'clamp(2em, 3vw, 3em)'}}>
      <div className ="tools__styledTools">
      <div className="tools__circle">
        <Icon name={skill.name} />
      </div>
      <p>{skill.name}</p>
    </div>
    </IconContext.Provider>
  )
}

export default Tools;
