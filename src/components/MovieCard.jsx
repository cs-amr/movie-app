import React from "react";
import { AiFillStar } from "react-icons/ai";
import "../styles/components/moviecard.scss";
export default function MovieCard({ movie }) {
  return (
    <div
      className="movieCard"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/w500${movie?.backdrop_path}")`,
      }}
    >
      <span>
        <AiFillStar color="#ffb43a" />
        {movie?.vote_average}
      </span>
      <p>{movie?.original_title}</p>
    </div>
  );
}
