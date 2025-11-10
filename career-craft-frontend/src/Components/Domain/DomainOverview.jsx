import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDomainData } from '../../data/cybersecurityDomain';
import Roadmap from './Roadmap'; // <-- 1. Import the new component
import './DomainContent.css'; 


function DomainOverview() {
  const { domainId } = useParams();
  const domain = getDomainData(domainId);

  if (!domain) return null;

  return (
    // Use a React Fragment to render multiple sections
    <>
      <div className="domain-overview">
        <h1 className="content-title">{domain.title}</h1>
        <p className="content-description">{domain.description}</p>
        <Link to={domain.quizRoute} className="quiz-button">
          Take the {domain.title} Quiz
        </Link>
      </div>

      {/* --- 2. Add this new section --- */}
      <div className="roadmap-section">
        <hr className="section-divider" />
        <h2 className="roadmap-title">Learning Roadmap</h2>
        <Roadmap topics={domain.topics} />
      </div>
      {/* ------------------------------- */}
    </>
  );
}

export default DomainOverview;