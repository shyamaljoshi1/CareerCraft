/*import React from 'react'

function Dashboard(){
    return (
        <div>
            Dashboard
        </div>
    )
}

export default Dashboard;

*/

import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Welcome to CareerCraft</h1>
      <p>
        CareerCraft helps you explore your career journey — from preparation
        to growth. Get access to curated resources, mentorship, and
        opportunities tailored to your goals.
      </p>
      <button className="explore-btn">Explore Now</button>
    </div>
  );
}

export default Dashboard;
