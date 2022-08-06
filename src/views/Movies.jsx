import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as getMoviesApi from '../services/getMovies-api';
import Searchbar from '../components/Searchbar/index';
import { useSearchParams } from 'react-router-dom';
import MoviesList from '../components/MoviesList/';

const Movies = () => {
  const [searchParams] = useSearchParams('');
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const [movies, setMovies] = useState([]);
  

  useEffect(() => {
    const fetchFunc = async () => {
      try {
        const results = await getMoviesApi.getMovieSearch(query);
        if (results.length === 0) {
          toast.error('Write something else!');
        }
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };

    if (query !== '') {
      fetchFunc(query);
    }
  }, [query]);

  const getQuery = query => {
    setQuery(query);
  };

  return (
    <div>
      <Searchbar onSubmitFom={getQuery} />
      {movies.length > 0 && <MoviesList onData={movies} />}
      <ToastContainer />
    </div>
  );
};

export default Movies;
