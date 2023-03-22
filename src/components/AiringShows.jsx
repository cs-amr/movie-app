import "../styles/components/upcomingmovies.scss";
import { useFetch } from "../hooks/useFetch";
import ShowCard from "./ShowCard";
import LoadingCard from "./LoadingCard";
export default function AiringShows() {
  const {
    isLoading: isLoading1,
    data: data1,
    isError,
  } = useFetch(
    ["movies", "upComing", 1],
    `https://api.themoviedb.org/3/tv/airing_today?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`
  );
  const {
    isLoading: isLoading2,
    data: data2,
    isError: isError2,
  } = useFetch(
    ["movies", "upComing", 2],
    `https://api.themoviedb.org/3/tv/airing_today?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=2`
  );

  if (isLoading1) return <LoadingCard />;
  if (isLoading2) return <LoadingCard />;

  return (
    <div className="upComingMovies">
      <h3>Airing Today Tv Shows</h3>
      <div className="sliderContainer">
        <div className="slider">
          {data1?.results.map((show, index) => {
            return <ShowCard key={index} show={show} />;
          })}
        </div>
      </div>
      <div className="sliderContainer">
        <div className="slider">
          {data2?.results.map((show, index) => {
            return <ShowCard key={index} show={show} />;
          })}
        </div>
      </div>
    </div>
  );
}
