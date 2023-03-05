import React from "react";
import MoreNav from "../components/MoreNav";
import PopularPeople from "../components/PopularPeople";
import NowPlaying from "../components/NowPlaying";
import OnTvShows from "../components/OnTvShows";
import PopularMovies from "../components/PopularMovies";
import PopularTvShows from "../components/PopularTvShows";
import HeroShow from "../components/HeroShow";

export default function Home() {
  return (
    <section className="home">
      <MoreNav />
      <HeroShow />
      <PopularPeople />
      <NowPlaying />
      <OnTvShows />
      <PopularMovies />
      <PopularTvShows />
    </section>
  );
}
