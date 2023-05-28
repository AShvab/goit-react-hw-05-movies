import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './Layout/Layout';

import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Suspense>
  );
};

export default App;
