import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=a3ba6241cf3e8caa1456599894b81cc2';


export async function TrendingMoviesFetch (){
const response =  await axios.get(`${BASE_URL}/trending/movie/day?${API_KEY}`)  
    return response.data.results;
}


