import { Link } from 'react-router-dom';
import { getAllActors } from '../../lib/cinema';
import './ActorList.css';

export default function ActorList() {
  const actors = getAllActors();

  return (
    <section>
      <h1 className="section-title">Actores</h1>
      <div className="actor-grid">
        {actors.map((actor) => (
          <Link key={actor.id} to={`/actors/${actor.id}`} className="actor-card">
            <img
              src={actor.photo}
              alt={actor.name}
              className="actor-photo"
              onError={(e) => { e.target.src = 'https://placehold.co/200x200/1f1f1f/555?text=?'; }}
            />
            <h2 className="actor-name">{actor.name}</h2>
            <span className="actor-year">{actor.birthYear}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
