import React from 'react';
import { useParams } from 'react-router-dom';
import { getTopicData } from '../../data/cybersecurityDomain';
import './DomainContent.css'; 

function TopicPage() {
  const { domainId, topicId } = useParams();
  const topic = getTopicData(domainId, topicId);

  if (!topic) {
    return <div>Topic not found</div>;
  }

  // Helper to render resource lists
  const renderResourceList = (resources, title) => (
    <div className="resource-section">
      <h3>{title}</h3>
      <ul>
        {resources.map((res, index) => (
          <li key={index}>
            <a href={res.link} target="_blank" rel="noopener noreferrer">
              {res.title}
            </a>
            {res.type && <span className="resource-type">{res.type}</span>}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="topic-page">
      <h1 className="content-title">{topic.title}</h1>
      <p className="content-description">{topic.summary}</p>

      {/* Resources */}
      {topic.freeResources.length > 0 &&
        renderResourceList(topic.freeResources, 'Free Resources')}
      {topic.paidResources.length > 0 &&
        renderResourceList(topic.paidResources, 'Paid Courses')}

      {/* Projects */}
      {topic.projects.length > 0 && (
        <div className="resource-section">
          <h3>Popular Projects</h3>
          <ul>
            {topic.projects.map((proj, index) => (
              <li key={index}>
                <strong>{proj.title}:</strong> {proj.desc}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Organizations */}
      {topic.organizations.length > 0 && (
        <div className="resource-section">
          <h3>Key Organizations</h3>
          <ul>
            {topic.organizations.map((org, index) => (
              <li key={index}>
                <strong>{org.name}:</strong> {org.desc}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TopicPage;