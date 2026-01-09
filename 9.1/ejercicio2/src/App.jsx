import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layouts
import RootLayout from './layouts/RootLayout';
import DashboardLayout from './layouts/DashboardLayout';

// Páginas
import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';
import NewTaskPage from './pages/NewTaskPage';
import TaskDetailPage from './pages/TaskDetailPage';
import NotFoundPage from './pages/NotFoundPage';

// CARGA DIFERIDA (Lazy Loading)
const ProfilePage = lazy(() => import('./pages/ProfilePage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          { index: true, element: <TaskListPage /> },
          { path: 'new', element: <NewTaskPage /> },
          { path: 'task/:taskId', element: <TaskDetailPage /> },
        ]
      },
      {
        path: 'profile',
        element: (
          <Suspense fallback={<div>Cargando perfil...</div>}>
            <ProfilePage />
          </Suspense>
        )
      },
      // RUTA COMODÍN (*)
      { path: '*', element: <NotFoundPage /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;