import axios from "axios";
import { useInfiniteQuery, useQuery } from "react-query";
import MoreNav from "../components/MoreNav";
import Poster from "../components/Poster";
import { useFetch } from "../hooks/useFetch";
import "../styles/pages/genres.scss";
export default function Genres() {
  const {
    isLoading: isLoading1,
    data: moviesGenres,
    isError,
  } = useFetch(
    ["fetchMoviesGenres"],
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`
  );
  const {
    isLoading: isLoading2,
    data: showsGenres,
    isError: isError2,
  } = useFetch(
    ["fetchShowsGenres"],
    `https://api.themoviedb.org/3/genre/tv/list?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=2`
  );

  const posterQuery = useInfiniteQuery(["posters"], fetchPosters, {
    enabled: false,
  });

  function handelClick(e) {
    const btn = document.querySelector(".active");
    if (btn) {
      btn.classList.remove("active");
    }
    e.target.classList.add("active");
  }

  async function fetchPosters({ page = 1 }) {
    const fetchGenre = document.querySelector("button.active");
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/${fetchGenre.getAttribute(
        "data-type"
      )}?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${
        fetchGenre.id
      }&page=${page}`
    );
    const data = await response.data;
    return data;
  }

  if (isLoading1) return <h1>...</h1>;
  if (isLoading2) return <h1>...</h1>;
  return (
    <section>
      <MoreNav />
      <div className="moviesGenres">
        <h4>Movies Genres</h4>
        <div className="genresBtns">
          {moviesGenres?.genres.map((genre, index) => {
            return (
              <button
                key={index}
                data-type="movie"
                className="btn"
                id={genre.id}
                onClick={handelClick}
              >
                {genre.name}
              </button>
            );
          })}
        </div>
      </div>
      <div className="showsGenres">
        <h4>Tv Shows Genres</h4>
        <div className="genresBtns">
          {showsGenres?.genres.map((genre, index) => {
            return (
              <button
                className="btn"
                data-type="tv"
                key={index}
                id={genre.id}
                onClick={handelClick}
              >
                {genre.name}
              </button>
            );
          })}
        </div>
      </div>
      <div className="postersGrid">
        {posterQuery.data?.results.map((poster, index) => {
          return <Poster key={index} poster={poster} />;
        })}
      </div>
    </section>
  );
}
