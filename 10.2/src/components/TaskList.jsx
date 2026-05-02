import { useFetcher, useSubmit } from 'react-router-dom';

function TaskItem({ task }) {
  const fetcher = useFetcher();
  const submit = useSubmit();

  const isToggling = fetcher.state !== 'idle';
  const optimisticCompleted = isToggling ? !task.completed : task.completed;

  function handleDelete() {
    if (!window.confirm(`¿Eliminar la tarea "${task.title}"?`)) return;
    submit(
      { intent: 'deleteTask', taskId: task.id },
      { method: 'delete', action: `/projects/${task.projectId}` }
    );
  }

  return (
    <div className={`task-item ${optimisticCompleted ? 'completed' : ''}`}>
      <fetcher.Form method="post" action={`/projects/${task.projectId}`}>
        <input type="hidden" name="intent" value="toggleTask" />
        <input type="hidden" name="taskId" value={task.id} />
        <button
          type="submit"
          className={`toggle-btn ${optimisticCompleted ? 'done' : ''}`}
          title={optimisticCompleted ? 'Marcar incompleta' : 'Marcar completada'}
        >
          {optimisticCompleted ? '✓' : ''}
        </button>
      </fetcher.Form>

      <span className="task-title">{task.title}</span>

      <span className={`badge ${optimisticCompleted ? 'badge-done' : 'badge-pending'}`}>
        {optimisticCompleted ? 'Hecha' : 'Pendiente'}
      </span>

      <div className="task-actions">
        <button onClick={handleDelete} className="btn btn-sm btn-danger" title="Eliminar tarea">
          🗑
        </button>
      </div>
    </div>
  );
}

export default function TaskList({ tasks }) {
  if (tasks.length === 0) {
    return <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>No hay tareas aún.</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((t) => (
        <TaskItem key={t.id} task={t} />
      ))}
    </div>
  );
}
