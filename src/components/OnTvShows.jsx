import ShowCard from "./ShowCard";
import "../styles/components/ontvshows.scss";
import { useFetch } from "../hooks/useFetch";
export default function OnTvShows() {
  const { isLoading, data, isError } = useFetch(
    ["shows", "onAir"],
    `https://api.themoviedb.org/3/tv/on_the_air?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`
  );
  const {
    isLoading: isLoading2,
    data: data2,
    isError: isError2,
  } = useFetch(
    ["shows", "onAir", 2],
    ` https://api.themoviedb.org/3/tv/on_the_air?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=2`
  );

  if (isLoading) return <h1>...</h1>;
  if (isLoading2) return <h1>...</h1>;

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
