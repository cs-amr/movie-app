import MovieCard from "./MovieCard";
import "../styles/components/ontvshows.scss";
export default function OnTvShows() {
  return (
    <div className="onTvShows">
      <h3>On The Air Tv Shows</h3>
      <div className="sliderContainer">
        <div className="slider">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  );
}
