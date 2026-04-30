import Link from 'next/link';
import { notFound } from 'next/navigation';
import pool from '@/lib/db';
import FormComentario from './FormComentario';
import BorrarButton from './BorrarButton';

export default async function RecetaDetailPage({ params }) {
  const { id } = await params;

  const [[receta]] = await pool.execute('SELECT * FROM recetas WHERE id = ?', [id]);
  if (!receta) notFound();

  const [comentarios] = await pool.execute(
    'SELECT * FROM comentarios WHERE receta_id = ? ORDER BY fecha_creacion ASC',
    [id]
  );

  return (
    <div className="container">
      <Link href="/" className="back-link">← Volver al inicio</Link>

      <div className="detail-header">
        <div>
          <h1 className="page-title">{receta.titulo}</h1>
          <span className="badge-time">⏱ {receta.tiempo_coccion} minutos</span>
          <span style={{ color: '#999', fontSize: '0.82rem', marginLeft: '0.75rem' }}>
            {new Date(receta.fecha_creacion).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
          </span>
        </div>
        <div className="detail-actions">
          <Link href={`/recetas/${id}/editar`} className="btn btn-secondary">✏️ Editar</Link>
          <BorrarButton id={id} />
        </div>
      </div>

      <div className="detail-section">
        <h2>Descripción</h2>
        <p>{receta.descripcion_corta}</p>
      </div>

      <div className="detail-section">
        <h2>Ingredientes</h2>
        <pre>{receta.ingredientes}</pre>
      </div>

      <div className="detail-section">
        <h2>Instrucciones</h2>
        <pre>{receta.instrucciones}</pre>
      </div>

      <div className="detail-section">
        <h2>Comentarios ({comentarios.length})</h2>

        {comentarios.length === 0 ? (
          <p style={{ color: '#888', marginBottom: '1rem' }}>Sé el primero en comentar esta receta.</p>
        ) : (
          <div className="comment-list">
            {comentarios.map((c) => (
              <div key={c.id} className="comment-item">
                <span className="comment-author">{c.autor}</span>
                <span className="comment-date">{new Date(c.fecha_creacion).toLocaleDateString('es-ES')}</span>
                <p className="comment-text">{c.texto}</p>
              </div>
            ))}
          </div>
        )}

        <FormComentario recetaId={id} />
      </div>
    </div>
  );
}
