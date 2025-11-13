import React, { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar'; // Your existing Navbar
import DomainSidebar from './DomainSidebar'; // The Domain-specific sidebar

// Import from the correct location - allDomains.js
import { getDomainData, waitForDomains } from '../../data/allDomains'; 

import './DomainPage.css';

function DomainPage() {
  const { domainId } = useParams();
  const [domainData, setDomainData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDomain = async () => {
      try {
        // Wait for domains to load from API
        await waitForDomains();
        // Then get the specific domain
        const domain = getDomainData(domainId);
        setDomainData(domain);
      } catch (error) {
        console.error('Error loading domain:', error);
      } finally {
        setLoading(false);
      }
    };

    loadDomain();
  }, [domainId]);

  if (loading) {
    return (
      <div className="domain-layout">
        <Navbar />
        <div className="domain-main">
          <div className="domain-content">
            <p>Loading domain...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!domainData) {
    return (
      <div className="domain-layout">
        <Navbar />
        <div className="domain-main">
          <div className="domain-content">
            <p>Domain not found. Check your URL.</p>
          </div>
        </div>
      </div>
    );
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