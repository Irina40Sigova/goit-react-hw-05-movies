import axios from 'axios';

async function getTrendings() {
  const response = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=071a2d124997c654d1633ece03b76917'
  );

  return response.data;
}

async function getSearchMovies(query) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=071a2d124997c654d1633ece03b76917&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return response.data;
}

async function getMovieDetails(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=071a2d124997c654d1633ece03b76917&language=en-US`
  );
  return response.data;
}

async function getMovieCredits(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}}/credits?api_key=071a2d124997c654d1633ece03b76917&language=en-US`
  );
  return response.data;
}

async function getReviews(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}}/reviews?api_key=071a2d124997c654d1633ece03b76917&language=en-US&page=1`
  );
  return response.data;
}

export {
  getTrendings,
  getSearchMovies,
  getMovieDetails,
  getMovieCredits,
  getReviews,
};
