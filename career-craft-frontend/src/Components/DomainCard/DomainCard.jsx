import React from 'react';
import { Link } from 'react-router-dom';
import './DomainCard.css';

// Import all domain images
import machinelearning from '../../assets/machinelearning.JPG';
import blockchain from '../../assets/blockchain.JPG';
import cybersecurity from '../../assets/cybersecurity.jpg';
import datascience from '../../assets/datascience.JPG';
import devops from '../../assets/devops.JPG';
import cloudcomputing from '../../assets/cloudcomputing.JPG';
import iot from '../../assets/iot.JPG';
import development from '../../assets/development.JPG';
import softwareengineering from '../../assets/development.JPG'

// Map domain IDs to imported image files
const imageMap = {
  machinelearning,
  blockchain,
  cybersecurity,
  datascience,
  devops,
  cloudcomputing,
  iot,
  development,
  softwareengineering
};

// We'll create a simple placeholder icon based on the first two letters
const getInitials = (title) => {
  const words = title.split(' ');
  if (words.length > 1) {
    return words[0][0] + words[1][0];
  }
  return title.substring(0, 2);
};

function DomainCard({ domain }) {
  // Truncate long descriptions
  const shortDescription = domain.description.length > 120
    ? domain.description.substring(0, 120) + '...'
    : domain.description;

  // Get the imported image or use a fallback
  const imageUrl = imageMap[domain.id] || domain.imageUrl;

  return (
    <div className="domain-card">
      <img src={imageUrl} alt={domain.title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{domain.title}</h3>
        <p className="card-description">{shortDescription}</p>
        <Link to={`/domains/${domain.id}`} className="card-button">
          Read Now
        </Link>
      </div>
    </div>
  );
}

export default DomainCard;