'use client';

import { borrarReceta } from '../actions';

export default function BorrarButton({ id }) {
  const accion = borrarReceta.bind(null, id);

  return (
    <form action={accion}>
      <button
        type="submit"
        className="btn btn-danger"
        onClick={(e) => {
          if (!confirm('¿Seguro que quieres borrar esta receta?')) {
            e.preventDefault();
          }
        }}
      >
        🗑 Borrar
      </button>
    </form>
  );
}
