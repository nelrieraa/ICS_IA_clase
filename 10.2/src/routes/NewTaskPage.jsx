import { Form, useActionData, useNavigation, redirect, Link, useLoaderData } from 'react-router-dom';
import { createTask, getProjectById } from '../utils/api';

export async function loader({ params }) {
  const project = getProjectById(params.projectId);
  if (!project) throw new Response('Proyecto no encontrado', { status: 404 });
  return { project };
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const title = formData.get('title')?.toString().trim();

  const errors = {};
  if (!title) errors.title = 'El título de la tarea es obligatorio.';

  if (Object.keys(errors).length > 0) return { errors };

  createTask({ projectId: params.projectId, title });
  return redirect(`/projects/${params.projectId}`);
}

export default function NewTaskPage() {
  const { project } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <div>
      <Link to={`/projects/${project.id}`} className="back-link">
        ← Volver a {project.name}
      </Link>
      <h1 className="page-title" style={{ marginBottom: '0.25rem' }}>Nueva Tarea</h1>
      <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
        Proyecto: <strong>{project.name}</strong>
      </p>

      <div className="form-card">
        <Form method="post">
          <div className="form-group">
            <label htmlFor="title">Título de la tarea *</label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Describe qué hay que hacer..."
              autoFocus
            />
            {actionData?.errors?.title && (
              <span className="field-error">{actionData.errors.title}</span>
            )}
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? (
                <><span className="spinner" /> Guardando...</>
              ) : (
                '✓ Añadir Tarea'
              )}
            </button>
            <Link to={`/projects/${project.id}`} className="btn btn-secondary">Cancelar</Link>
          </div>
        </Form>
      </div>
    </div>
  );
}
