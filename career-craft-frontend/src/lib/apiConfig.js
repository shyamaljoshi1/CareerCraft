/**
 * API Configuration
 * Centralized API endpoint configuration for the frontend
 */

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH: {
    SIGNUP: `${API_BASE_URL}/api/auth/signup`,
    LOGIN: `${API_BASE_URL}/api/auth/login`,
    LOGOUT: `${API_BASE_URL}/api/auth/logout`,
    GET_ME: `${API_BASE_URL}/api/auth/me`,
  },
  
  // User endpoints
  USERS: {
    GET_ALL: `${API_BASE_URL}/api/users`,
    GET_BY_ID: (id) => `${API_BASE_URL}/api/users/${id}`,
    UPDATE: (id) => `${API_BASE_URL}/api/users/${id}`,
  }
};

/**
 * Helper function to get authorization header
 */
export const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
};

/**
 * Helper function to make authenticated API calls
 */
export const apiCall = async (url, options = {}) => {
  const headers = getAuthHeader();
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...headers,
        ...options.headers
      }
    });

    const data = await response.json();

    // If token is invalid, clear localStorage and redirect to login
    if (!response.ok && response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }

    return { response, data };
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};

export default API_ENDPOINTS;
