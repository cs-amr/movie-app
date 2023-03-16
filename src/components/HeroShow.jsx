import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import "../styles/components/heroshow.scss";
export default function HeroShow() {
  const [movieIndex, setMovieIndex] = useState(0);
  const { isLoading, data, isError } = useFetch(
    ["movies", "nowplaying"],
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setMovieIndex((prev) => (prev > 17 ? 0 : prev + 1));
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (isLoading) return <h1>...</h1>;
  const movies = data.results;
  const currentMovie = movies[movieIndex];
  const lastMovie = movies[movieIndex - 1];
  const nextMovie = movies[movieIndex + 1];
  return (
    <div
      className="heroShow"
      style={{
        backgroundImage: `linear-gradient(90deg,rgba(0,0,0,.5) 6%,#000 100%),
        url(https://image.tmdb.org/t/p/w500${currentMovie?.backdrop_path}`,
      }}
    >
      <div className="heroInfo">
        <h2>{currentMovie?.original_title}</h2>
        <p className="rate">
          <AiFillStar color="#ffb43a" />

          {currentMovie?.vote_average}
        </p>
        <Link to={`../movies/${currentMovie?.id}`}>More</Link>
      </div>
      <div className="heroCards">
        <div
          className="lastMovie"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${lastMovie?.backdrop_path}`,
          }}
          onClick={() => {
            setMovieIndex(movieIndex - 1);
          }}
        ></div>
        <div
          className="currentMovie"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${currentMovie?.backdrop_path}`,
          }}
        ></div>
        <div
          className="nextMovie"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${nextMovie?.backdrop_path}`,
          }}
          onClick={() => {
            setMovieIndex(movieIndex + 1);
          }}
        ></div>
      </div>
    </div>
  );
}
