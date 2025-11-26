const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Fetch all projects
export const getProjects = async (query = '') => {
  const response = await fetch(`${API_URL}/projects${query}`);
  const data = await response.json();
  return data;
};

// Fetch single project by slug
export const getProjectBySlug = async (slug) => {
  const response = await fetch(`${API_URL}/projects/${slug}`);
  const data = await response.json();
  return data;
};

// Submit contact form
export const submitContact = async (contactData) => {
  const response = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactData),
  });
  const data = await response.json();
  return data;
};