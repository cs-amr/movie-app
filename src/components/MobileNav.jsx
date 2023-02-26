import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import { BsFillPeopleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "../styles/components/mobilenav.scss";
export default function MobileNav() {
  return (
    <nav className="mobilenav">
      <ul>
        <li>
          <NavLink to="/">
            <AiFillHome />
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies">
            <MdLocalMovies />
          </NavLink>
        </li>
        <li>
          <NavLink to="/tvshows">
            <FiMonitor />
          </NavLink>
        </li>
        <li>
          <NavLink to="/people">
            <BsFillPeopleFill />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
