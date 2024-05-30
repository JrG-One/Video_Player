import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/for-whom">For Whom</Link>
          </li>
          <li>
            <Link to="/get-the-app">Get the App</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;