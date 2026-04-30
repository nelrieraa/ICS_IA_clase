// action: se ejecuta cuando se envía un <Form method="post"> en esta ruta.
// Procesa la mutación y puede devolver errores o redirigir.
import { Form, useActionData, useNavigation, redirect, Link } from 'react-router-dom';
import { createProject } from '../utils/api';

export async function action({ request }) {
  const formData = await request.formData();
  const name = formData.get('name')?.toString().trim();
  const description = formData.get('description')?.toString().trim();

  // Validación: devolvemos errores si falla, sin redirigir.
  const errors = {};
  if (!name) errors.name = 'El nombre es obligatorio.';
  else if (name.length < 5) errors.name = 'El nombre debe tener al menos 5 caracteres.';

  if (Object.keys(errors).length > 0) return { errors };

  createProject({ name, description });

  // redirect: navegamos al usuario tras la operación exitosa.
  return redirect('/projects');
}

export default function NewProjectPage() {
  // useActionData: recibe los datos que devuelve la action (errores de validación).
  const actionData = useActionData();

  // useNavigation: nos informa del estado de la navegación actual.
  // 'submitting' → hay un <Form> enviándose ahora mismo.
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <div>
      <Link to="/projects" className="back-link">← Volver a proyectos</Link>
      <h1 className="page-title" style={{ marginBottom: '1.5rem' }}>Nuevo Proyecto</h1>

      <div className="form-card">
        {/* Form de React Router: envía al action de esta ruta automáticamente */}
        <Form method="post">
          <div className="form-group">
            <label htmlFor="name">Nombre del proyecto *</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Mínimo 5 caracteres"
              autoFocus
            />
            {/* useActionData: mostramos el error de validación si existe */}
            {actionData?.errors?.name && (
              <span className="field-error">{actionData.errors.name}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="description">Descripción</label>
            <textarea id="description" name="description" placeholder="Describe brevemente el proyecto..." />
          </div>

          <div className="form-actions">
            {/* useNavigation: deshabilitamos el botón y mostramos feedback mientras se envía */}
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? (
                <><span className="spinner" /> Guardando...</>
              ) : (
                '✓ Crear Proyecto'
              )}
            </button>
            <Link to="/projects" className="btn btn-secondary">Cancelar</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
