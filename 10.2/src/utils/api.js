let projects = [
  { id: '1', name: 'Rediseño Web Corporativa', description: 'Actualizar la web de la empresa con nuevo branding.', createdAt: '2025-01-10' },
  { id: '2', name: 'App Móvil de Inventario', description: 'Desarrollar app para gestión de stock en almacén.', createdAt: '2025-02-14' },
  { id: '3', name: 'Migración a la Nube', description: 'Mover toda la infraestructura a AWS.', createdAt: '2025-03-01' },
];

let tasks = [
  { id: 't1', projectId: '1', title: 'Definir paleta de colores', completed: true },
  { id: 't2', projectId: '1', title: 'Maquetar página de inicio', completed: false },
  { id: 't3', projectId: '1', title: 'Integrar CMS', completed: false },
  { id: 't4', projectId: '2', title: 'Diseño de base de datos', completed: true },
  { id: 't5', projectId: '2', title: 'Pantalla de login', completed: false },
  { id: 't6', projectId: '3', title: 'Auditoría de servicios actuales', completed: true },
  { id: 't7', projectId: '3', title: 'Configurar VPC en AWS', completed: false },
  { id: 't8', projectId: '3', title: 'Plan de migración por fases', completed: false },
];

let nextProjectId = 4;
let nextTaskId = 9;

export function getProjects() {
  return [...projects];
}

export function getProjectById(id) {
  return projects.find((p) => p.id === id) || null;
}

export function createProject({ name, description }) {
  const project = {
    id: String(nextProjectId++),
    name,
    description: description || '',
    createdAt: new Date().toISOString().split('T')[0],
  };
  projects.push(project);
  return project;
}

export function deleteProject(id) {
  projects = projects.filter((p) => p.id !== id);
  tasks = tasks.filter((t) => t.projectId !== id);
}

export function getTasksByProject(projectId) {
  return tasks.filter((t) => t.projectId === projectId);
}

export function createTask({ projectId, title }) {
  const task = {
    id: `t${nextTaskId++}`,
    projectId,
    title,
    completed: false,
  };
  tasks.push(task);
  return task;
}

export function toggleTask(id) {
  const task = tasks.find((t) => t.id === id);
  if (task) task.completed = !task.completed;
  return task;
}

export function deleteTask(id) {
  tasks = tasks.filter((t) => t.id !== id);
}
