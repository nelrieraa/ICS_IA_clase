import { useParams, Link, useNavigate } from 'react-router-dom';
import { getMovieById, getCastByMovieId } from '../../lib/cinema';
import './MovieDetail.css';

export default function MovieDetail() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const movie = getMovieById(movieId);

  if (!movie) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <p style={{ color: '#aaa' }}>Película no encontrada.</p>
        <Link to="/movies" style={{ color: '#e50914' }}>Volver al listado</Link>
      </div>
    );
  }

  const cast = getCastByMovieId(movieId);

  return (
    <div className="detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Volver</button>

      <div className="detail-hero">
        <img
          src={movie.poster}
          alt={`Póster de ${movie.title}`}
          className="detail-poster"
          onError={(e) => { e.target.src = 'https://placehold.co/300x450/1f1f1f/555?text=Sin+imagen'; }}
        />
        <div className="detail-info">
          <h1 className="detail-title">{movie.title}</h1>
          <div className="detail-meta">
            <span className="badge">{movie.year}</span>
            <span className="badge-outline">{movie.director}</span>
          </div>
          <p className="detail-synopsis">{movie.synopsis}</p>
        </div>
      </div>

      <section className="cast-section">
        <h2 className="cast-title">Reparto</h2>
        {cast.length === 0 ? (
          <p style={{ color: '#aaa' }}>No hay información de reparto.</p>
        ) : (
          <div className="cast-grid">
            {cast.map((actor) => (
              <Link key={actor.id} to={`/actors/${actor.id}`} className="cast-card">
                <img
                  src={actor.photo}
                  alt={actor.name}
                  className="cast-photo"
                  onError={(e) => { e.target.src = 'https://placehold.co/100x100/1f1f1f/555?text=?'; }}
                />
                <div className="cast-info">
                  <span className="cast-name">{actor.name}</span>
                  <span className="cast-character">{actor.character}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
