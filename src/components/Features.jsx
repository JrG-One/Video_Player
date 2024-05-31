import React from 'react';
import './Features.css'; // Import your CSS for styling
import FeatureImage from '../assets/faeture.png'; // Specific image for Cooking Live Class

const featuresData = [
  {
    image: FeatureImage,
    text: 'Cooking Live Classes'
  },
  {
    image: FeatureImage,
    text: 'Live Cooking'
  },
  {
    image: FeatureImage,
    text: 'Recorded Cooking'
  },
  {
    image: FeatureImage,
    text: 'Recorded Cooking'
  },
  {
    image: FeatureImage,
    text: 'Recorded Cooking'
  },
  {
    image: FeatureImage,
    text: 'Recorded Cooking'
  },
  // ... Add data for other features with specific image imports
];

function Features() {
  return (
    <section className="features">
      <h2>Features Samaadhaan Offers</h2>
      <ul className="features-list"> 
        {featuresData.map((feature) => (
          <li key={feature.text}> 
            <img src={feature.image} alt={feature.text} /> 
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Features;
