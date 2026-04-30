import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <div className="home-hero">
        <h1>Gestiona tus <span>Proyectos</span><br />con claridad</h1>
        <p>Organiza proyectos, añade tareas, marca avances y mantén el control de todo tu trabajo en un solo lugar.</p>
        <Link to="/projects" className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.75rem 2rem' }}>
          Ver Proyectos →
        </Link>
      </div>

      <div className="home-features">
        <div className="feature-card">
          <div className="icon">📋</div>
          <h3>Gestión de Proyectos</h3>
          <p>Crea y organiza todos tus proyectos en un vistazo.</p>
        </div>
        <div className="feature-card">
          <div className="icon">✅</div>
          <h3>Control de Tareas</h3>
          <p>Añade, completa y elimina tareas en tiempo real.</p>
        </div>
        <div className="feature-card">
          <div className="icon">⚡</div>
          <h3>Acciones Rápidas</h3>
          <p>Actualiza estados sin recargar la página con useFetcher.</p>
        </div>
        <div className="feature-card">
          <div className="icon">🔒</div>
          <h3>Validación</h3>
          <p>Formularios con validación y feedback inmediato.</p>
        </div>
      </div>
    </div>
  );
}
