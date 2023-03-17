import axios from "axios";
import { useState } from "react";
import { useInfiniteQuery } from "react-query";
import MoreNav from "../components/MoreNav";
import Poster from "../components/Poster";
import { useFetch } from "../hooks/useFetch";
import "../styles/pages/genres.scss";
export default function Genres() {
  const [genre, setGenre] = useState();
  const {
    isLoading: isLoading1,
    data: moviesGenres,
    isError,
  } = useFetch(
    ["MoviesGenres"],
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`
  );
  const {
    isLoading: isLoading2,
    data: showsGenres,
    isError: isError2,
  } = useFetch(
    ["ShowsGenres"],
    `https://api.themoviedb.org/3/genre/tv/list?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=2`
  );
  const {
    refetch,
    status,
    data: data5,
    error,
    isFetching,
    isLoading: isLoading3,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(["posters"], fetchPosters, {
    enabled: false,
    getNextPageParam: (lastPage, pages) => {
      if (pages.length < 20) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  async function fetchPosters({ pageParam = 1 }) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/${genre[0]}?api_key=58a2317a4052099aa1668e2379940ca3&with_genres=${genre[1]}&page=${pageParam}`
    );
    return response.data;
  }

  function handelClick(e) {
    const btn = document.querySelector("button.active");
    if (btn) {
      btn.classList.remove("active");
    }
    e.target.classList.add("active");
    setGenre([e.target.getAttribute("data-type"), e.target.id]);
    refetch();
  }

  if (isLoading1) return <h1>...</h1>;
  if (isLoading2) return <h1>...</h1>;
  if (isLoading3) {
    return <h1>loading</h1>;
  }
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
        {data5?.pages.map((page) =>
          page.results.map((poster, index) => (
            <Poster key={index} poster={poster} type={genre[0]} />
          ))
        )}
      </div>

      <button
        onClick={fetchNextPage}
        className={data5 ? "showmore show" : "showmore"}
      >
        Show More
      </button>
    </section>
  );
}
