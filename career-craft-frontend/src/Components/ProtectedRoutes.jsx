import React from 'react';
import { useAuth } from '../../contexts/AuthContext'; // Path to your context
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children }) {
  // We get user and loading from YOUR AuthContext
  const { user, loading } = useAuth(); 
  const location = useLocation();

  if (loading) {
    return <div>Loading session...</div>;
  }

  if (!user) {
    // If not logged in, redirect to your existing login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If logged in, show the page
  return children;
}

export default ProtectedRoute;