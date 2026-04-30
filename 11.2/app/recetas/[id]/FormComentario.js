'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { agregarComentario } from '../actions';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="btn btn-primary" disabled={pending}>
      {pending ? 'Enviando...' : 'Comentar'}
    </button>
  );
}

export default function FormComentario({ recetaId }) {
  const accion = agregarComentario.bind(null, recetaId);
  const [state, formAction] = useActionState(accion, null);

  return (
    <form action={formAction} style={{ marginTop: '1rem', borderTop: '1px solid #e9ecef', paddingTop: '1rem' }}>
      <h3 style={{ marginBottom: '0.75rem', fontSize: '1rem', color: '#333' }}>Añadir un comentario</h3>

      {state?.error && <div className="error-msg">{state.error}</div>}
      {state?.success && (
        <div style={{ background: '#d8f3dc', color: '#1b4332', padding: '0.5rem 1rem', borderRadius: '6px', marginBottom: '1rem', fontSize: '0.9rem' }}>
          Comentario añadido correctamente.
        </div>
      )}

      <div className="form-group">
        <label htmlFor="autor">Tu nombre *</label>
        <input id="autor" name="autor" type="text" placeholder="Ej: María García" required />
      </div>

      <div className="form-group">
        <label htmlFor="texto">Comentario *</label>
        <textarea id="texto" name="texto" rows={3} placeholder="Escribe tu opinión sobre esta receta..." required />
      </div>

      <SubmitButton />
    </form>
  );
}
