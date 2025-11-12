import { Routes, Route } from "react-router-dom";

// Auth imports
import Login from './pages/Auth/Login.jsx';
import Signup from './pages/Auth/Signup.jsx';

// Context imports
import { useAuth } from './contexts/AuthContext';

// Protection imports
import ProtectedRoute from './Components/ProtectedRoute.jsx';

// 1. Import your new HomePage
import HomePage from './pages/HomePage/HomePage.jsx'; 
import Dashboard from './pages/Dashboard/Dashboard.jsx';
import QuizPage from './pages/QuizPages/QuizPages.jsx';
import ExperiencePage from './pages/ExperiencePage/ExperiencePage.jsx';


// 2. Import your Domain page components
import DomainPage from './Components/Domain/DomainPage.jsx'; // Adjust path if needed
import DomainOverview from './Components/Domain/DomainOverview.jsx';
import TopicPage from './Components/Domain/TopicPage.jsx';

import './App.css';

function App() {
  const { isAuthenticated, loading } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* 1. Set the new HomePage as the default "/" route */}
      <Route path="/" element={<HomePage />} />

      {/* Protected Routes */}
      <Route 
        path="/dashboard" 
        element={<ProtectedRoute element={<Dashboard />} />} 
      />

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