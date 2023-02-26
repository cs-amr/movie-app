import { Link, NavLink } from "react-router-dom";
import "../styles/components/navbar.css";
export default function Navbar() {
  return (
    <header>
      <Link to="/">Movies</Link>
      <nav>
        <ul>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/tvshows">TV Shows</NavLink>
          </li>
          <li>
            <NavLink to="/people">People</NavLink>
          </li>
        </ul>
      </nav>
      <div className="search-icon">
        <img src="/src/assets/icons8-search.svg" alt="" />
      </div>
      <div className="search-bar">
        <div className="search">
          <button>
            <img src="/src/assets/icons8-search.svg" alt="" />
          </button>
          <input type="text" placeholder="search for movies and tvshows" />
        </div>
      </div>
    </header>
  );
}
