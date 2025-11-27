import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <span className="logo-mark">A</span>
            <span className="logo-text">
              Ashwanth <span className="logo-text-light">Achari</span>
            </span>
          </Link>

          {/* Menu */}
          <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
            <Link
              to="/"
              className={`navbar-link ${
                location.pathname === "/" ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`navbar-link ${
                location.pathname === "/about" ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`navbar-link ${
                location.pathname === "/projects" ||
                location.pathname.startsWith("/projects/")
                  ? "active"
                  : ""
              }`}
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className={`navbar-link ${
                location.pathname === "/contact" ? "active" : ""
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>

            {/* Desktop CTA (inside menu on mobile, inline on desktop) */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ashwanthna07@gmail.com&su=Hiring%20Inquiry%20-%20MERN%20Developer&body=Hi%20Ashwanth,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20an%20opportunity%20with%20you."
              className="navbar-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`navbar-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
