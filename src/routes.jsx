import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import People from "./pages/People";
import UpComing from "./pages/UpComing";
import TopRated from "./pages/TopRated";
import Genres from "./pages/Genres";
import Movie from "./pages/Movie";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="/movies/:movieid" element={<Movie />} />

      <Route path="tvshows" element={<TvShows />} />
      <Route path="people" element={<People />} />
      <Route path="upcoming" element={<UpComing />} />
      <Route path="toprated" element={<TopRated />} />
      <Route path="genres" element={<Genres />} />
    </Route>
  )
);
