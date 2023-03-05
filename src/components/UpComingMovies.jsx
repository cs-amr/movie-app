import "../styles/components/upcomingmovies.scss";
import MovieCard from "./MovieCard";
import { useFetch } from "../hooks/useFetch";
export default function UpComingMovies() {
  const {
    isLoading: isLoading1,
    data: data1,
    isError,
  } = useFetch(
    ["moviesupComing1"],
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=3`
  );
  const {
    isLoading: isLoading2,
    data: data2,
    isError: isError2,
  } = useFetch(
    ["moviesupComing2"],
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=4`
  );

  if (isLoading1) return <h1>...</h1>;
  if (isLoading2) return <h1>...</h1>;

  return (
    <div className="upComingMovies">
      <h3>Upcoming Movies</h3>
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
