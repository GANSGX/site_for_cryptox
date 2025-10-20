import React, { useEffect, useRef } from 'react';
import { Shield, Eye, Lock } from 'lucide-react';
import Aurora from '../components/Aurora';
import './Hero.css';

const Hero: React.FC = () => {
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const text3Ref = useRef<HTMLSpanElement>(null);

  const finalText1 = 'Приватность в интернете стала роскошью, а не правом.';
  const finalText2 = 'Мы вернули её вам. Надёжное шифрование и нулевой след.';
  const finalText3 = 'Ваша переписка остаётся вашей. Всегда.';

  useEffect(() => {
    const typeText = (
      element: HTMLElement | null,
      text: string,
      startDelay: number
    ) => {
      if (!element) return;

      setTimeout(() => {
        let index = 0;

        const interval = setInterval(() => {
          if (index < text.length) {
            element.textContent = text.substring(0, index + 1) + '|';
            index++;
          } else {
            element.textContent = text; // Убираем курсор в конце
            clearInterval(interval);
          }
        }, 70); // 70ms на символ
      }, startDelay);
    };

    // Запускаем строки последовательно
    const delay1 = 300;
    const delay2 = delay1 + finalText1.length * 70 + 200;
    const delay3 = delay2 + finalText2.length * 70 + 200;

    typeText(text1Ref.current, finalText1, delay1);
    typeText(text2Ref.current, finalText2, delay2);
    typeText(text3Ref.current, finalText3, delay3);
  }, []);

  return (
    <section className="hero-section" id="hero">
      <Aurora
        colorStops={["#6366f1", "#8b5cf6", "#4338ca"]}
        blend={0.5}
        amplitude={0.5}
        speed={0.5}
      />

      <div className="hero-content">
        <h1 className="hero-title">
          Общайся свободно.<br />
          Остайся невидимым.
        </h1>

        <div className="hero-description-badge">
          <p className="hero-description">
            <span ref={text1Ref}></span><br />
            <span ref={text2Ref} className="hero-description-highlight"></span><br />
            <span ref={text3Ref}></span>
          </p>
        </div>

        <div className="hero-buttons">
          <button className="hero-button primary">
            <span>Скачать CryptoX</span>
            <span className="button-arrow">→</span>
          </button>
          <button className="hero-button secondary">
            <span>Попробовать веб-версию</span>
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <Shield className="stat-icon" size={40} strokeWidth={1.5} />
            <div className="stat-value">Многослойная защита</div>
            <div className="stat-label">
              Комбинация алгоритмов военного класса с постоянной ротацией ключей.<br />
              Каждое сообщение шифруется уникально. Взлом одного не открывает остальные.<br />
              <span className="stat-tech">XChaCha20-Poly1305, AES-256-GCM, Signal Protocol</span>
            </div>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <Eye className="stat-icon" size={40} strokeWidth={1.5} />
            <div className="stat-value">Zero-Knowledge</div>
            <div className="stat-label">
              Сервер физически не может прочитать ваши данные.<br />
              Ключи только на вашем устройстве. Даже мы не знаем, о чем вы пишете.<br />
              <span className="stat-tech">E2EE, Perfect Forward Secrecy, Hardware Security</span>
            </div>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-item">
            <Lock className="stat-icon" size={40} strokeWidth={1.5} />
            <div className="stat-value">Анти-форензика</div>
            <div className="stat-label">
              Метаданные не существуют. IP адреса не сохраняются.<br />
              Следы уничтожаются мгновенно. Даже при изъятии серверов — ничего не найдут.<br />
              <span className="stat-tech">Tor Integration, Sealed Sender, RAM-only</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;