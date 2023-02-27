import axios from "axios";
import { useQuery } from "react-query";
import MovieCard from "./MovieCard";

export default function RatedMovies() {
  const {
    isLoading: isLoading1,
    data: data1,
    isError,
  } = useQuery({
    queryKey: ["movies", "toprated", 1],
    queryFn: fetchPage1,
  });
  const {
    isLoading: isLoading2,
    data: data2,
    isError: isError2,
  } = useQuery({
    queryKey: ["movies", "toprated", 2],
    queryFn: fetchPage2,
  });
  async function fetchPage1() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    );
    const data = await response.data;
    return data;
  }
  async function fetchPage2() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=2`
    );
    const data = await response.data;
    return data;
  }
  if (isLoading1) return <h1>...</h1>;
  if (isLoading2) return <h1>...</h1>;

  return (
    <div className="topRatedMovies">
      <h3>Top Rated Movies</h3>
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
