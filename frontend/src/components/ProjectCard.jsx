import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { title, slug, thumbnailUrl, description, techStack, githubUrl, liveUrl } = project;
  
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={thumbnailUrl} alt={title} />
      </div>
      <div className="project-content">
        <h3 className="project-heading">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tech">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-actions">
          <Button href={githubUrl} variant="outline" className="project-btn">
            GitHub
          </Button>
          <Button href={liveUrl} className="project-btn">
            Live Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;