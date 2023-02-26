import React from "react";
import MoreNav from "../components/MoreNav";
import OnTvShows from "../components/OnTvShows";
import PopularTvShows from "../components/PopularTvShows";

export default function TvShows() {
  return (
    <section>
      <MoreNav />
      <OnTvShows />
      <PopularTvShows />
    </section>
  );
}
