import React from 'react';
import Aurora from '../components/Aurora';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <Aurora
        colorStops={["#8b5cf6", "#ec4899", "#6366f1"]}
        blend={0.5}
        amplitude={0.9}
        speed={0.1}
      />
    </section>
  );
};

export default Hero;