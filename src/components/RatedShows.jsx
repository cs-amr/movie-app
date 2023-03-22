import axios from "axios";
import { useQuery } from "react-query";
import { useFetch } from "../hooks/useFetch";
import LoadingCard from "./LoadingCard";
import ShowCard from "./ShowCard";

export default function RatedShows() {
  const {
    isLoading: isLoading1,
    data: data1,
    isError,
  } = useFetch(
    ["shows", "toprated", 1],
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`
  );
  const {
    isLoading: isLoading2,
    data: data2,
    isError: isError2,
  } = useFetch(
    ["shows", "toprated", 2],
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=2`
  );

  if (isLoading1) return <LoadingCard />;
  if (isLoading2) return <LoadingCard />;

  return (
    <div className="topRatedShows">
      <h3>Top Rated Tv Shows</h3>
      <div className="sliderContainer">
        <div className="slider">
          {data1?.results.map((show, index) => {
            return <ShowCard key={index} show={show} />;
          })}
        </div>
      </div>
      <div className="sliderContainer">
        <div className="slider">
          {data2?.results.map((show, index) => {
            return <ShowCard key={index} show={show} />;
          })}
        </div>
      </div>
    </div>
  );
}
