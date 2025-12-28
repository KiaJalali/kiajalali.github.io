import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AuraGridBackground from './AuraGridBackground';
import Home from './Home';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <AuraGridBackground />

        {/* Header */}
        <header className="header">
          <div className="header-left">
            <Link to="/" className="site-title">kia jalali</Link>
          </div>
          <nav className="header-right">
            <Link to="/contact" className="nav-link">resume</Link>
            <a
              href="https://www.linkedin.com/in/kiajalali"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              linkedin
            </a>
            <a
              href="https://github.com/KiaJalali"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              github
            </a>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="footer">
          <div className="footer-left">ʕ•ᴥ•ʔ</div>
          <div className="footer-right">kia jalali</div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
