// Esta ruta concentra: loader de datos + actions para toggle, borrar tarea y borrar proyecto.
import {
  useLoaderData,
  useSubmit,
  redirect,
  Link,
} from 'react-router-dom';
import {
  getProjectById,
  getTasksByProject,
  toggleTask,
  deleteTask,
  deleteProject,
} from '../utils/api';
import TaskList from '../components/TaskList';

// loader: carga el proyecto y sus tareas antes de renderizar.
export async function loader({ params }) {
  const project = getProjectById(params.projectId);
  if (!project) throw new Response('Proyecto no encontrado', { status: 404 });
  const tasks = getTasksByProject(params.projectId);
  return { project, tasks };
}

// action: gestiona todas las mutaciones de esta ruta según el campo "intent".
export async function action({ request, params }) {
  const formData = await request.formData();
  const intent = formData.get('intent');

  if (intent === 'toggleTask') {
    // useFetcher envía aquí para cambiar estado sin navegar.
    const taskId = formData.get('taskId');
    toggleTask(taskId);
    return { ok: true };
  }

  if (intent === 'deleteTask') {
    // useSubmit con method DELETE llega aquí.
    const taskId = formData.get('taskId');
    deleteTask(taskId);
    return { ok: true };
  }

  if (intent === 'deleteProject') {
    // useSubmit con confirmación previa borra el proyecto y redirige.
    deleteProject(params.projectId);
    return redirect('/projects');
  }

  return null;
}

export default function ProjectDetailsPage() {
  const { project, tasks } = useLoaderData();

  // useSubmit: permite enviar un formulario programáticamente,
  // útil para añadir lógica (confirm) antes del envío.
  const submit = useSubmit();

  const completedCount = tasks.filter((t) => t.completed).length;

  function handleDeleteProject() {
    if (!window.confirm(`¿Eliminar el proyecto "${project.name}" y todas sus tareas?`)) return;
    submit(
      { intent: 'deleteProject' },
      { method: 'delete', action: `/projects/${project.id}` }
    );
  }

  return (
    <div>
      <Link to="/projects" className="back-link">← Volver a proyectos</Link>

      {/* Cabecera del proyecto */}
      <div className="project-detail-header">
        <div>
          <h1>{project.name}</h1>
          <p>{project.description || 'Sin descripción'}</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.8rem', color: '#64748b' }}>
            Creado el {project.createdAt}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <Link to={`/projects/${project.id}/new-task`} className="btn btn-primary btn-sm">
            + Nueva Tarea
          </Link>
          {/* useSubmit: llamamos a handleDeleteProject que confirma antes de enviar */}
          <button onClick={handleDeleteProject} className="btn btn-danger btn-sm">
            🗑 Eliminar Proyecto
          </button>
        </div>
      </div>

      {/* Estadísticas */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <span className="badge badge-count">{tasks.length} tareas</span>
        <span className="badge badge-done">{completedCount} completadas</span>
        <span className="badge badge-pending">{tasks.length - completedCount} pendientes</span>
      </div>

      {/* Lista de tareas */}
      <div className="section-header">
        <span className="section-title">📋 Tareas</span>
        <Link to={`/projects/${project.id}/new-task`} className="btn btn-ghost btn-sm">+ Añadir</Link>
      </div>

      <TaskList tasks={tasks} />
    </div>
  );
}
