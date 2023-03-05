import axios from "axios";
import { useQuery } from "react-query";
import { useFetch } from "../hooks/useFetch";
import ShowCard from "./ShowCard";
export default function PopularTvShows() {
  const {
    isLoading,
    data: data1,
    isError,
  } = useFetch(
    ["shows", "popular", 1],
    ` https://api.themoviedb.org/3/tv/popular?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=4`
  );

  const {
    isLoading: isLoading2,
    data: data2,
    isError: isError2,
  } = useFetch(
    ["shows", "popular", 2],
    ` https://api.themoviedb.org/3/tv/popular?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=3`
  );

  if (isLoading) return <h1>...</h1>;
  if (isLoading2) return <h1>...</h1>;

  return (
    <section className="popularTvShows">
      <h3>Popular Tv Shows</h3>
      <div className="sliderContainer">
        <div className="slider">
          {data1?.results.map((show, index) => {
            return <ShowCard key={index} show={show} />;
          })}
        </div>
      </div>{" "}
      <div className="sliderContainer">
        <div className="slider">
          {data2?.results.map((show, index) => {
            return <ShowCard key={index} show={show} />;
          })}
        </div>
      </div>
    </section>
  );
}
