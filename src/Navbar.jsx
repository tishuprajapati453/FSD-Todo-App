import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav
      style={{
        display: 'flex',
        gap: '20px',
        padding: '15px',
        backgroundColor: darkMode ? '#111' : '#333',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
        Home
      </Link>
      <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>
        About
      </Link>
      <button onClick={toggleTheme} style={{ marginLeft: '20px' }}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </nav>
  );
}

export default Navbar;