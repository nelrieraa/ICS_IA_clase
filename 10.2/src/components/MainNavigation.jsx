import { NavLink } from 'react-router-dom';

export default function MainNavigation() {
  return (
    <nav className="main-nav">
      <span className="logo">⚡ ProManager</span>
      <NavLink to="/" end>Inicio</NavLink>
      <NavLink to="/projects">Proyectos</NavLink>
    </nav>
  );
}
