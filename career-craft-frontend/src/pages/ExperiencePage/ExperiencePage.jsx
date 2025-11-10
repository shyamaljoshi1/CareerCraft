import React from 'react';
import Navbar from   '../../Components/Navbar/Navbar'; // Your existing Navbar
import TestimonialCard from '../../Components/TestimonialCard/TestimonialCard';
import { testimonials } from '../../data/testimonials';
import '../../Components/TestimonialCard/TestimonialCard.css'; // Import the grid styles
import './ExperiencePage.css'; // New CSS for the page itself

function ExperiencePage() {
  return (
    <div className="experience-page">
      <Navbar />
      
      <div className="experience-header">
        <h1>Success Stories</h1>
        <p>Get inspired by professionals who are thriving in the tech industry. Let their journey motivate yours.</p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}

export default ExperiencePage;