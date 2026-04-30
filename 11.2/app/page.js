import Link from 'next/link';
import pool from '@/lib/db';

export default async function HomePage() {
  const [recetas] = await pool.execute(
    'SELECT id, titulo, descripcion_corta, tiempo_coccion, fecha_creacion FROM recetas ORDER BY fecha_creacion DESC'
  );

  return (
    <div className="container">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 className="page-title">Todas las Recetas</h1>
          <p className="page-subtitle">{recetas.length} receta{recetas.length !== 1 ? 's' : ''} disponible{recetas.length !== 1 ? 's' : ''}</p>
        </div>
        <Link href="/recetas/nueva" className="btn btn-primary">+ Nueva Receta</Link>
      </div>

      {recetas.length === 0 ? (
        <div className="empty-state">
          <p>Aún no hay recetas. ¡Sé el primero en añadir una!</p>
          <Link href="/recetas/nueva" className="btn btn-primary">Crear Receta</Link>
        </div>
      ) : (
        <div className="recipe-grid">
          {recetas.map((r) => (
            <Link key={r.id} href={`/recetas/${r.id}`} className="recipe-card">
              <h2>{r.titulo}</h2>
              <p>{r.descripcion_corta}</p>
              <span className="badge-time">⏱ {r.tiempo_coccion} min</span>
              <span className="meta">{new Date(r.fecha_creacion).toLocaleDateString('es-ES')}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
