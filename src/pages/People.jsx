import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import HeroShow from "../components/Hero";
import MoreNav from "../components/MoreNav";
import PopularPeople from "../components/PopularPeople";
import { useFetch } from "../hooks/useFetch";
import "../styles/pages/people.scss";
export default function People() {
  const [index, setIndex] = useState(1);
  const { isLoading, data, isError } = useFetch(
    ["movies", "nowplaying"],
    `https://api.themoviedb.org/3/person/popular?api_key=${
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
      <HeroShow />
      <Cards current={current} last={last} next={next} />
      <PopularPeople />
    </section>
  );
}
