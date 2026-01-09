import { useNavigate } from 'react-router-dom';

export default function NewTaskPage() {
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Tarea guardada simulación...");
    // Redirección simple
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Nueva Tarea</h2>
      <form onSubmit={handleSave}>
        <input type="text" placeholder="Título de la tarea" required />
        <button type="submit" style={{ marginLeft: '10px' }}>Guardar y Volver</button>
      </form>
    </div>
  );
}