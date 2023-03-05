import HeroShow from "../components/Hero";
import MoreNav from "../components/MoreNav";
import PopularPeople from "../components/PopularPeople";
import "../styles/pages/people.scss";
export default function People() {
  return (
    <section>
      <MoreNav />
      <HeroShow />
      <PopularPeople />
    </section>
  );
}
