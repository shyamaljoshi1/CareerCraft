import React from 'react';
import { Link } from 'react-router-dom';
import './Roadmap.css'; 

function Roadmap({ topics }) {
  return (
    <div className="roadmap-horizontal-container">
      <ol className="roadmap-horizontal-list">
        {topics.map((topic, index) => (
          <li key={topic.id}>
            <Link to={topic.route} className="roadmap-horizontal-step">
              <div className="step-number">{index + 1}</div>
              <div className="step-title">{topic.title}</div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Roadmap;