import './App.css';
import './styles/Pages.css';
import About from './pages/About';
import Teachings from './pages/Teachings';
import Ciphers from './pages/Ciphers';
import Events from './pages/Events';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="binary-overlay"></div>
        <h1>Church of Cryptography</h1>
        <p className="subtitle">Where Math Meets Faith</p>
        
        <nav className="main-nav">
          <a href="#about" className="nav-link">About</a>
          <a href="#teachings" className="nav-link">Teachings</a>
          <a href="#ciphers" className="nav-link">Sacred Ciphers</a>
          <a href="#events" className="nav-link">Events</a>
          <a href="https://matrix.to/#/#churchofcrypto:matrix.org" className="nav-link" target="_blank" rel="noopener noreferrer">Join Us</a>
        </nav>

        <div className="crypto-symbol">
          <div className="key-symbol">⚿</div>
        </div>
        
        <p className="crypto-quote">
          "In encryption we trust, through code we transcend."
        </p>
      </header>

      <main>
        <About />
        <Teachings />
        <Ciphers />
        <Events />
      </main>
    </div>
  );
}

export default App;
