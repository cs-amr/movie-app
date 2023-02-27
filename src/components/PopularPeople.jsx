import "../styles/components/popularpeople.scss";
import PersonCard from "../components/PersonCard";
import { useQuery } from "react-query";
import axios from "axios";
export default function PopularPeople() {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchfn,
  });
  async function fetchfn() {
    const response = await axios.get(
      ` https://api.themoviedb.org/3/person/popular?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&page=1`
    );
    const data = await response.data;
    return data;
  }
  if (isLoading) return <h1>...</h1>;

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
    </section>
  );
}
