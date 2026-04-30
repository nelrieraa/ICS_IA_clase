import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MovieList from './pages/movies/MovieList';
import MovieDetail from './pages/movies/MovieDetail';
import ActorList from './pages/actors/ActorList';
import ActorDetail from './pages/actors/ActorDetail';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'movies', element: <MovieList /> },
      { path: 'movies/:movieId', element: <MovieDetail /> },
      { path: 'actors', element: <ActorList /> },
      { path: 'actors/:actorId', element: <ActorDetail /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
