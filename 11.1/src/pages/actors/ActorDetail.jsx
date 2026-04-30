import { useParams, Link, useNavigate } from 'react-router-dom';
import { getActorById, getFilmographyByActorId } from '../../lib/cinema';
import './ActorDetail.css';

export default function ActorDetail() {
  const { actorId } = useParams();
  const navigate = useNavigate();
  const actor = getActorById(actorId);

  if (!actor) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem' }}>
        <p style={{ color: '#aaa' }}>Actor no encontrado.</p>
        <Link to="/actors" style={{ color: '#e50914' }}>Volver al listado</Link>
      </div>
    );
  }

  const filmography = getFilmographyByActorId(actorId);

  return (
    <div className="actor-detail-page">
      <button className="back-btn" onClick={() => navigate(-1)}>← Volver</button>

      <div className="actor-hero">
        <img
          src={actor.photo}
          alt={actor.name}
          className="actor-detail-photo"
          onError={(e) => { e.target.src = 'https://placehold.co/200x200/1f1f1f/555?text=?'; }}
        />
        <div className="actor-detail-info">
          <h1 className="actor-detail-name">{actor.name}</h1>
          <span className="badge">Nacido en {actor.birthYear}</span>
          <p className="actor-detail-bio">{actor.bio}</p>
        </div>
      </div>

      <section className="filmography-section">
        <h2 className="filmography-title">Filmografía</h2>
        {filmography.length === 0 ? (
          <p style={{ color: '#aaa' }}>No hay películas registradas.</p>
        ) : (
          <div className="filmography-grid">
            {filmography.map((movie) => (
              <Link key={movie.id} to={`/movies/${movie.id}`} className="film-card">
                <div className="film-poster-wrapper">
                  <img
                    src={movie.poster}
                    alt={`Póster de ${movie.title}`}
                    className="film-poster"
                    onError={(e) => { e.target.src = 'https://placehold.co/300x450/1f1f1f/555?text=Sin+imagen'; }}
                  />
                </div>
                <div className="film-info">
                  <span className="film-title">{movie.title}</span>
                  <span className="film-year">{movie.year}</span>
                  <span className="film-character">como {movie.character}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
