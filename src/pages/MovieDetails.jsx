import  { useEffect } from 'react'
import { Link, Outlet} from 'react-router-dom'

function MovieDetails() {


  // const {movieId} = useParams()
    // const { genres, overview, title, vote_average, release_date, poster_path } =
  // movieInfo;
  useEffect(() => {
    // HTTPS  запит
      }, []);
      

  return (
    <div>
      {/* <div>Movie: {movieId} </div> */}
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default MovieDetails
