import Navbar from '@/Components/Navbar/Navbar';
import './Dashboard.css';
import { useState } from 'react';
import Sidebar from '@/Components/Sidebar/Sidebar';


function Dashboard() {
  const [theme, setTheme] = useState('day');
  return (
    <div className={`app-container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <div className="main-layout">
        <Sidebar />
        <div className="content-area">
          <div className="dashboard">
            <h1>Welcome to CareerCraft</h1>
            <p>
              CareerCraft helps you explore your career journey — from preparation
              to growth. Get access to curated resources, mentorship, and
              opportunities tailored to your goals.
            </p>
            <button className="explore-btn">Explore Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
