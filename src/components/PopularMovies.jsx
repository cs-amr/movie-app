import React from "react";
import MovieCard from "./MovieCard";
import "../styles/components/nowplaying.scss";
import { useQuery } from "react-query";
import axios from "axios";
export default function PopularMovies() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["movie", "popular"],
    queryFn: fetchfn,
  });
  async function fetchfn() {
    const response = await axios.get(
      ` https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    );
    const data = await response.data;
    return data;
  }
  if (isLoading) return <h1>...</h1>;

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
    </section>
  );
}
