import React from "react";
import MoreNav from "../components/MoreNav";
import PopularPeople from "../components/PopularPeople";
import NowPlaying from "../components/NowPlaying";
import OnTvShows from "../components/OnTvShows";
import PopularMovies from "../components/PopularMovies";
import PopularTvShows from "../components/PopularTvShows";

export default function Home() {
  return (
    <section>
      <MoreNav />
      <PopularPeople />
      <NowPlaying />
      <OnTvShows />
      <PopularMovies />
      <PopularTvShows />
    </section>
  );
}
