import { Routes, Route } from "react-router-dom";
import Layout from "components/Layout";
import Home from "../../views/Home";
import Movies from "../../views/Movies";
import MovieDetails from "../../views/MovieDetails";
import Cast from "../../views/Cast";
import Reviews from "../../views/Reviews";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
