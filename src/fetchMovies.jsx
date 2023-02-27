import axios from "axios";

export async function fetchMovies(type) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${type}?api_key=${
      import.meta.env.VITE_API_KEY
    }&language=en-US&page=1`
  );
  const data = await response.data;
  return data;
}
