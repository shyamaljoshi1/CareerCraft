import React, { useState, useEffect } from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import DomainCard from '../../Components/DomainCard/DomainCard';
import { getAllDomains, waitForDomains } from '../../data/allDomains';
import './HomePage.css';

function HomePage() {
  const [domains, setDomains] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        // Wait for domains to be loaded from the API
        await waitForDomains();
        // Then get the domains and set state
        const allDomainsData = getAllDomains();
        setDomains(allDomainsData);
      } catch (error) {
        console.error('Error loading domains on HomePage:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <div className="homepage">
        <Navbar />
        <div className="hero-section">
          <h1 className="hero-title">Your Compass in the World of Tech</h1>
          <p className="hero-subtitle">Loading domains...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="homepage">
      <Navbar /> {/* Your existing Navbar */}

      {/* 1. Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Your Compass in the World of Tech</h1>
        <p className="hero-subtitle">
          Confused about starting a career in IT. We provide clear roadmaps, 
          curated resources, and expert insights for every domain, from
          Cybersecurity to Data Science. Find all you need to excel in your interested domain here.
        </p>
      </div>

      {/* 2. Domain Grid Section */}
      <div className="domain-grid-container">
        <h2 className="grid-title">Explore All Domains</h2>
        <div className="domain-grid">
          {domains.map((domain) => (
            <DomainCard key={domain.id} domain={domain} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;