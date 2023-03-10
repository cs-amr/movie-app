import { Link } from "react-router-dom";
import "../styles/components/personcard.scss";
export default function PersonCard({ person }) {
  return (
    <Link
      to={`/people/${person?.id}`}
      className="personCard"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/w500${person?.profile_path}")`,
      }}
    >
      <p>{person?.name}</p>
    </Link>
  );
}
