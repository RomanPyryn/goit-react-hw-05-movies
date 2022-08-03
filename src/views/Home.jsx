import { useState, useEffect } from 'react';
import * as getMoviesApi from '../services/getMovies-api';
import MoviesList from '../components/MoviesList/';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesApi.getTrendingToday().then(setMovies);
  }, []);

  return (
    <div>
      <h1>Tranding today</h1>
        <MoviesList onData={movies} onHomeWay={"movies/"} />
    </div>
  );
};

export default Home;
