import { Link } from 'react-router-dom';
import { getAllMovies } from '../../lib/cinema';
import './MovieList.css';

export default function MovieList() {
  const movies = getAllMovies();

  return (
    <section>
      <h1 className="section-title">Películas</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`} className="movie-card">
            <div className="movie-poster-wrapper">
              <img
                src={movie.poster}
                alt={`Póster de ${movie.title}`}
                className="movie-poster"
                onError={(e) => { e.target.src = 'https://placehold.co/300x450/1f1f1f/555?text=Sin+imagen'; }}
              />
            </div>
            <div className="movie-card-info">
              <h2 className="movie-card-title">{movie.title}</h2>
              <span className="movie-card-year">{movie.year}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
