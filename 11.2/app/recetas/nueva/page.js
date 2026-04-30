'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Link from 'next/link';
import { crearReceta } from '../actions';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-primary" disabled={pending}>
      {pending ? 'Guardando...' : 'Crear Receta'}
    </button>
  );
}

export default function NuevaRecetaPage() {
  const [state, formAction] = useActionState(crearReceta, null);

  return (
    <div className="container">
      <Link href="/" className="back-link">← Volver al inicio</Link>
      <h1 className="page-title">Nueva Receta</h1>
      <p className="page-subtitle">Rellena todos los campos para añadir tu receta</p>

      <div className="form-card">
        {state?.error && <div className="error-msg">{state.error}</div>}

        <form action={formAction}>
          <div className="form-group">
            <label htmlFor="titulo">Título *</label>
            <input id="titulo" name="titulo" type="text" placeholder="Ej: Tortilla de patatas" required />
          </div>

          <div className="form-group">
            <label htmlFor="descripcion_corta">Descripción corta *</label>
            <textarea id="descripcion_corta" name="descripcion_corta" rows={2} placeholder="Un resumen breve de la receta..." required />
          </div>

          <div className="form-group">
            <label htmlFor="ingredientes">Ingredientes *</label>
            <textarea id="ingredientes" name="ingredientes" rows={5} placeholder="Escribe cada ingrediente en una línea..." required />
          </div>

          <div className="form-group">
            <label htmlFor="instrucciones">Instrucciones *</label>
            <textarea id="instrucciones" name="instrucciones" rows={7} placeholder="Explica paso a paso cómo preparar la receta..." required />
          </div>

          <div className="form-group">
            <label htmlFor="tiempo_coccion">Tiempo de cocción (minutos) *</label>
            <input id="tiempo_coccion" name="tiempo_coccion" type="number" min="1" placeholder="Ej: 30" required />
          </div>

          <div className="form-actions">
            <SubmitButton />
            <Link href="/" className="btn btn-secondary">Cancelar</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
