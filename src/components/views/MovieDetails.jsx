import { useState, useEffect } from "react";
import { Link, useParams, Outlet } from "react-router-dom";
import * as getMoviesApi from "../services/getMovies-api";
import MovieInfo from "../MovieInfo";
import { MovieAdditionalInfoBox } from "../MovieInfo/MovieInfo.styled"

const MovieDetails = () => {
    const { movieId } = useParams('');
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        getMoviesApi.getMovieById(movieId).then(setMovie);
    }, [movieId]);

    return (
        <div>
            {movie && <MovieInfo movie={movie} />}
            <MovieAdditionalInfoBox>
                <h3>Additional information</h3>
                <ul>
                    <li>
                        <Link to="cast" >Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews" >Reviews</Link>
                    </li>
                </ul>
            </MovieAdditionalInfoBox>
            <Outlet />
        </div>
    );
}

export default MovieDetails;