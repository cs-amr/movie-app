import React from "react";
import MoreNav from "../components/MoreNav";
import RatedMovies from "../components/RatedMovies";
import RatedShows from "../components/RatedShows";

export default function TopRated() {
  return (
    <section>
      <MoreNav />
      <RatedMovies />
      <RatedShows />
    </section>
  );
}
