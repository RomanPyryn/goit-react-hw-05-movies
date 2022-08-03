import { useState, useEffect } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import * as getMoviesApi from '../services/getMovies-api';
import MovieInfo from '../components/MovieInfo';
import GoBackBtn from '../components/GoBackBtn';
import {
  MovieAdditionalInfoBox,
  MovieAdditionalInfoList,
  MovieAdditionalInfoItem,
} from './stylesViews/MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams('');
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMoviesApi.getMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <GoBackBtn />
      {movie && <MovieInfo movie={movie} />}
      <MovieAdditionalInfoBox>
        <h3>Additional information</h3>
        <MovieAdditionalInfoList>
          <MovieAdditionalInfoItem>
            <Link to="cast">Cast</Link>
          </MovieAdditionalInfoItem>
          <MovieAdditionalInfoItem>
            <Link to="reviews">Reviews</Link>
          </MovieAdditionalInfoItem>
        </MovieAdditionalInfoList>
      </MovieAdditionalInfoBox>
      <Outlet />
    </>
  );
};

export default MovieDetails;
