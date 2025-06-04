import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Generate</Link>
        </li>
        <li>
          <Link to="/saved">Saved</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
