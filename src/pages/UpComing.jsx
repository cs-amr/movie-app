import React from "react";
import AiringShows from "../components/AiringShows";
import MoreNav from "../components/MoreNav";
import UpComingMovies from "../components/UpComingMovies";

export default function UpComing() {
  return (
    <section>
      <MoreNav />
      <UpComingMovies />
      <AiringShows />
    </section>
  );
}
