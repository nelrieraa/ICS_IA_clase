import { Link } from 'react-router-dom';
import { TASKS } from '../data/tasks';

export default function TaskListPage() {
  return (
    <div>
      <h2>📋 Mis Tareas</h2>
      <div style={{ display: 'grid', gap: '10px' }}>
        {TASKS.map(task => (
          <div key={task.id} style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '8px', display: 'flex', justifyContent: 'space-between' }}>
            <span>{task.title} <strong>({task.status})</strong></span>
            <Link to={`/dashboard/task/${task.id}`} style={{ color: '#646cff' }}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
}