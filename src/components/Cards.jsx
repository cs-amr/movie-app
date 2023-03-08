import { Link } from "react-router-dom";
import "../styles/components/cards.scss";
export default function Cards({ current, last, next }) {
  return (
    <div className="cards">
      <div className="cardsWrapper">
        <div className="prevCard">
          <div className="cardsPoster">
            <img
              src={`https://image.tmdb.org/t/p/w500${
                last?.poster_path || last?.profile_path
              }`}
              alt="prevImg"
            />
          </div>
        </div>
        <Link
          to={`/${current?.poster_path ? "movie" : "people"}/${current.id}`}
          className="currentCard"
        >
          <div className="cardsPoster">
            <img
              src={`https://image.tmdb.org/t/p/w500${
                current?.poster_path || current?.profile_path
              }`}
              alt=""
            />
          </div>
          <p>{`${current.title || current.name}`}</p>
        </Link>
        <div className="nextCard">
          <div className="cardsPoster">
            <img
              src={`https://image.tmdb.org/t/p/w500${
                next?.poster_path || next?.profile_path
              }`}
              alt="prevImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
