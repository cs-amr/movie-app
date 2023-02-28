import axios from "axios";
import { useQuery } from "react-query";
import ShowCard from "./ShowCard";
export default function PopularTvShows() {
  const {
    isLoading,
    data: data1,
    isError,
  } = useQuery({
    queryKey: ["shows", "popular", 1],
    queryFn: fetchPageOne,
  });
  async function fetchPageOne() {
    const response = await axios.get(
      ` https://api.themoviedb.org/3/tv/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    );
    const data = await response.data;
    return data;
  }
  const {
    isLoading: isLoading2,
    data: data2,
    isError: isError2,
  } = useQuery({
    queryKey: ["shows", "popular", 2],
    queryFn: fetchPageTwo,
  });
  async function fetchPageTwo() {
    const response = await axios.get(
      ` https://api.themoviedb.org/3/tv/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=2`
    );
    const data = await response.data;
    return data;
  }
  if (isLoading) return <h1>...</h1>;

  return (
    <section className="popularTvShows">
      <h3>Popular Tv Shows</h3>
      <div className="sliderContainer">
        <div className="slider">
          {data1?.results.map((show, index) => {
            return <ShowCard key={index} show={show} />;
          })}
        </div>
      </div>{" "}
      <div className="sliderContainer">
        <div className="slider">
          {data2?.results.map((show, index) => {
            return <ShowCard key={index} show={show} />;
          })}
        </div>
      </div>
    </section>
  );
}
