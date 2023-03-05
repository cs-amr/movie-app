import React from "react";
import MovieCard from "./MovieCard";
import "../styles/components/nowplaying.scss";
import { useFetch } from "../hooks/useFetch";
export default function PopularMovies() {
  const { isLoading, data, isError } = useFetch(
    ["movie", "popular"],
    ` https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=3`
  );
  const {
    isLoading: isLoading2,
    data: data2,
    isError: isError2,
  } = useFetch(
    ["movie", "popular", 2],
    ` https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=4`
  );
  if (isLoading) return <h1>...</h1>;
  if (isLoading2) return <h1>...</h1>;

  return (
    <section className="popularmovies">
      <h3>Popular Movies</h3>
      <div className="sliderContainer">
        <div className="slider">
          {data?.results.map((movie, index) => {
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
    </section>
  );
}
