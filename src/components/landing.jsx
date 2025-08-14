import { useNavigate } from 'react-router-dom';
import './styles/stylesLanding.css';

// Importar Raleway desde Google Fonts
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Header/Navigation */}
      <header className="header">
        <div className="header-content">
          <div className="logo">IDDO</div>
          <nav className="nav-menu">
            <a href="#" className="nav-link active">Personas</a>
            <a href="#" className="nav-link">Empresas</a>
            <a href="#" className="nav-link">Ayuda</a>
          </nav>
          <div className="header-actions">
            <button className="btn-secondary">Robo y extravío</button>
            <button className="btn-download">
              Descargar app
              <span className="download-icon">↓</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          {/* Left Section - Text Content */}
          <div className="left-section">
            <h1 className="main-heading">
              <span className="highlight">Finanzas</span>
              <br />
              desde
              <br />
              <strong>Pequeños.</strong>
            </h1>
            
            <div className="download-buttons">
              <button className="btn-app-store">
                <div className="app-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div className="app-text">
                  <div className="app-available">Disponible en</div>
                  <div className="app-store-name">App Store</div>
                </div>
              </button>
              <button className="btn-play-store">
                <div className="app-icon">
                  <svg viewBox="0 0 24 24">
                    <path fill="#00DC82" d="M1.5,3.5v17c0,0.6 0.4,1.1 0.9,1.3l10.8-9.8L2.4,2.2C1.9,2.4 1.5,2.9 1.5,3.5z"/>
                    <path fill="#FF6B35" d="M13.8,12l-10.8,9.8l2.7,2.7c0.5,0.3 1.1,0.1 1.4-0.4L13.8,12z"/>
                    <path fill="#FFC107" d="M17.1,9.2c0.5-0.3 1.1-0.1 1.4,0.4l2.7,2.7c0.3,0.5 0.1,1.1-0.4,1.4L17.1,9.2z"/>
                    <path fill="#4CAF50" d="M13.8,12l-2.7,2.7c-0.3,0.5-0.1,1.1 0.4,1.4l2.7,2.7L13.8,12z"/>
                  </svg>
                </div>
                <div className="app-text">
                  <div className="app-available">Disponible en</div>
                  <div className="app-store-name">Play Store</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Section - Phone Mockup */}
          <div className="right-section">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="profile-section">
                  <div className="profile-pic">👩</div>
                  <div className="balance">$ 2.202</div>
                </div>
                <div className="keypad">
                  <div className="keypad-row">
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                  </div>
                  <div className="keypad-row">
                    <div className="key"></div>
                    <div className="key"></div>
                    <div className="key"></div>
                  </div>
                </div>
              </div>
              
              {/* Notification Bubble */}
              <div className="notification-bubble">
                <div className="notification-header">
                  <div className="notification-logo">i</div>
                  <span className="notification-time">Hace 5 min.</span>
                </div>
                <div className="notification-content">
                  <div className="notification-title">Nueva transaccion</div>
                  <div className="notification-message">
                    Sofía transfirió $2202.00 a Kiosko Cabildo.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
