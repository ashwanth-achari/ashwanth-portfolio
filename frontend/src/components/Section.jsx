import React from 'react';
import './Section.css';

const Section = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = '', 
  dark = false 
}) => {
  return (
    <section 
      id={id} 
      className={`section ${dark ? 'section-dark' : ''} ${className}`}
    >
      <div className="container">
        {title && <h2 className="section-title">{title}</h2>}
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
};

export default Section;