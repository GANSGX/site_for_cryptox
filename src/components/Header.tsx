import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(450);

  const textToType = 'CryptoX';

  useEffect(() => {
    const handleTyping = () => {
      const fullText = textToType;

      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 180 : 450);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 4500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <header className="header">
      <div className="header-container">
        <a href="#hero" className="logo">
          {displayText}
          <span className="cursor">|</span>
        </a>

        <nav className="nav">
          <a href="#hero" className="nav-link">
            <span className="nav-link-text">Главная</span>
          </a>
          <a href="#about" className="nav-link">
            <span className="nav-link-text">О проекте</span>
          </a>
          <a href="#team" className="nav-link">
            <span className="nav-link-text">О команде</span>
          </a>
          <a href="#docs" className="nav-link">
            <span className="nav-link-text">Документация</span>
          </a>
          <a href="#web" className="nav-link">
            <span className="nav-link-text">Веб версия</span>
          </a>
          <a href="#install" className="nav-link nav-button">
            <span className="nav-link-text">Установить</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;