import { useParams, useNavigate } from 'react-router-dom';
import { TASKS } from '../data/tasks';

export default function TaskDetailPage() {
  const { taskId } = useParams();
  const navigate = useNavigate();
  const task = TASKS.find(t => t.id === parseInt(taskId));

  const handleDelete = () => {
    console.log("Tarea eliminada...");
    // replace: true evita que el usuario vuelva atrás a una tarea que ya no existe
    navigate('/dashboard', { replace: true });
  };

  if (!task) return <h3>Tarea no encontrada</h3>;

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button onClick={handleDelete} style={{ color: 'red' }}>Borrar Tarea</button>
    </div>
  );
}