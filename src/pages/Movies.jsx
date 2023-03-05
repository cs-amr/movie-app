import React from "react";
import HeroShow from "../components/HeroShow";
import MoreNav from "../components/MoreNav";
import NowPlaying from "../components/NowPlaying";
import PopularMovies from "../components/PopularMovies";
export default function Movies() {
  return (
    <section>
      <MoreNav />
      <HeroShow />
      <NowPlaying />
      <PopularMovies />
    </section>
  );
}
