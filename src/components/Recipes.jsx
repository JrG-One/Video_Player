import React from 'react';
import './Recipes.css';

function Recipes() {
  return (
    <section className="recipes">
      <h2>Recipe Recommendations</h2>
      <ul>
        <li>
          <img src="veg-paneer-manchurian.jpg" alt="Veg Paneer Manchurian" className="recipe-image" />
          <div className="recipe-info">
            <h3>Veg Paneer Manchurian</h3>
            <p>Chef Name</p>
          </div>
        </li>
        {/* Add more recipes here */}
      </ul>
    </section>
  );
}

export default Recipes;