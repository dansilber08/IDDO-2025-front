import './styles/stylesLanding.css';
import walletLogo from '../Assets/wallet.svg';

// Importar Raleway desde Google Fonts
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

export default function Landing() {
  return (
    <div className="landing-container">
      {/* Header/Navigation */}
      <header className="header">
        <div className="header-content">
          <div className="logo">IDDO</div>
          <nav className="nav-menu">
            <a href="#programa" className="nav-link active">Programa</a>
            <a href="#sobre" className="nav-link active">Sobre Nosotros</a>
            <a href="#ayuda" className="nav-link active">Ayuda</a>
          </nav>
          <div className="header-actions">
            <button className="btn-download">
              Descargar App
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
            <h1 className="hero-title">
              <span>La mejor</span>
              <br />
              <strong>billetera virtual</strong>
              <br />
              <span>para pequeños</span>
              <br />
              <span>emprendedores</span>
            </h1>

            <a className="app-store-badge" href="#descargar" aria-label="Descárgalo en App Store">
              <svg className="apple-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className="badge-text">
                <span className="badge-small">Descárgalo en</span>
                <span className="badge-large">App Store</span>
              </span>
            </a>
          </div>

          {/* Right Section - Visual */}
          <div className="right-section">
            <div className="hero-visual">
              <div className="hero-shape" />
              <img className="wallet-image" src={walletLogo} alt="Logo billetera IDDO" />
              <div className="hero-quote">“Finanzas desde pequeños.”</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
