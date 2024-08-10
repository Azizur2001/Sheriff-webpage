import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';


const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>SHERIFF'S CLASSICAL </h1>
        <h2>CUTZ INC.</h2>
        <Link to="/appointment" className="book-now-button">Book Now</Link>
        </div>
    </div>
  );
};

export default HeroSection;



