
import { Link, useLocation } from 'react-router-dom';

function Navbar({ theme, toggleTheme, lang, toggleLang, text }) {
  const location = useLocation();

  return (
    <nav>
      <div className="logo">MyBank</div>
      <div className="nav-links">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>{text.home}</Link>
        <Link to="/movimenti" className={location.pathname === "/movimenti" ? "active" : ""}>{text.movimenti}</Link>
        <Link to="/bonifico" className={location.pathname === "/bonifico" ? "active" : ""}>{text.bonifico}</Link>
        
        <div style={{ display: 'flex', gap: '5px' }}>
          <button className="theme-btn" onClick={toggleLang} style={{fontSize: '0.9rem', fontWeight: 'bold'}}>
            {lang === 'it' ? 'EN' : 'IT'}
          </button>

          <button className="theme-btn" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
