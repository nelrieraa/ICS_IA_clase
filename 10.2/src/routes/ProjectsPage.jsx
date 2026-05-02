import { useLoaderData, Link } from 'react-router-dom';
import { getProjects } from '../utils/api';
import ProjectList from '../components/ProjectList';

export async function loader() {
  const projects = getProjects();
  return { projects };
}

export default function ProjectsPage() {
  const { projects } = useLoaderData();

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Proyectos</h1>
        <Link to="/projects/new" className="btn btn-primary">+ Nuevo Proyecto</Link>
      </div>
      <ProjectList projects={projects} />
    </div>
  );
}
