import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import RootLayout from './routes/RootLayout';
import HomePage from './routes/HomePage';

import ProjectsPage, { loader as projectsLoader } from './routes/ProjectsPage';
import NewProjectPage, { action as newProjectAction } from './routes/NewProjectPage';
import ProjectDetailsPage, {
  loader as projectDetailsLoader,
  action as projectDetailsAction,
} from './routes/ProjectDetailsPage';
import NewTaskPage, {
  loader as newTaskLoader,
  action as newTaskAction,
} from './routes/NewTaskPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'projects',
        loader: projectsLoader,
        element: <ProjectsPage />,
      },
      {
        path: 'projects/new',
        action: newProjectAction,
        element: <NewProjectPage />,
      },
      {
        path: 'projects/:projectId',
        loader: projectDetailsLoader,
        action: projectDetailsAction,
        element: <ProjectDetailsPage />,
      },
      {
        path: 'projects/:projectId/new-task',
        loader: newTaskLoader,
        action: newTaskAction,
        element: <NewTaskPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
