import { Link } from "react-router-dom";
import "../styles/components/morenav.scss";
export default function MoreNav() {
  return (
    <nav className="morenav">
      <ul>
        <li>
          <Link to="/genres">Genres</Link>
        </li>
        <li>
          <Link to="/upcoming">Upcoming</Link>
        </li>
        <li>
          <Link to="/toprated">Top Rated</Link>
        </li>
      </ul>
    </nav>
  );
}
