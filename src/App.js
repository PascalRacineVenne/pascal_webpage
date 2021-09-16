import React from 'react';
import "./Components/FontAwesomeIcons";

import AboutMe from './Components/about_me.jsx';
import Contact from './Components/contact.jsx';
import Footer from './Components/footer.jsx';
import Hero from './Components/hero.jsx';
import Navbar from './Components/navbar.jsx';
import ProjectsList from './Components/projects_list.jsx';
import SideLeft from './Components/side_left.jsx';
import SideRight from './Components/side_right.jsx';
import TechSkills from './Components/tech_skills.jsx';

import './assets/App.css';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <SideLeft />
      <SideRight />
      <div id="content">
        <div className="main">
          <Hero />
          <AboutMe />
          <TechSkills />
          <ProjectsList />
          <Contact />
        </div>
        <Footer className="footer"/>
      </div>
    </div>
  );
}

export default App;
