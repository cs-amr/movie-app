import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import ShowCard from "../components/ShowCard";
import { useFetch } from "../hooks/useFetch";
import "../styles/pages/person.scss";
export default function Person() {
  const { personId } = useParams();

  const { data, isLoading } = useFetch(
    ["person", personId],
    `https://api.themoviedb.org/3/person/${personId}?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US`
  );

  const { data: images, isLoading: isLoadingImgs } = useFetch(
    ["images", personId],
    `https://api.themoviedb.org/3/person/${personId}/images?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US`
  );
  const { data: movieCredit, isLoading: isLoading3 } = useFetch(
    ["movieCredit", personId],
    `https://api.themoviedb.org/3/person/${personId}/movie_credits?language=en-US&api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  const { data: showCredit, isLoading: isLoading4 } = useFetch(
    ["showCredit", personId],
    `https://api.themoviedb.org/3/person/${personId}/tv_credits?language=en-US&api_key=${
      import.meta.env.VITE_API_KEY
    }`
  );
  if (isLoading) <h1>...</h1>;
  if (isLoadingImgs) <h1>...</h1>;
  if (isLoading3) <h1>...</h1>;
  if (isLoading4) <h1>...</h1>;
  console.log(showCredit);
  return (
    <section className="detailsContainer">
      <section className="details">
        <div className="detailsImg">
          <img
            src={`https://image.tmdb.org/t/p/w500${data?.profile_path}`}
            alt=""
          />
          <div>
            <h4>{data?.name} </h4>
            <p>
              <span>Known For:</span>
              {data?.known_for_department}
            </p>
            <p>
              <span>Popularity:</span>
              {data?.popularity}
            </p>
            <p>
              <span>Birthday:</span>
              {data?.birthday}
            </p>
            <p>
              <span>Birth Place:</span>
              {data?.place_of_birth}
            </p>
          </div>
        </div>
        <div className="detailsBody">
          <div className="detailsLeft">
            <div className="biography">
              <h5>Biography</h5>
              <p>{data?.biography}</p>
            </div>
            <div className="images">
              <h5>Images</h5>
              <div className="sliderContainer">
                <div className="slider">
                  {images?.profiles.map((img, index) => {
                    return (
                      <div
                        key={index}
                        className="img"
                        style={{
                          backgroundImage: `url(https://image.tmdb.org/t/p/w500${img.file_path})`,
                        }}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="detailsRight">
            <div className="movies">
              <h5>Movies</h5>
              <h5>As a cast member</h5>
              <div className="sliderContainer">
                <div className="slider">
                  {movieCredit?.cast.map((movie, index) => {
                    return <MovieCard movie={movie} key={index} />;
                  })}
                </div>
              </div>
              <h5>As a crew member</h5>
              <div className="sliderContainer">
                <div className="slider">
                  {movieCredit?.crew.map((movie, index) => {
                    return <MovieCard movie={movie} key={index} />;
                  })}
                </div>
              </div>
            </div>
            <div className="tvShows">
              <h5>Tv shows</h5>

              <h5>As a cast member</h5>
              <div className="sliderContainer">
                <div className="slider">
                  {showCredit?.cast?.map((show, index) => {
                    return <ShowCard show={show} key={index} />;
                  })}
                </div>
              </div>
              <h5>As a crew member</h5>
              <div className="sliderContainer">
                <div className="slider">
                  {showCredit?.crew.map((show, index) => {
                    return <ShowCard show={show} key={index} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
