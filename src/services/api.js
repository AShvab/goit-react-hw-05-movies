import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'a3ba6241cf3e8caa1456599894b81cc2';

export async function trendingMoviesFetch() {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results;
}

export async function searchMoviesFetch(searchQuery) {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${searchQuery}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );
  return response.data.results;
}

export async function movieDetailsFetch(id) {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}
