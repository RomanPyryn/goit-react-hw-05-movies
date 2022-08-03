import axios from 'axios';

const API_KEY = 'b19e6b2986fc1ae4c290daa4cefec337';
const BASE_URL = 'https://api.themoviedb.org/3/';
const TREND_URL = `${BASE_URL}trending/movie/day`;

export const getTrendingToday = async () => {
  const response = await axios(`${TREND_URL}?api_key=${API_KEY}`);
  return response.data.results;
};

export const getMovieById = async movie_id => {
  const response = await axios(
    `${BASE_URL}movie/${movie_id}?api_key=${API_KEY}`
  );
  return response.data;
};

export const getGetMovieCastById = async movie_id => {
  const response = await axios(
    `${BASE_URL}movie/${movie_id}/credits?api_key=${API_KEY}`
  );
  return response.data.cast;
};

export const getGetMovieReviewsById = async movie_id => {
  const response = await axios(
    `${BASE_URL}movie/${movie_id}/reviews?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const getMovieSearch = async (searchQuery, page) => {
  const response = await axios(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`
  );
  return response.data.results;
};
