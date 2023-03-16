import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/SearchContext";
import "../styles/components/navbar.scss";
export default function Navbar() {
  const { searchIsOpen, setSearchIsOpen, keyword, setKeyword } =
    useGlobalContext();
  const refInput = useRef(null);
  return (
    <header>
      <Link
        to="/"
        className="
      roo"
      >
        Movies
      </Link>
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
      <div
        className="search-icon"
        onClick={() => {
          setSearchIsOpen(true);
        }}
      >
        <img src="/public/assets/icons8-search.svg" alt="" />
      </div>
      <div className="search-bar">
        <div className="search">
          <button
            onClick={() => {
              if (refInput.current.value) {
                setKeyword(refInput.current.value);
                setSearchIsOpen(true);
              }
            }}
          >
            <img src="/public/assets/icons8-search.svg" alt="" />
          </button>
          <input
            type="text"
            placeholder="search for movies and tvshows"
            ref={refInput}
          />
        </div>
      </div>
    </header>
  );
}
