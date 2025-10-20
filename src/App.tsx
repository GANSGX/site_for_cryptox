import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
    </div>
  );
};

export default App;