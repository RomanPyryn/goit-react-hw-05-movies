import axios from 'axios';

const API_KEY = 'b19e6b2986fc1ae4c290daa4cefec337';
const BASE_URL = 'https://api.themoviedb.org/3/';
const TREND_URL = `${BASE_URL}trending/movie/day`;
// const SEARCH_URL = `${BASE_URL}search/movie`;
// const DETAILS_URL = `${BASE_URL}movie/${id}`;
// const GENRES_URL = `${BASE_URL}genre/movie/list`;
// const IMAGE_URL = `https://image.tmdb.org/t/p/w300`;

// export default class GetFilmsApiService {
//     constructor() {
//         this.searchRequest = "";
//     }
    
//     async getTrendFilms(url) {
//         try {
//             const searchLink = `${url}trending/movie/day?api_key=${API_KEY}&page=${this.page}`;
//             return await this.queryFilms(searchLink);
//         } catch(error) {
//             console.log(error.message);
//         }        
//     }
//     async getSearchedFilms(url) {
//         try {
//             const searchLink = `${url}?api_key=${API_KEY}&page=${this.page}&query=${this.searchRequest}`;
//             return await this.queryFilms(searchLink);
//         } catch(error) {
//             console.log(error.message);
//         }        
//     }
    
//     async queryFilms(searchLink) {
//         const response = await axios.get(searchLink);
//         const data = response.data;
//         this.page += 1;
//         return data;
//     }
//     resetPage() {
//         this.page = 1;
//     };
//     trendsOfDay() {
//         this.period = 'day';
//     };
//     trendsOfWeek() {
//         this.period = 'week';
//     };
//       get query() {
//         return this.searchRequest;
//     };
//     set query(newQuery) {
//         this.searchRequest = newQuery;
//     };
// }


export const getTrendingToday = async () => {
    const response = await axios(`${TREND_URL}?api_key=${API_KEY}`);
    return response.data.results;
};

export const getMovieById = async (movie_id) => {
    const response = await axios(`${BASE_URL}movie/${movie_id}?api_key=${API_KEY}`);
    return response.data;
};