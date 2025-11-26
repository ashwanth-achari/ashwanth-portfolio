import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import { getProjectBySlug } from '../services/api';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const data = await getProjectBySlug(slug);
        
        if (data.success) {
          setProject(data.data);
        } else {
          setError('Project not found');
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <Section>
        <div className="loading">
          <div className="spinner"></div>
        </div>
      </Section>
    );
  }

  if (error || !project) {
    return (
      <Section>
        <div className="alert alert-error">
          {error || 'Project not found'}
        </div>
        <div className="text-center mt-4">
          <Link to="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </Section>
    );
  }

  const { 
    title, 
    thumbnailUrl, 
    description, 
    techStack, 
    githubUrl, 
    liveUrl, 
    category,
    role,
    duration
  } = project;

  return (
    <Section>
      <div className="project-detail">
        <div className="project-header">
          <Link to="/projects" className="back-link">
            ← Back to Projects
          </Link>
          <h1 className="project-title">{title}</h1>
          <div className="project-meta">
            <span className="project-category">{category}</span>
            <span className="project-role">{role}</span>
            <span className="project-duration">{duration}</span>
          </div>
        </div>

        <div className="project-image">
          <img src={thumbnailUrl} alt={title} />
        </div>

        <div className="project-content">
          <div className="project-description">
            <h2>Description</h2>
            <p>{description}</p>
          </div>

          <div className="project-tech-stack">
            <h2>Technologies Used</h2>
            <div className="tech-tags">
              {techStack.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="project-actions">
            <Button href={githubUrl} variant="outline">
              View on GitHub
            </Button>
            <Button href={liveUrl}>
              View Live Demo
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProjectDetail;