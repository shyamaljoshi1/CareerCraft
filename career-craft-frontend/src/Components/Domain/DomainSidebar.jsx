import React from 'react';
import { NavLink } from 'react-router-dom';
import './DomainSidebar.css';

// This is a NEW sidebar, separate from your main static sidebar.
// It dynamically builds links from the domain's 'topics' array.

function DomainSidebar({ domain }) {
  return (
    <div className="domain-sidebar">
      <h3 className="domain-sidebar-title">{domain.title}</h3>
      <nav className="domain-sidebar-nav">
        {/* Link to the domain's main overview page */}
        <NavLink 
          to={`/domains/${domain.id}`}
          className="domain-sidebar-link"
          end // 'end' prop ensures this is only active on the exact path
        >
          Overview
        </NavLink>
        
        {/* Map over all the topics from our JSON */}
        {domain.topics.map((topic) => (
          <NavLink
            key={topic.id}
            to={topic.route} // e.g., /domains/cybersecurity/intro
            className="domain-sidebar-link"
          >
            {topic.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default DomainSidebar;