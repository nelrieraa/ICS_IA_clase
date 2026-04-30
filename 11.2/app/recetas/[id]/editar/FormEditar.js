'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import Link from 'next/link';
import { editarReceta } from '../../actions';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-primary" disabled={pending}>
      {pending ? 'Guardando...' : 'Guardar Cambios'}
    </button>
  );
}

export default function FormEditar({ receta }) {
  const accion = editarReceta.bind(null, receta.id);
  const [state, formAction] = useActionState(accion, null);

  return (
    <>
      {state?.error && <div className="error-msg">{state.error}</div>}

      <form action={formAction}>
        <div className="form-group">
          <label htmlFor="titulo">Título *</label>
          <input id="titulo" name="titulo" type="text" defaultValue={receta.titulo} required />
        </div>

        <div className="form-group">
          <label htmlFor="descripcion_corta">Descripción corta *</label>
          <textarea id="descripcion_corta" name="descripcion_corta" rows={2} defaultValue={receta.descripcion_corta} required />
        </div>

        <div className="form-group">
          <label htmlFor="ingredientes">Ingredientes *</label>
          <textarea id="ingredientes" name="ingredientes" rows={5} defaultValue={receta.ingredientes} required />
        </div>

        <div className="form-group">
          <label htmlFor="instrucciones">Instrucciones *</label>
          <textarea id="instrucciones" name="instrucciones" rows={7} defaultValue={receta.instrucciones} required />
        </div>

        <div className="form-group">
          <label htmlFor="tiempo_coccion">Tiempo de cocción (minutos) *</label>
          <input id="tiempo_coccion" name="tiempo_coccion" type="number" min="1" defaultValue={receta.tiempo_coccion} required />
        </div>

        <div className="form-actions">
          <SubmitButton />
          <Link href={`/recetas/${receta.id}`} className="btn btn-secondary">Cancelar</Link>
        </div>
      </form>
    </>
  );
}
