import React from 'react';
import Section from '../components/Section';
import './About.css';

const About = () => {
  return (
    <Section id="about" title="About Me">
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate MERN Stack Developer with a strong foundation in building modern web applications. 
            I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
          <p>
            My journey in web development started with a curiosity about how websites work, which quickly 
            evolved into a passion for creating full-stack applications. I specialize in the MERN stack 
            (MongoDB, Express, React, Node.js) and am constantly learning new technologies to enhance my skills.
          </p>
        </div>
        
        <div className="about-details">
          <div className="about-info">
            <h3>Personal Information</h3>
            <ul>
              <li><strong>Name:</strong> Ashwanth Achari</li>
              <li><strong>Location:</strong> Bhatkal, (Banglore) India</li>
              <li><strong>Experience:</strong> Fresher</li>
              <li><strong>Status:</strong> Available for Interships/Jobs</li>
            </ul>
          </div>
          
          <div className="skills-section">
            <h3>Skills</h3>
            
            <div className="skill-category">
              <h4>Frontend</h4>
              <div className="skill-tags">
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">Tailwind</span>
                <span className="skill-tag">JavaScript (ES6+)</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Redux</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h4>Backend</h4>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">JWT Authentication</span>
                <span className="skill-tag">Bcrypt</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h4>Database</h4>
              <div className="skill-tags">
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Mongoose</span>
                <span className="skill-tag">SQLite</span>
                <span className="skill-tag">SQL</span>
              </div>
            </div>
            
            <div className="skill-category">
              <h4>Tools</h4>
              <div className="skill-tags">
                <span className="skill-tag">Git / GitHub</span>
                <span className="skill-tag">AI Workflows(n8n)</span>
                <span className="skill-tag">Generative AI</span>
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">Postman</span>
                <span className="skill-tag">Vercel</span>
                <span className="skill-tag">Render</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;