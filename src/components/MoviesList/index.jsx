import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MoviesListUl, MoviesListItem } from './MoviesList.styled';

const MoviesList = ({ onData, onHomeWay }) => {
  const url = `https://image.tmdb.org/t/p/w300/`;

  return (
    <MoviesListUl>
      {onData.map(movie => (
        <MoviesListItem key={movie.id}>
          <Link to={onHomeWay ? `${onHomeWay}${movie.id}` : `${movie.id}`}>
            <img
              src={`${url}${movie.poster_path}`}
              alt={movie.title}
              width="20px"
              height="20px"
            />
            {movie.title ?? movie.original_title}
          </Link>
        </MoviesListItem>
      ))}
    </MoviesListUl>
  );
};

MoviesList.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
  }),
  onHomeWay: PropTypes.string,
};

export default MoviesList;
