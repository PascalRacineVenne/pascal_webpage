import React, { useState, useEffect } from 'react';
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
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo(0,0);
  }

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
      {showButton && (
        <button onClick={scrollToTop} className='topButton__StyledButton'>
          &#8679;
        </button>)
      }
    </div>
  );
}

export default App;
