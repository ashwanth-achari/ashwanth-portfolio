import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Section from "../components/Section";
import { getProjects } from "../services/api";
import ProjectCard from "../components/ProjectCard";
import "./Home.css";

const Home = () => {
  const [projectsData, setProjectsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      try {
        const data = await getProjects("?isFeatured=true&limit=3");
        setProjectsData(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError(err.message || "Failed to load projects");
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
        <div className="hero-bg-blur"></div>
        <div className="hero-bg-accent"></div>

        <div className="hero-container">
          <div className="hero-content">
            {/* Left Side */}
            <div className="hero-left">
              <h1 className="hero-title gradient-text">Ashwanth Achari</h1>

              <h2 className="hero-subtitle">
                <span className="role-static">MERN Stack Developer</span>
                <span className="role-dynamic">
                  <span>Backend Developer</span>
                  <span>Frontend Architect</span>
                  <span>API Specialist</span>
                  <span>Workflow Automation</span>
                </span>
              </h2>

              <p className="hero-description">
                I build clean, modern, interactive web applications using the
                MERN stack — with a focus on performance, real-world
                functionality, and seamless user experience.
              </p>

              {/* Tech Row */}
              <div className="hero-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Express</span>
                <span>TypeScript</span>
                <span>JWT Auth</span>
              </div>

              <div className="hero-actions">
                <Link to="/projects">
                  <Button>View Projects</Button>
                </Link>
                <Button
                  href="https://drive.google.com/file/d/1edWkwbf0x4HCpl-RYUKYx-a9gVvELCCW/view?usp=drive_link"
                  variant="outline"
                  className="ml-2"
                >
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Right Side */}
            <div className="hero-right">
              <div className="hero-image-wrapper">
                <div className="glow-circle"></div>
                <div className="hero-image">
                  <img
                    src="https://res.cloudinary.com/dw9pihx6q/image/upload/v1756056327/Profile_picture_kjn585.jpg"
                    alt="Ashwanth A - MERN Stack Developer"
                  />
                </div>

                {/* Floating UI Elements */}
                <div className="float-card float-card-1">⚡ MERN Stack</div>
                <div className="float-card float-card-2">💻 Project Experience</div>
                <div className="float-card float-card-3">🚀 Ready to Work</div>
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
