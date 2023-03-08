import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../styles/components/showcard.scss";
export default function ShowCard({ show }) {
  return (
    <Link
      to={`/tvshows/${show?.id}`}
      className="showCard"
      style={{
        backgroundImage: `
          url(https://image.tmdb.org/t/p/w500${show?.backdrop_path}  `,
      }}
    >
      <span>
        <AiFillStar color="#ffb43a" />
        {(show?.vote_average).toFixed(1)}
      </span>
      <p>{show?.name}</p>
    </Link>
  );
}
