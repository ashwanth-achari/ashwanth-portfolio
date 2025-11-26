import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { submitContact } from '../services/api';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const { name, email, message } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      setError('Please fill in all fields');
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      
      const data = await submitContact(formData);
      
      if (data.success) {
        setSuccess('Your message has been sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        setError(data.message || 'Failed to send message');
      }
      
      setLoading(false);
    } catch (err) {
      setError(err.message || 'An error occurred');
      setLoading(false);
    }
  };

  return (
    <Section id="contact" title="Contact Me">
      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            I'm always interested in hearing about new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <h4>Email</h4>
              <a href="mailto:ashwanthna07@gmail.com">ashwanthna07@gmail.com</a>
            </div>
            
            <div className="contact-method">
              <h4>GitHub</h4>
              <a href="https://github.com/ashwanth-achari" target="_blank" rel="noopener noreferrer">
                https://github.com/ashwanth-achari
              </a>
            </div>
            
            <div className="contact-method">
              <h4>LinkedIn</h4>
              <a href="https://www.linkedin.com/in/ashwanth-achari/" target="_blank" rel="noopener noreferrer">
                https://www.linkedin.com/in/ashwanth-achari/
              </a>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <h3>Send Me a Message</h3>
          
          {success && <div className="alert alert-success">{success}</div>}
          {error && <div className="alert alert-error">{error}</div>}
          
          <form onSubmit={onSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={onChange}
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                className="form-control"
                placeholder="Your Email"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={onChange}
                className="form-control"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            
            <Button 
              type="submit" 
              disabled={loading}
              className="submit-btn"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;