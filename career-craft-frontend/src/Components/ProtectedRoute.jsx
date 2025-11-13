import React from 'react';
import { useAuth } from '../contexts/AuthContext'; // Path to your context
import { Navigate, useLocation } from 'react-router-dom';

// This component accepts an 'element' prop, just like in your App.jsx
function ProtectedRoute({ element }) {
  const { isAuthenticated, loading } = useAuth(); // Using 'isAuthenticated' from your App.jsx
  const location = useLocation();

  if (loading) {
    // Show a loading message while your AuthContext is checking
    return <div>Loading session...</div>;
  }

  if (!isAuthenticated) {
    // If user is not logged in, redirect to login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If user is logged in, show the element (the page)
  return element;
}

export default ProtectedRoute;