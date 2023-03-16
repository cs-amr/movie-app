import { useRef, useState } from "react";
import { useGlobalContext } from "../context/SearchContext";
import { useFetch } from "../hooks/useFetch";
import "../styles/components/search.scss";
import MovieCard from "./MovieCard";
import PersonCard from "./PersonCard";
import ShowCard from "./ShowCard";

export default function Search() {
  const { searchIsOpen, setSearchIsOpen, keyword, setKeyword } =
    useGlobalContext();
  //
  const {
    data: movies,
    isLoading,
    isError,
  } = useFetch(
    ["movies", keyword],
    `https://api.themoviedb.org/3/search/movie?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&query=${keyword}&page=1&include_adult=false`
  );
  const {
    data: shows,
    isLoading2,
    isError2,
  } = useFetch(
    ["shows", keyword],
    `https://api.themoviedb.org/3/search/tv?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&query=${keyword}&page=1&include_adult=false`
  );
  const {
    data: people,
    isLoading3,
    isError3,
  } = useFetch(
    ["people", keyword],
    `https://api.themoviedb.org/3/search/person?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&query=${keyword}&page=1&include_adult=false`
  );
  const inputRef = useRef(null);
  if (isLoading) <h1>....</h1>;
  if (isLoading2) <h1>....</h1>;
  if (isLoading3) <h1>....</h1>;
  return (
    <div
      className={searchIsOpen ? "search-overlay open" : "seach-overlay close"}
      onClick={() => {
        setSearchIsOpen(false);
      }}
    >
      <div
        className="search-container"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <h3>Search</h3>
        <div className="search_bar">
          <button
            onClick={() => {
              setKeyword(inputRef.current.value);
            }}
          >
            <img src="/public/assets/icons8-search.svg" alt="" />
          </button>
          <input
            type="text"
            placeholder="search for movies and tvshows"
            Value={keyword}
            ref={inputRef}
          />
        </div>
        <div className="search">
          <div className="movies">
            <h4>Movies</h4>
            <div className="sliderContainer">
              <div
                className="slider"
                onClick={() => {
                  setSearchIsOpen(false);
                }}
              >
                {movies?.results.map((movie) => {
                  return <MovieCard movie={movie} />;
                })}
              </div>
            </div>
          </div>
          <div className="tvshows">
            <h4>TV Shows</h4>
            <div className="sliderContainer">
              <div
                className="slider"
                onClick={() => {
                  setSearchIsOpen(false);
                }}
              >
                {shows?.results.map((show) => {
                  return <ShowCard show={show} />;
                })}
              </div>
            </div>
          </div>
          <div className="people">
            <h4>People</h4>
            <div className="sliderContainer">
              <div className="slider" onClick={() => setSearchIsOpen(false)}>
                {people?.results.map((person) => {
                  return <PersonCard person={person} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
