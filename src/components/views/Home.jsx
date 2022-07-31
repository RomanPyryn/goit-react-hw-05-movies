import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as getMoviesApi from "../services/getMovies-api";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getMoviesApi.getTrendingToday().then(setMovies);
    }, []);

    return (
        <div>
            <h1>Tranding today</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;