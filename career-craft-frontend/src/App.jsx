import { useState } from 'react';
import { Routes, Route } from "react-router-dom";

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
  const [theme, setTheme] = useState('day');

  return (
    <Routes>
      {/* 1. Set the new HomePage as the default "/" route */}
      <Route path="/" element={<HomePage />} />

      {/* 2. Keep your old dashboard on a new path (optional) */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* 3. Keep your dynamic domain routes */}
      <Route path="/domains/:domainId" element={<DomainPage />}>
        <Route index element={<DomainOverview />} />
        <Route path=":topicId" element={<TopicPage />} />
      </Route>
      <Route path="/quiz/:domainId" element={<QuizPage />} />
      <Route path="/experience" element={<ExperiencePage />} />

    </Routes>
  );
}

export default App;