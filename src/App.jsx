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

import { IconContext } from "react-icons";
import { FaArrowCircleUp } from "react-icons/fa";

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
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
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
      <div className="icon-top">
      </div>
        <IconContext.Provider value={{size: 'clamp(2em, 3vw, 3em)'}}>
          {showButton && (
              <FaArrowCircleUp onClick={scrollToTop} className='topButton__StyledButton' />
            )
          }
        </IconContext.Provider>
    </div>
  );
}

export default App;
