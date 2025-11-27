import React from 'react';
import Section from '../components/Section';
import './About.css';

const About = () => {
  return (
    <Section id="about" title="About Me">
      <div className="about-content">
        <div className="about-text">
          <span className="about-eyebrow">👋 Hey, I'm Ashwanth</span>
          <h2 className="about-heading">
            MERN Stack Developer focused on clean, real-world web apps.
          </h2>
          <p>
            I love building end-to-end web applications that feel fast, intuitive, and reliable. 
            From crafting responsive UIs in React to wiring secure APIs in Node.js, I enjoy turning ideas 
            into full-stack solutions that actually solve problems.
          </p>
          <p>
            My journey started with curiosity about how websites work and quickly grew into a passion for 
            full-stack development. I work mainly with the MERN stack (MongoDB, Express, React, Node.js), 
            and I’m actively exploring DevOps, cloud deployment, and AI automation tools like n8n to level up 
            my development workflow.
          </p>

          <div className="about-highlights">
            <div className="highlight-card">
              <span className="highlight-label">Role</span>
              <span className="highlight-value">MERN Stack Developer</span>
            </div>
            <div className="highlight-card">
              <span className="highlight-label">Experience</span>
              <span className="highlight-value">Project-ready Fresher</span>
            </div>
            <div className="highlight-card">
              <span className="highlight-label">Open To</span>
              <span className="highlight-value">Internships & Full-time</span>
            </div>
          </div>
        </div>
        
        <div className="about-details">
          <div className="about-info card">
            <h3>Personal Info</h3>
            <ul>
              <li><strong>Name:</strong> Ashwanth Achari</li>
              <li><strong>Location:</strong> Bhatkal, (Bangalore) India</li>
              <li><strong>Experience:</strong> Fresher (Hands-on Projects)</li>
              <li><strong>Status:</strong> Available for Internships / Jobs</li>
            </ul>
          </div>
          
          <div className="skills-section card">
            <h3>Skills & Stack</h3>
            
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
              <h4>Tools & Others</h4>
              <div className="skill-tags">
                <span className="skill-tag">Git / GitHub</span>
                <span className="skill-tag">AI Workflows (n8n)</span>
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
