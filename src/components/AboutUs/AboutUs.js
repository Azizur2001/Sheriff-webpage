import React from 'react';
import './AboutUs.css'; // Make sure to create and link the CSS file
import aboutImage from '../../images/barber.png'; // Replace with the actual path to your image

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-image">
        <img src={aboutImage} alt="About Us" />
      </div>
      <div className="about-text">
        <h1>OUR STORY</h1>
        <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me and you can start adding your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.</p>
        <p>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me and you can start adding your own content and make changes to the font.</p>
      </div>
    </div>
  );
};

export default AboutUs;
