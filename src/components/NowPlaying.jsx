import React from "react";
import MovieCard from "./MovieCard";
import "../styles/components/nowplaying.scss";
export default function NowPlaying() {
  return (
    <section className="nowPlaying">
      <h3>Now playing Movies</h3>
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
    </section>
  );
}
