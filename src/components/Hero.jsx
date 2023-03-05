import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import "../styles/components/hero.scss";
import MovieCard from "./MovieCard";
export default function Hero() {
  const [personIndex, setPersonIndex] = useState(0);
  const { isLoading, data, isError } = useFetch(
    ["people"],
    ` https://api.themoviedb.org/3/person/popular?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setPersonIndex((prev) => (prev > 17 ? 0 : prev + 1));
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  if (isLoading) return <h1>...</h1>;
  const people = data.results;
  const currentPerson = people[personIndex];
  return (
    <div className="hero">
      <img
        src={`https://image.tmdb.org/t/p/w500${currentPerson?.profile_path}`}
        alt="heroImg"
      />
      <div className="heroInfo">
        <p className="heroName">{currentPerson.name}</p>
        <p className="knownFor">
          Known For <span>{currentPerson.known_for_department}</span>
        </p>
        <p className="popularity">
          Popularity <span>{currentPerson.popularity}</span>
        </p>
        <div className="personWork">
          <p>Some Work</p>
          <div>
            {currentPerson.known_for &&
              currentPerson.known_for.map((movie) => (
                <MovieCard movie={movie} />
              ))}
          </div>
        </div>
        <Link to={`/people/${currentPerson.id}`}>More</Link>
      </div>
    </div>
  );
}
