import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Section from '../components/Section';
import { getProjects } from '../services/api';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

const Home = () => {
  const [projectsData, setProjectsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      try {
        const data = await getProjects('?isFeatured=true&limit=3');
        setProjectsData(data);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err.message || 'Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProjects();
  }, []);
  const featuredProjects = projectsData?.data || [];

  // Case 2: backend returns just [ ... ]
  // const featuredProjects = projectsData || [];

  return (
    <div>
      {/* Hero Section */}
      <Section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-left">
              <h1 className="hero-title">Ashwanth Achari</h1>
              <h2 className="hero-subtitle">MERN Stack Developer</h2>
              <p className="hero-description">
                Building modern web applications with MongoDB, Express, React, and Node.js.
                Passionate about creating clean, efficient, and user-friendly solutions.
              </p>
              <div className="hero-actions">
                <Link to="/projects">
                  <Button>View Projects</Button>
                </Link>
                <Button 
                  href="/resume.pdf" 
                  variant="outline"
                  className="ml-2"
                >
                  Download Resume
                </Button>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-image">
                <img 
                  src="https://res.cloudinary.com/dw9pihx6q/image/upload/v1756056327/Profile_picture_kjn585.jpg" 
                  alt="Ashwanth A - MERN Stack Developer"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Projects Section */}
      <Section id="featured-projects" title="Featured Projects">
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        ) : error ? (
          <div className="alert alert-error">{error}</div>
        ) : (
          <div className="featured-projects">
            {featuredProjects.length > 0 ? (
              <div className="grid grid-3">
                {featuredProjects.map((project) => (
                  <ProjectCard key={project._id} project={project} />
                ))}
              </div>
            ) : (
              <p>No featured projects available at the moment.</p>
            )}
          </div>
        )}
        
        <div className="text-center mt-4">
          <Link to="/projects">
            <Button variant="outline">View All Projects</Button>
          </Link>
        </div>
      </Section>
    </div>
  );
};

export default Home;
