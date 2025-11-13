import { Routes, Route } from "react-router-dom";
import { useEffect } from 'react';

// Auth imports
import Login from './pages/Auth/Login.jsx';
import Signup from './pages/Auth/Signup.jsx';

// Context imports
import { useAuth } from './contexts/AuthContext';

// Protection imports
import ProtectedRoute from './Components/ProtectedRoute.jsx';

// Page imports
import HomePage from './pages/HomePage/HomePage.jsx'; 
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import QuizPage from './pages/QuizPages/QuizPages.jsx';
import ExperiencePage from './pages/ExperiencePage/ExperiencePage.jsx';

// Domain page components
import DomainPage from './Components/Domain/DomainPage.jsx';
import DomainOverview from './Components/Domain/DomainOverview.jsx';
import TopicPage from './Components/Domain/TopicPage.jsx';

// Profile page
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx'; 

// Domain data loader
import { fetchAllDomains } from './data/allDomains';

import './App.css';

function App() {
  const { isAuthenticated, loading } = useAuth();

  // Load domains from MongoDB when app starts
  useEffect(() => {
    const loadDomains = async () => {
      try {
        await fetchAllDomains();
      } catch (error) {
        console.error('Failed to load domains:', error);
        // Optionally show error toast or notification
      }
    };

    loadDomains();
  }, []); // Run only once on component mount

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<HomePage />} />

      {/* Protected Routes */}
      <Route 
        path="/dashboard" 
        element={<ProtectedRoute element={<Dashboard />} />} 
      />

      {/* --- 2. ADD THE MISSING PROFILE ROUTE --- */}
      <Route 
        path="/profile" 
        element={<ProtectedRoute element={<ProfilePage />} />} 
      />
      {/* ---------------------------------------- */}

      <Route 
        path="/domains/:domainId" 
        element={<ProtectedRoute element={<DomainPage />} />}
      >
        <Route index element={<DomainOverview />} />
        <Route path=":topicId" element={<TopicPage />} />
      </Route>

      <Route 
        path="/quiz/:domainId" 
        element={<ProtectedRoute element={<QuizPage />} />} 
      />

      <Route 
        path="/experience" 
        element={<ProtectedRoute element={<ExperiencePage />} />} 
      />

    </Routes>
  );
}

export default App;