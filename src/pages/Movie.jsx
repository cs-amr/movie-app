import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import PersonCard from "../components/PersonCard";
import { useFetch } from "../hooks/useFetch";

export default function Movie() {
  const { movieId } = useParams();
  const { data, isLoading } = useFetch(
    ["movie", movieId],
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US`
  );
  const { data: data2, isLoading: isLoading2 } = useFetch(
    ["credit", movieId],
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  const { data: reviews, isLoading: isLoading3 } = useFetch(
    ["reviews", movieId],
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`
  );

  const { data: recommendations, isLoading: isLoading4 } = useFetch(
    ["recommendations", movieId],
    `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${
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
            <h4>{data?.original_title}</h4>
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
              {data?.release_date}
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
                  {reviews?.results.map((review) => {
                    return (
                      <div className="review">
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
                  {recommendations?.results.map((movie, index) => {
                    return <MovieCard movie={movie} key={index} />;
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
