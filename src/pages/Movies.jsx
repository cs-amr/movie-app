import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import HeroShow from "../components/HeroShow";
import MoreNav from "../components/MoreNav";
import NowPlaying from "../components/NowPlaying";
import PopularMovies from "../components/PopularMovies";
import { useFetch } from "../hooks/useFetch";
export default function Movies() {
  const [index, setIndex] = useState(1);
  const { isLoading, data, isError } = useFetch(
    ["movies", "nowplaying"],
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev > 17 ? 0 : prev + 1));
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (isLoading) return <h1>...</h1>;
  const results = data.results;
  const current = results[index];
  const last = results[index - 1];
  const next = results[index + 1];

  return (
    <section>
      <MoreNav />
      <Cards current={current} last={last} next={next} />
      <HeroShow />
      <NowPlaying />
      <PopularMovies />
    </section>
  );
}
