import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        gap: '20px',
        padding: '15px',
        backgroundColor: '#333',
        justifyContent: 'center',
      }}
    >
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
        Home
      </Link>
      <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>
        About
      </Link>
    </nav>
  );
}

export default Navbar;