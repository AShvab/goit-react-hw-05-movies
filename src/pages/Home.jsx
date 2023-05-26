import  { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { TrendingMoviesFetch } from 'services/api';


const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    TrendingMoviesFetch().then(setMovies);
  }, []); 

  return (
   <>
   <h1>Trending today</h1>
  <ul>
    {movies.map(({id, title}) =>{
      return (
        <li key={id}>
          <Link to={`movies/{id}`}>
            {title}
          </Link>
        </li>
      )
    })}
  </ul>
   </>   
  );
};

export default Home;


