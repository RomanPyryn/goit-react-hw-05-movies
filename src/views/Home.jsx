import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as getMoviesApi from '../services/getMovies-api';
import { HomeList, HomeListItem } from './stylesViews/Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMoviesApi.getTrendingToday().then(setMovies);
  }, []);

  return (
    <div>
      <h1>Tranding today</h1>
      <HomeList>
        {movies.map(movie => (
          <HomeListItem key={movie.id}>
            <Link to={`movies/${movie.id}`}>{movie.title}</Link>
          </HomeListItem>
        ))}
      </HomeList>
    </div>
  );
};

export default Home;
