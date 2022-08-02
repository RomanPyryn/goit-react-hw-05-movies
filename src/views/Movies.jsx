import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as getMoviesApi from "../services/getMovies-api";
import Searchbar from "../components/Searchbar/index";
import { Link } from "react-router-dom";
import { MoviesList, MoviesListItem } from "./stylesViews/Movies.styled"

const Movies = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchFunc = async (searchQuery) => {
            try {
                const results = await getMoviesApi.getMovieSearch(searchQuery)

                if (results.length === 0) {toast.error('Write something else!');}
                setMovies(results);
            } catch (error) {
                console.log(error);
            }
        };
        
        if (searchQuery !== '') {fetchFunc(searchQuery);}
    }, [searchQuery]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formRequest = e.currentTarget.elements.serch.value;

        if (formRequest.trim() === '') {
            return toast.error('Write something!');
        }

        setSearchQuery(formRequest);
        setMovies([]);
    };

    return (
        <div>
            <Searchbar onSubmitFom={handleSubmit} />
            { movies.length > 0 && (
                <MoviesList>   
                    {movies.map(movie => (
                        <MoviesListItem key={movie.id}>
                            <Link to={`${movie.id}` }>
                                {movie.title ?? movie.original_title}
                            </Link>
                        </MoviesListItem>
                    ))}
                </MoviesList>       
            )}
            <ToastContainer/>
        </div>
    );
}

export default Movies;