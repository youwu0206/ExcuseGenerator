import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
      <Link to="/" style={{ marginRight: '1rem' }}>Generate</Link>
      <Link to="/saved">Saved</Link>
    </nav>
  );
}

export default NavBar;