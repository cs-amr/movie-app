import axios from "axios";
import { useQuery } from "react-query";
import { useFetch } from "../hooks/useFetch";
import LoadingCard from "./LoadingCard";
import MovieCard from "./MovieCard";

export default function RatedMovies() {
  const {
    isLoading: isLoading1,
    data: data1,
    isError,
  } = useFetch(
    ["movies", "toprated", 1],
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`
  );
  const {
    isLoading: isLoading2,
    data: data2,
    isError: isError2,
  } = useFetch(
    ["movies", "toprated", 2],
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=2`
  );

  if (isLoading1) return <LoadingCard />;
  if (isLoading2) return <LoadingCard />;

  return (
    <div className="topRatedMovies">
      <h3>Top Rated Movies</h3>
      <div className="sliderContainer">
        <div className="slider">
          {data1?.results.map((movie, index) => {
            return <MovieCard key={index} movie={movie} />;
          })}
        </div>
      </div>
      <div className="sliderContainer">
        <div className="slider">
          {data2?.results.map((movie, index) => {
            return <MovieCard key={index} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
}
