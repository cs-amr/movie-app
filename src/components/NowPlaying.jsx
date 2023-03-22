import MovieCard from "./MovieCard";
import "../styles/components/nowplaying.scss";
import { useFetch } from "../hooks/useFetch";
import LoadingCard from "./LoadingCard";
export default function NowPlaying() {
  const { isLoading, data, isError } = useFetch(
    ["movies", "nowplaying"],
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`
  );
  const {
    isLoading: isLoading2,
    data: data2,
    isError: isError2,
  } = useFetch(
    ["movies", "nowplaying", 2],
    ` https://api.themoviedb.org/3/movie/popular?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=2`
  );

  if (isLoading) return <LoadingCard />;
  if (isLoading2) return <LoadingCard />;

  return (
    <section className="nowPlaying">
      <h3>Now playing Movies</h3>
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
