import PropTypes from 'prop-types';
import { Link, useLocation  } from 'react-router-dom';
import { MoviesListUl, MoviesListItem } from './MoviesList.styled';

const MoviesList = ({ onData }) => {
  const url = `https://image.tmdb.org/t/p/w300/`;
  const location = useLocation();
  console.log(location.pathname);

  return (
    <MoviesListUl>
      {onData.map(movie => (
        <MoviesListItem key={movie.id}>
          <Link to={location.pathname === '/' ? `movies/${movie.id}` : `${movie.id}`}>
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
};

export default MoviesList;
