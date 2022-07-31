import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as getMoviesApi from "../services/getMovies-api";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});

    console.log(movieId);

    useEffect(() => {
        getMoviesApi.getMovieById(movieId).then(r => setMovie(r));
    }, [movieId]);

    console.log(movie);

    const url = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;

    //  poster_path, title, vote_average, overview, genres, release_date 

    return (
        <div>
            <img src={url} alt={movie.title} />
            <h2>{movie.title} ({movie.release_date.slice(0, 4)})</h2>
            <p>User Score: {(movie.vote_average * 10).toFixed(0)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h3>Genres</h3>
            <ul>
                    {movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
            </ul>
        </div>
    );
}

export default MovieDetails;