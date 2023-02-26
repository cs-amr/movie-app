import React from "react";
import { AiFillStar } from "react-icons/ai";
import "../styles/components/moviecard.scss";
export default function MovieCard() {
  return (
    <div className="movieCard">
      <span>
        <AiFillStar color="#ffb43a" />
        7.5
      </span>
      <p>the movie name </p>
    </div>
  );
}
