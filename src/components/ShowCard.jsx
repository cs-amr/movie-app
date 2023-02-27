import React from "react";
import { AiFillStar } from "react-icons/ai";
import "../styles/components/showcard.scss";
export default function ShowCard({ show }) {
  return (
    <div
      className="showCard"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/w500${show?.backdrop_path}")`,
      }}
    >
      <span>
        <AiFillStar color="#ffb43a" />
        {show?.vote_average}
      </span>
      <p>{show?.name}</p>
    </div>
  );
}
