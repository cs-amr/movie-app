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
import Person from "./pages/Person";
import Show from "./pages/Show";
import NotFound from "./pages/NotFound";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="/movies/:movieId" element={<Movie />} />

      <Route path="tvshows" element={<TvShows />} />
      <Route path="/tvshows/:showId" element={<Show />} />

      <Route path="people" element={<People />} />
      <Route path="/people/:personId" element={<Person />} />

      <Route path="upcoming" element={<UpComing />} />
      <Route path="toprated" element={<TopRated />} />
      <Route path="genres" element={<Genres />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
