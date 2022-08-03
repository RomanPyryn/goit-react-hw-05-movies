import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Layout = lazy(() => import('components/Layout'));
const Home = lazy(() => import('../../views/Home.jsx'));
const Movies = lazy(() => import('../../views/Movies.jsx'));
const MovieDetails = lazy(() => import('../../views/MovieDetails.jsx'));
const Cast = lazy(() => import('../../views/Cast.jsx'));
const Reviews = lazy(() => import('../../views/Reviews.jsx'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
};
