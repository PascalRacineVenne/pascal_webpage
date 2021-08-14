import React from 'react';
import AboutMe from './Components/about_me.jsx';
import Contact from './Components/contact.jsx';
import Footer from './Components/footer.jsx';
import Hero from './Components/hero.jsx';
import Navbar from './Components/navbar.jsx';
import ProjectsList from './Components/projects_list.jsx';
import TechSkills from './Components/tech_skills.jsx';


import './assets/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
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
