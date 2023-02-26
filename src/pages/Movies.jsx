import React from "react";
import MoreNav from "../components/MoreNav";
import NowPlaying from "../components/NowPlaying";
import PopularMovies from "../components/PopularMovies";
export default function Movies() {
  return (
    <section>
      <MoreNav />
      <NowPlaying />
      <PopularMovies />
    </section>
  );
}
