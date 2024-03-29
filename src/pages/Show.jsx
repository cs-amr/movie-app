import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import PersonCard from "../components/PersonCard";
import ShowCard from "../components/ShowCard";
import { useFetch } from "../hooks/useFetch";
import "../styles/pages/movie.scss";
export default function Show() {
  const { showId } = useParams();
  const { data, isLoading } = useFetch(
    ["show", showId],
    `https://api.themoviedb.org/3/tv/${showId}?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US`
  );
  const { data: data2, isLoading: isLoading2 } = useFetch(
    ["credit", showId],
    `https://api.themoviedb.org/3/tv/${showId}/credits?language=en-US&api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  const { data: reviews, isLoading: isLoading3 } = useFetch(
    ["reviews"],
    `https://api.themoviedb.org/3/tv/${showId}/reviews?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`
  );

  const { data: recommendations, isLoading: isLoading4 } = useFetch(
    ["recommendations"],
    `https://api.themoviedb.org/3/tv/${showId}/recommendations?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`
  );
  https: if (isLoading) <h1>...</h1>;
  https: if (isLoading2) <h1>...</h1>;
  https: if (isLoading3) <h1>...</h1>;
  https: if (isLoading4) <h1>...</h1>;

  return (
    <section className="detailsContainer">
      <section className="details">
        <div className="detailsImg">
          <img
            src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
            alt=""
          />
          <div>
            <h4>{data?.name}</h4>
            <p>{data?.tagline}</p>
            <div className="detailsRating">
              <AiFillStar color="#ffb43a" />
              {data?.vote_average}
            </div>

            <p>
              <span>Runtime:</span>
              {(data?.runtime / 60).toFixed(2)}hrs
            </p>
            <p>
              <span>Release Date:</span>
              {data?.first_air_date}
            </p>
            <ul className="detailsGenres">
              {data?.genres.map((genre, index) => {
                return <li key={index}>{genre.name}</li>;
              })}
            </ul>
          </div>
        </div>

        <section className="detailsBody">
          <div className="detailsLeft">
            <div className="synopsis">
              <h5>Synopsis</h5>
              <p>{data?.overview}</p>
            </div>
            <div className="cast">
              <h5>Cast</h5>
              <div className="sliderContainer">
                <div className="slider">
                  {data2?.cast.map((actor, index) => {
                    return <PersonCard person={actor} key={index} />;
                  })}
                </div>
              </div>
            </div>
            <div className="crew">
              <h5>Crew</h5>

              <div className="sliderContainer">
                <div className="slider">
                  {data2?.crew.map((actor, index) => {
                    return <PersonCard person={actor} key={index} />;
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="detailsRight">
            <div className="reviews">
              <h5>Reviews</h5>
              <div className="sliderContainer">
                <div className="slider">
                  {reviews?.results.map((review, index) => {
                    return (
                      <div className="review" key={index}>
                        <p>{review.content}</p>
                        <span>by {review.author}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="reviews">
              <h5>Recommended</h5>
              <div className="sliderContainer">
                <div className="slider">
                  {recommendations?.results.map((show, index) => {
                    return <ShowCard show={show} key={index} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
