import ShowCard from "./ShowCard";
import "../styles/components/ontvshows.scss";
import { useQuery } from "react-query";
import axios from "axios";
export default function OnTvShows() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["shows", "onAir"],
    queryFn: fetchfn,
  });
  async function fetchfn() {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    );
    const data = await response.data;
    return data;
  }
  if (isLoading) return <h1>...</h1>;

  return (
    <section className="onTvShows">
      <h3>On The Air Tv Shows</h3>
      <div className="sliderContainer">
        <div className="slider">
          {data?.results.map((show, index) => {
            return <ShowCard key={index} show={show} />;
          })}
        </div>
      </div>
    </section>
  );
}
