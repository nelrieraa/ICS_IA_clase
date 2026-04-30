import { notFound } from 'next/navigation';
import Link from 'next/link';
import pool from '@/lib/db';
import FormEditar from './FormEditar';

export default async function EditarRecetaPage({ params }) {
  const { id } = await params;

  const [[receta]] = await pool.execute('SELECT * FROM recetas WHERE id = ?', [id]);
  if (!receta) notFound();

  return (
    <div className="container">
      <Link href={`/recetas/${id}`} className="back-link">← Volver a la receta</Link>
      <h1 className="page-title">Editar Receta</h1>
      <p className="page-subtitle">Modifica los campos que necesites</p>

      <div className="form-card">
        <FormEditar receta={receta} />
      </div>
    </div>
  );
}
