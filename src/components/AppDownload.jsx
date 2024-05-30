import React from 'react';
import './AppDownload.css';

function AppDownload() {
  return (
    <section className="app-download">
      <h2>Get the Samaadhaan App on Your Phone</h2>
      <p>
        Samaadhaan connects expert chefs with aspiring cooks, fostering creativity, learning, and collaboration in a shared culinary space.
      </p>
      <div className="app-download-buttons">
        <a href="https://play.google.com/store" className="app-store-button">
          <img src="google-play-badge.svg" alt="Google Play" />
        </a>
        <a href="https://apps.apple.com/app-store" className="app-store-button">
          <img src="app-store-badge.svg" alt="App Store" />
        </a>
      </div>
    </section>
  );
}

export default AppDownload;