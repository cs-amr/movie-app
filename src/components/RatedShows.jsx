import axios from "axios";
import { useQuery } from "react-query";
import ShowCard from "./ShowCard";

export default function RatedShows() {
  const {
    isLoading: isLoading1,
    data: data1,
    isError,
  } = useQuery({
    queryKey: ["shows", "toprated", 1],
    queryFn: fetchPage1,
  });
  const {
    isLoading: isLoading2,
    data: data2,
    isError: isError2,
  } = useQuery({
    queryKey: ["shows", "toprated", 2],
    queryFn: fetchPage2,
  });
  async function fetchPage1() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    );
    const data = await response.data;
    return data;
  }
  async function fetchPage2() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=2`
    );
    const data = await response.data;
    return data;
  }
  if (isLoading1) return <h1>...</h1>;
  if (isLoading2) return <h1>...</h1>;

  return (
    <div className="topRatedShows">
      <h3>Top Rated Tv Shows</h3>
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
