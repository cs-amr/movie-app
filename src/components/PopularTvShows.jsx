import React from "react";
import MovieCard from "./MovieCard";
import "../styles/components/nowplaying.scss";
export default function PopularTvShows() {
  return (
    <div className="popularTvShows">
      <h3>Popular Tv Shows</h3>
      <div className="sliderContainer">
        <div className="slider">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  );
}
