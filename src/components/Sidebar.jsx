import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import { BsFillPeopleFill } from "react-icons/bs";
import { CgMore } from "react-icons/cg";
import { AiTwotoneStar } from "react-icons/ai";
import { FaCalendar } from "react-icons/fa";
import "../styles/components/sidebar.scss";
export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <aside className={sidebarOpen ? "open" : "aside"}>
      <div className="aside-toggle">
        <FaBars
          onClick={() => {
            setSidebarOpen(!sidebarOpen);
          }}
        />
        <h1>Movies</h1>
      </div>

      <div className="aside-links">
        <span>Menu</span>
        <ul>
          <li>
            <NavLink to="/" className="link">
              <AiFillHome />
              <p>Home</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className="link">
              <MdLocalMovies />
              <p>Movies</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tvshows" className="link">
              <FiMonitor />
              <p>Tv Shows</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/people" className="link">
              <BsFillPeopleFill />
              <p>People</p>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="more-links">
        <ul>
          <span>More</span>
          <li>
            <NavLink to="/upcoming" className="link">
              <FaCalendar />
              <p>Upcomming</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/toprated" className="link">
              <AiTwotoneStar />
              <p>Top Rated</p>
            </NavLink>
          </li>
          <li>
            <NavLink to="/genres" className="link">
              <CgMore />
              <p>Genres</p>
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
}
