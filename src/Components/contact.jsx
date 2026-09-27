import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact__StyledContact">
      <h5 className="numbered-heading contact">Contact</h5>
      <div className="inner_contact">
        <h2>Let's talk.</h2>
        <div className="contact__links">
          <a href="mailto:pascalracinevenne@gmail.com" className="email-link" target="_blank" rel="noreferrer">Email</a>
          <a href="https://www.linkedin.com/in/pascal-racine-venne" className="email-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/PascalRacineVenne" className="email-link" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  )
}

export default Contact;
