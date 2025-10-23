import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Features from './sections/Features';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
    </div>
  );
};

export default App;