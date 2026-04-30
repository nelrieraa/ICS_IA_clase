import { Link } from 'react-router-dom';

export default function ProjectList({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="empty-state">
        <div className="icon">📂</div>
        <p>No hay proyectos todavía.</p>
        <Link to="/projects/new" className="btn btn-primary">Crear primer proyecto</Link>
      </div>
    );
  }

  return (
    <div className="project-list">
      {projects.map((p) => (
        <Link key={p.id} to={`/projects/${p.id}`} className="project-card">
          <div className="project-card-info">
            <h3>{p.name}</h3>
            <p>{p.description || 'Sin descripción'}</p>
          </div>
          <span className="project-card-meta">{p.createdAt}</span>
        </Link>
      ))}
    </div>
  );
}
