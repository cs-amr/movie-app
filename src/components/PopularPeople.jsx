import "../styles/components/popularpeople.scss";
import PersonCard from "../components/PersonCard";
import { useQuery } from "react-query";
import axios from "axios";
import { useFetch } from "../hooks/useFetch";
export default function PopularPeople() {
  const { isLoading, data, isError } = useFetch(
    ["people"],
    ` https://api.themoviedb.org/3/person/popular?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`
  );
  const {
    isLoading: isLoading2,
    data: data2,
    isError: isError2,
  } = useFetch(
    ["people", 2],
    ` https://api.themoviedb.org/3/person/popular?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=2`
  );
  if (isLoading) return <h1>...</h1>;
  if (isLoading2) return <h1>...</h1>;

  return (
    <section>
      <h3>Popular People</h3>
      <div className="sliderContainer">
        <div className="slider">
          {data?.results.map((person, index) => {
            return <PersonCard key={index} person={person} />;
          })}
        </div>
      </div>
      <div className="sliderContainer">
        <div className="slider">
          {data2?.results.map((person, index) => {
            return <PersonCard key={index} person={person} />;
          })}
        </div>
      </div>
    </section>
  );
}
