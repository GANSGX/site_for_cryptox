import React, { useState, useEffect, useRef } from 'react';
import { Github, ChevronLeft, ChevronRight, Code2, Terminal, Database, Shield } from 'lucide-react';
import './Team.css';

const Team: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<number | null>(null);

  const timelineData = [
    {
      period: 'Сентябрь 2025',
      title: 'Исследование и проектирование',
      description: 'Проект начался с глубокого анализа существующих решений. Изучал архитектуру популярных мессенджеров — Signal (отличная криптография, но привязка к телефону), Telegram (быстрый, но серверное шифрование), WhatsApp (сбор метаданных), Matrix (децентрализация, но сложность).',
      details: [
        'Анализ Signal, Telegram, WhatsApp, Matrix',
        'Определение ключевых проблем',
        'Составление технического задания',
        'Выбор технологического стека'
      ],
      status: 'completed',
      icon: <Terminal size={32} />
    },
    {
      period: 'Сентябрь - Октябрь 2025',
      title: 'Разработка backend и криптографического ядра',
      description: 'Основная работа велась над серверной частью и реализацией криптографических протоколов.',
      details: [
        'REST API на Node.js + Express + TypeScript',
        'PostgreSQL + Redis для данных',
        'Signal Protocol — E2EE шифрование',
        'X3DH + Double Ratchet Algorithm',
        'JWT аутентификация + Bcrypt',
        'Docker + Nginx инфраструктура'
      ],
      status: 'completed',
      icon: <Database size={32} />
    },
    {
      period: 'Конец октября 2025',
      title: 'Frontend разработка',
      description: 'После завершения основной части backend перешел к клиентской части.',
      details: [
        'React 18 + TypeScript + Vite',
        'Socket.io для WebSocket',
        'WebCrypto API для криптографии',
        'Responsive UI/UX дизайн',
        'IndexedDB для локального хранения'
      ],
      status: 'completed',
      icon: <Code2 size={32} />
    },
    {
      period: 'Ноябрь 2025 - Настоящее',
      title: 'Активная разработка и расширение',
      description: 'Основная инфраструктура готова, но впереди еще много работы.',
      details: [
        '🔄 Групповые чаты с Sender Keys',
        '🔄 Обмен файлами с E2EE',
        '🔄 Voice сообщения',
        '📋 Desktop приложение (Electron)',
        '📋 Mobile apps (React Native)',
        '📋 Video/Voice звонки (WebRTC)',
        '📋 Tor интеграция',
        '📋 Security audit'
      ],
      status: 'in-progress',
      icon: <Shield size={32} />
    }
  ];

  // Запуск таймера
  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % timelineData.length);
    }, 15000);
  };

  // Сброс таймера при ручном свайпе
  const resetTimer = () => {
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [timelineData.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % timelineData.length);
    resetTimer();
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + timelineData.length) % timelineData.length);
    resetTimer();
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    resetTimer();
  };

  return (
    <section className="team-section" id="team">
      <div className="team-container">
        <div className="team-header">
          <h2 className="team-title">О команде</h2>
          <p className="team-subtitle">
            От идеи до реализации. Один человек, одна миссия —<br />
            создать мессенджер, который уважает приватность.
          </p>
        </div>

        {/* Timeline Carousel */}
        <div className="timeline-carousel">
          <button className="carousel-button prev" onClick={prevSlide} aria-label="Previous">
            <ChevronLeft size={28} strokeWidth={2.5} />
          </button>

          <div className="timeline-track">
            <div 
              className="timeline-slides"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {timelineData.map((item, index) => (
                <div 
                  key={index} 
                  className={`timeline-slide ${item.status} ${index === currentSlide ? 'active' : ''}`}
                >
                  <div className="timeline-slide-content">
                    <div className="timeline-icon">
                      {item.icon}
                    </div>

                    <div className="timeline-period">{item.period}</div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-description">{item.description}</p>
                    
                    <ul className="timeline-details">
                      {item.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>

                    <div className="timeline-status">
                      {item.status === 'completed' && (
                        <span className="status-badge completed">✓ Завершено</span>
                      )}
                      {item.status === 'in-progress' && (
                        <span className="status-badge in-progress">⟳ В разработке</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-button next" onClick={nextSlide} aria-label="Next">
            <ChevronRight size={28} strokeWidth={2.5} />
          </button>

          {/* Progress Dots */}
          <div className="carousel-dots">
            {timelineData.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Developer Card */}
        <div className="developer-card">
          <div className="developer-card-glow"></div>
          <div className="developer-card-inner">
            <div className="developer-header">
              <div className="developer-avatar">
                <div className="avatar-glow"></div>
                <div className="avatar-inner">
                  <Code2 size={36} strokeWidth={2} />
                </div>
              </div>
              <div className="developer-info">
                <div className="developer-badge">
                  <Terminal size={16} />
                  <span>Developer</span>
                </div>
                <h3 className="developer-name">Создатель проекта</h3>
                <p className="developer-role">Студент 4 курса • Fullstack Developer</p>
              </div>
            </div>

            <div className="developer-quote">
              <div className="quote-icon">"</div>
              <p>Начал как дипломную работу. В процессе понял масштаб проблемы приватности 
              в современных мессенджерах. Решил не ограничиваться 'галочкой' для диплома.</p>
            </div>

            <div className="developer-journey">
              <h4 className="journey-title">
                <Shield size={20} />
                Путь разработки
              </h4>
              <ul>
                <li>
                  <span className="journey-icon">📚</span>
                  Изучаю криптографические протоколы и research papers
                </li>
                <li>
                  <span className="journey-icon">👥</span>
                  Консультируюсь с опытными разработчиками и экспертами
                </li>
                <li>
                  <span className="journey-icon">🔍</span>
                  Получаю код-ревью от senior девелоперов
                </li>
                <li>
                  <span className="journey-icon">🌐</span>
                  Участвую в open source сообществах
                </li>
              </ul>
            </div>

            <div className="developer-reality">
              <div className="reality-block honesty">
                <strong>Честно:</strong> Да, это мой первый проект такого масштаба. Да, делаю ошибки и учусь на них. 
                Но подхожу максимально ответственно — потому что речь о безопасности людей.
              </div>
              
              <div className="reality-block openness">
                <strong>Открыто:</strong> Код открыт для аудита. Архитектурные решения задокументированы. 
                Приветствуется фидбэк от экспертов.
              </div>
            </div>

            <div className="developer-tech-stack">
              <h4 className="stack-title">
                <Database size={20} />
                Tech Stack
              </h4>
              <div className="tech-grid">
                <div className="tech-category">
                  <div className="category-header">
                    <Terminal size={16} />
                    <strong>Backend</strong>
                  </div>
                  <span>Node.js, Express, TypeScript, PostgreSQL, Redis, Socket.io, Docker, Nginx</span>
                </div>
                <div className="tech-category">
                  <div className="category-header">
                    <Code2 size={16} />
                    <strong>Frontend</strong>
                  </div>
                  <span>React 18, TypeScript, Vite, Socket.io Client, WebCrypto API</span>
                </div>
                <div className="tech-category">
                  <div className="category-header">
                    <Shield size={16} />
                    <strong>Security</strong>
                  </div>
                  <span>Signal Protocol, X3DH, Double Ratchet, XChaCha20-Poly1305, Ed25519, JWT, Bcrypt</span>
                </div>
              </div>
            </div>

            <div className="developer-footer">
              <a 
                href="https://github.com/GANSGX" 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
              >
                <Github size={20} />
                <span>View on GitHub</span>
                <ChevronRight size={16} />
              </a>
              <div className="footer-badges">
                <span className="badge">Open Source</span>
                <span className="badge">Audit Welcome</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;