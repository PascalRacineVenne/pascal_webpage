import React from 'react';
import Navbar from './Components/navbar.jsx';
import Hero from './Components/hero.jsx';
import AboutMe from './Components/about_me.jsx';
import TechSkills from './Components/tech_skills.jsx';
import Projects from './Components/projects.jsx';
import Contact from './Components/contact.jsx';

import Footer from './Components/footer.jsx';

import './assets/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="content">
        <div className="main fillHeight">
          <Hero />
          <AboutMe />
          <TechSkills />
          <Projects />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
