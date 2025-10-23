import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(450);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className={`header-container ${isMenuOpen ? 'menu-open' : ''}`}>
        <a href="#hero" className="logo">
          {displayText}
          <span className="cursor">|</span>
        </a>

        {isMobile && (
          <button 
            className={`burger-button ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
        )}

        <nav className={`nav ${isMobile && isMenuOpen ? 'nav-mobile-open' : ''} ${isMobile ? 'nav-mobile' : ''}`}>
          <a href="#hero" className="nav-link" onClick={() => isMobile && setIsMenuOpen(false)}>
            <span className="nav-link-text">Главная</span>
          </a>
          <a href="#about" className="nav-link" onClick={() => isMobile && setIsMenuOpen(false)}>
            <span className="nav-link-text">О проекте</span>
          </a>
          <a href="#team" className="nav-link" onClick={() => isMobile && setIsMenuOpen(false)}>
            <span className="nav-link-text">О команде</span>
          </a>
          <a href="#docs" className="nav-link" onClick={() => isMobile && setIsMenuOpen(false)}>
            <span className="nav-link-text">Документация</span>
          </a>
          <a href="#web" className="nav-link" onClick={() => isMobile && setIsMenuOpen(false)}>
            <span className="nav-link-text">Веб версия</span>
          </a>
          <a href="#install" className="nav-link nav-button" onClick={() => isMobile && setIsMenuOpen(false)}>
            <span className="nav-link-text">Установить</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;