import React from 'react';
import MagicBento, { type BentoCardProps } from '../components/MagicBento';
import './Features.css';

const Features: React.FC = () => {
  const featuresData: BentoCardProps[] = [
    {
      color: 'rgba(10, 5, 25, 0.5)',
      title: 'Криптография военного класса',
      description: 'Signal Protocol с XChaCha20-Poly1305 — протокол, одобренный IETF и используемый в критической инфраструктуре. Perfect Forward Secrecy обеспечивает математическую невозможность ретроспективной расшифровки. Каждое сообщение защищено уникальным эфемерным ключом. Компрометация одного сеанса не влияет на безопасность остальных.',
      label: 'MILITARY-GRADE'
    },
    {
      color: 'rgba(10, 5, 25, 0.5)',
      title: 'Архитектура нулевого разглашения',
      description: 'Сервер лишён технической возможности дешифрования. Ключи существуют только на устройствах пользователей. RAM-only хранилище не оставляет артефактов.',
      label: 'ZERO-KNOWLEDGE'
    },
    {
      color: 'rgba(10, 5, 25, 0.5)',
      title: 'Полная прозрачность кода',
      description: 'Открытый код под MIT лицензией. Независимый аудит доступен криптографам. Отсутствие бэкдоров подтверждается математически.',
      label: 'OPEN SOURCE'
    },
    {
      color: 'rgba(10, 5, 25, 0.5)',
      title: 'Минимизация цифрового следа',
      description: 'Email требуется только для восстановления доступа — никаких дополнительных данных. Tor-интеграция маскирует сетевую активность. Sealed Sender шифрует метаданные отправителя на уровне протокола. Сервер не знает кто, кому и когда отправляет сообщения. Телеметрия отсутствует полностью.',
      label: 'PRIVACY-FIRST'
    },
    {
      color: 'rgba(10, 5, 25, 0.5)',
      title: 'Прямая передача без посредников',
      description: 'WebRTC P2P для голосовых вызовов. Аудиопоток идёт напрямую между устройствами. Адаптивный Opus-кодек работает при любом соединении.',
      label: 'PEER-TO-PEER'
    },
    {
      color: 'rgba(10, 5, 25, 0.5)',
      title: 'Эфемерные коммуникации',
      description: 'Время жизни от 5 секунд до 7 суток. Безвозвратное удаление после прочтения. Криптографическое затирание исключает форензический анализ.',
      label: 'EPHEMERAL'
    }
  ];

  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Инженерия конфиденциальности</h2>
          <p className="features-subtitle">
            Криптографическая стойкость на уровне государственных стандартов.<br />
            Архитектура спроектирована для противодействия целевому наблюдению.
          </p>
        </div>

        <MagicBento
          cardData={featuresData}
          textAutoHide={false}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={350}
          particleCount={15}
          glowColor="139, 92, 246"
        />
      </div>
    </section>
  );
};

export default Features;