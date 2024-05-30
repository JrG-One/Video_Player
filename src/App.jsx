import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Chefs from './components/Chefs';
import Recipes from './components/Recipes';
import Tiffinwala from './components/Tiffinwala';
import AppDownload from './components/AppDownload';
import VisionMission from './components/VisionMission';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <h1>Test</h1>
      <Header />
      <Hero />
      <About />
      <Features />
      <Chefs />
      <Recipes />
      <Tiffinwala />
      <AppDownload />
      <VisionMission />
      <Footer />
    </div>
  );
}

export default App;