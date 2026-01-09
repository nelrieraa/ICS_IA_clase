import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { TasksProvider } from './context/TasksContext';
import DashboardApp from './components/DashboardApp';

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <div className="App">
          <DashboardApp />
        </div>
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;