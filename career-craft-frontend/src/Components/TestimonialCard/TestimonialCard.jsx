import React from 'react';
import './TestimonialCard.css';

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="card-header">
        <img src={testimonial.profileImage} alt={testimonial.name} className="profile-image" />
        <div className="info">
          <h3 className="name">{testimonial.name}</h3>
          <p className="role-company">{testimonial.role} @ {testimonial.company}</p>
        </div>
        {/* Company Logo in place of LinkedIn button */}
        <a 
          href={testimonial.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="company-logo-link"
          title={`View ${testimonial.name} on LinkedIn`}
        >
          <img src={testimonial.companyLogo} alt={`${testimonial.company} Logo`} className="company-logo" />
        </a>
      </div>
      <p className="testimonial-text">{testimonial.text}</p>
    </div>
  );
}

export default TestimonialCard;