import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
  return (
    <Section id="contact" title="Contact Me">
      <div className="contact-simple">
        
        <h3 className="contact-heading">Let's Work Together</h3>

        <p className="contact-text">
          Whether you're looking to hire a developer, collaborate on a project, 
          or simply want to say hello — I’d love to hear from you.
        </p>

        <Button
          href="https://mail.google.com/mail/?view=cm&fs=1&to=ashwanthna07@gmail.com&su=Hiring%20Inquiry%20-%20MERN%20Developer"
          target="_blank"
          rel="noopener noreferrer"
          className="hire-btn"
        >
          Hire Me / Send Message
        </Button>

        <div className="contact-links">
          <div className="contact-method">
            <h4>Email</h4>
            <a 
              href="mailto:ashwanthna07@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              ashwanthna07@gmail.com
            </a>
          </div>

          <div className="contact-method">
            <h4>GitHub</h4>
            <a 
              href="https://github.com/ashwanth-achari"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/ashwanth-achari
            </a>
          </div>

          <div className="contact-method">
            <h4>LinkedIn</h4>
            <a 
              href="https://www.linkedin.com/in/ashwanth-achari/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/ashwanth-achari
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
