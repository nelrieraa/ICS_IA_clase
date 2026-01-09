import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '20px', borderBottom: '1px solid #ccc', display: 'flex', gap: '20px' }}>
      <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Inicio</NavLink>
      <NavLink to="/posts" className={({ isActive }) => isActive ? 'active-link' : ''}>Artículos</NavLink>
    </nav>
  );
};

export default Navbar;