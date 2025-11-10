import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar'; // Your existing Navbar
import DomainSidebar from './DomainSidebar'; // The Domain-specific sidebar

// --- THIS IS THE LINE THAT FIXES THE ERROR ---
// We go up two folders (from /Components/Domain/ to /src/)
// then down to /data/
import { getDomainData } from '../../data/cybersecurityDomain'; 

import './DomainPage.css';

function DomainPage() {
  const { domainId } = useParams();
  
  // This line caused the old error, but will now work
  const domainData = getDomainData(domainId); 

  if (!domainData) {
    return <div>Domain not found. Check your URL.</div>; 
  }

  return (
    <div className="domain-layout">
      <Navbar />
      <div className="domain-main">
        <DomainSidebar domain={domainData} />
        <div className="domain-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DomainPage;