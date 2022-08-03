import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Layout = lazy(() => import('components/Layout'));
const Loader = lazy(() => import('components/Loader'));
const Home = lazy(() => import('../../views/Home.jsx'));
const Movies = lazy(() => import('../../views/Movies.jsx'));
const MovieDetails = lazy(() => import('../../views/MovieDetails.jsx'));
const Cast = lazy(() => import('../../views/Cast.jsx'));
const Reviews = lazy(() => import('../../views/Reviews.jsx'));
const NotFound = lazy(() => import('components/NotFound'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
