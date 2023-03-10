import React from "react";
import { AiFillStar } from "react-icons/ai";
import "../styles/components/poster.scss";
export default function Poster({ poster }) {
  return (
    <div
      className="poster"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/w500${poster?.poster_path}")`,
      }}
    >
      <span>
        <AiFillStar color="#ffb43a" />
        {poster.vote_average}
      </span>
      <p>
        {poster.original_title ? poster.original_title : poster.original_name}
      </p>
    </div>
  );
}
