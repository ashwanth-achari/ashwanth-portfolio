import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { getProjects } from '../services/api';
import './Projects.css';

const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState(searchParams.get('category') || 'all');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const query = filter === 'all' ? '' : `?category=${filter}`;
        const data = await getProjects(query);
        
        if (data.success) {
          setProjects(data.data);
        } else {
          setError('Failed to fetch projects');
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProjects();
  }, [filter]);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    if (newFilter === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', newFilter);
    }
    setSearchParams(searchParams);
  };

  return (
    <Section id="projects" title="My Projects">
      <div className="projects-filter">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterChange('all')}
        >
          All Projects
        </button>
        <button 
          className={`filter-btn ${filter === 'Full Stack' ? 'active' : ''}`}
          onClick={() => handleFilterChange('Full Stack')}
        >
          Full Stack
        </button>
        <button 
          className={`filter-btn ${filter === 'Frontend' ? 'active' : ''}`}
          onClick={() => handleFilterChange('Frontend')}
        >
          Frontend
        </button>
        <button 
          className={`filter-btn ${filter === 'Backend' ? 'active' : ''}`}
          onClick={() => handleFilterChange('Backend')}
        >
          Backend
        </button>
      </div>

      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      ) : error ? (
        <div className="alert alert-error">{error}</div>
      ) : (
        <div className="projects-grid">
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))
          ) : (
            <p>No projects found for the selected category.</p>
          )}
        </div>
      )}
    </Section>
  );
};

export default Projects;