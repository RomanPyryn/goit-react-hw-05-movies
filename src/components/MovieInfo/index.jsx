import PropTypes from 'prop-types';
import { MovieInfoBox, MovieInfoList, MovieGenresList, MovieGenresItem } from "./MovieInfo.styled"

const MovieInfo = ({ movie }) => {
    const { poster_path, title, release_date, vote_average, overview, genres } = movie;
    const url = `https://image.tmdb.org/t/p/w300/${poster_path}`;

    return (
        <MovieInfoBox>
            <img src={url} alt={title} />
            <MovieInfoList>
                <h2>{movie.title} ({release_date.slice(0, 4)})</h2>
                <p>User Score: {(vote_average * 10).toFixed(0)}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                <h3>Genres</h3>
                <MovieGenresList>
                    {genres.map(genre => <MovieGenresItem key={genre.id}>{genre.name}</MovieGenresItem>)}
                </MovieGenresList>
            </MovieInfoList>
        </MovieInfoBox>
    );
};

MovieInfo.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        overview: PropTypes.string.isRequired,
        genres: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }))
    })
};

export default MovieInfo;