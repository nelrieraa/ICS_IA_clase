import React, { createContext, useReducer, useContext } from 'react';

const TasksContext = createContext();

const tasksReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: Date.now(), text: action.payload.text, author: action.payload.author, completed: false }];
    case 'TOGGLE_TASK':
      return state.map(t => t.id === action.payload ? { ...t, completed: !t.completed } : t);
    case 'DELETE_TASK':
      return state.filter(t => t.id !== action.payload);
    default: return state;
  }
};

export const TasksProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, [
    { id: 1, text: "Aprender Context API", author: "Ana", completed: false },
    { id: 2, text: "Configurar useReducer", author: "Luis", completed: true }
  ]);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export const useTasks = () => useContext(TasksContext);