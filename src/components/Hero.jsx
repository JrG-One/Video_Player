import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <img src="chef.png" alt="Chef" className="chef-image" />
      <div className="hero-content">
        <h1>Enhance your culinary experience</h1>
        <p>with India's best Cooking experts.</p>
      </div>
    </section>
  );
}

export default Hero;