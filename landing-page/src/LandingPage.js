// src/LandingPage.js

import React from 'react';
import './LandingPage.css';
import LoginPage from './LoginPage';

const LandingPage = () => {
  return (
    <div className='background'>
    <div className="landing-container">
      <header className="header">
        <h1>Welcome to My Stock-Market Landing Page</h1>
        <p>Your Market journey to awesomeness starts here.</p>
        <button className="cta-button">Get Started</button>
      </header>
      <section className="features">
        <h2>Features</h2>
        <div className="feature">
          <p>1.Pricing of securities </p>
        </div>
        <div className="feature">
          <p>2.Provides scope for speculation</p>
        </div>
        <div className="feature">
          <p>3.Economic Barometer </p>
        </div>
      </section>
      <div>
      <LoginPage />
    </div>
      <footer className="footer">
        <p>&copy; 2024 Stock-Market Company. All rights reserved.</p>
      </footer>
    </div>
    </div>
  );
};

export default LandingPage;
