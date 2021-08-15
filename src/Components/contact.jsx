import React from 'react';
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact__StyledContact">
      <h5 className="numbered-heading contact">Contact</h5>
      <div className="inner_contact">
        <h2>Get in touch</h2>
        <p>
          Please feel free to contact me if you have any questions or want to collaborate on a project.
          Thank you for passing by and stay tuned for fresh new projects.
        </p>
        <div>
          <a href="mailto:pascalracinevenne@gmail.com" className="email-link" target="_blank" rel="noreferrer">Get in touch</a>
        </div>
      </div>
    </section>
  )
}

export default Contact;
