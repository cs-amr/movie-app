import React from "react";
import { AiFillStar } from "react-icons/ai";
import "../styles/components/showcard.scss";
export default function ShowCard() {
  return (
    <div className="showCard">
      <span>
        <AiFillStar color="#ffb43a" />
        7.5
      </span>
      <p>the show name </p>
    </div>
  );
}
