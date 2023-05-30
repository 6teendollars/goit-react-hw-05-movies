import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'ab4e2d663c396eac6d409e641c27f924';

async function fetchTrendingMovies() {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${KEY}`
  );
  return response.data.results;
}

async function fetchMovieByQuery(query) {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&page=1&include_adult=false`
  );
  return response.data.results;
}

async function fetchMovieDetailes(movieId) {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${KEY}&include_adult=false`
  );
  return response;
}

async function fetchMovieCast(movieId) {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`
  );
  return response.data.cast;
}

async function fetchMovieReviews(movieId) {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`
  );
  return response.data.results;
}

export {
  fetchTrendingMovies,
  fetchMovieByQuery,
  fetchMovieDetailes,
  fetchMovieCast,
  fetchMovieReviews,
};
