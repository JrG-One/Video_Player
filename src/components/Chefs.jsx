import React from 'react';
import './Chefs.css';

function Chefs() {
  return (
    <section className="chefs">
      <h2>Chefs Available with Us for Your Culinary Learning</h2>
      <ul>
        <li>
          <img src="chef1.jpg" alt="Chef 1" className="chef-image" />
          <div className="chef-info">
            <h3>Chef Amrita Raychandani</h3>
            <p>Indian cousin and Italian specialist</p>
          </div>
        </li>
        <li>
          <img src="chef1.jpg" alt="Chef 1" className="chef-image" />
          <div className="chef-info">
            <h3>Chef Amrita Raychandani</h3>
            <p>Indian cousin and Italian specialist</p>
          </div>
        </li>
        <li>
          <img src="chef1.jpg" alt="Chef 1" className="chef-image" />
          <div className="chef-info">
            <h3>Chef Amrita Raychandani</h3>
            <p>Indian cousin and Italian specialist</p>
          </div>
        </li>
        {/* Add more chefs here */}
      </ul>
    </section>
  );
}

export default Chefs;