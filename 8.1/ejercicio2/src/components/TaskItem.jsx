import React from 'react';


const TaskItem = React.memo(({ task, currentUser, onToggle, onDelete }) => {
  console.log(`Renderizando TaskItem: ${task.text}`);
  
  const isOwner = currentUser.name === task.author;
  const isGuest = currentUser.role === 'guest';
  const canInteract = isOwner && !isGuest;

  return (
    <div style={{ 
      padding: '10px', border: '1px solid #ddd', margin: '5px', 
      opacity: canInteract ? 1 : 0.5, borderRadius: '8px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center'
    }}>
      <div>
        <input 
          type="checkbox" 
          checked={task.completed} 
          disabled={!canInteract}
          onChange={() => onToggle(task.id)}
        />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none', marginLeft: '10px' }}>
          {task.text} <small>(por {task.author})</small>
        </span>
      </div>
      {canInteract && (
        <button onClick={() => onDelete(task.id)} style={{ color: 'red' }}>Eliminar</button>
      )}
    </div>
  );
});

export default TaskItem;