import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTasks } from '../context/TasksContext';
import TaskItem from './TaskItem';
import UserInfo from './UserInfo';
import UserSelector from './UserSelector';

const DashboardApp = () => {
  const { user } = useAuth();
  const { tasks, dispatch } = useTasks();
  const [text, setText] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!text) return;
    dispatch({ type: 'ADD_TASK', payload: { text, author: user.name } });
    setText("");
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <UserInfo />
      <h1>Dashboard de Tareas</h1>
      <UserSelector />
      
      {user.role !== 'guest' && (
        <form onSubmit={handleAddTask} style={{ margin: '20px 0' }}>
          <input value={text} onChange={e => setText(e.target.value)} placeholder="Nueva tarea..." />
          <button type="submit">Añadir</button>
        </form>
      )}

      <h3>Lista de Tareas</h3>
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          currentUser={user} 
          onToggle={(id) => dispatch({ type: 'TOGGLE_TASK', payload: id })}
          onDelete={(id) => dispatch({ type: 'DELETE_TASK', payload: id })}
        />
      ))}
    </div>
  );
};

export default DashboardApp;