import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <h1 className="home-title">Bienvenido a CineDB</h1>
      <p className="home-subtitle">Tu base de datos de cine favorita</p>
      <div className="home-cards">
        <Link to="/movies" className="home-card">
          <span className="home-card-icon">🎬</span>
          <h2>Películas</h2>
          <p>Explora el catálogo de películas y sus repartos</p>
        </Link>
        <Link to="/actors" className="home-card">
          <span className="home-card-icon">🎭</span>
          <h2>Actores</h2>
          <p>Descubre actores y sus filmografías</p>
        </Link>
      </div>
    </div>
  );
}
