import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, useLocation} from 'react-router-dom';
import * as getMoviesApi from '../services/getMovies-api';
import MovieInfo from '../components/MovieInfo';
import GoBackBtn from '../components/GoBackBtn';
import MovieAdditionalInfo from '../components/MovieAdditionalInfo';
import Loader from 'components/Loader';

const MovieDetails = () => {
  const { movieId } = useParams('');
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getMoviesApi.getMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <GoBackBtn />
      {movie && <MovieInfo movie={movie} />}
      < MovieAdditionalInfo onGoBack={location.state.from} />
      <Suspense fallback={<Loader />}>
      <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
