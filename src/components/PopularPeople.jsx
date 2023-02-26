import "../styles/components/popularpeople.scss";
import PersonCard from "../components/PersonCard";
export default function PopularPeople() {
  return (
    <section>
      <h3>Popular People</h3>
      <div className="sliderContainer">
        <div className="slider">
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
          <PersonCard />
        </div>
      </div>
    </section>
  );
}
