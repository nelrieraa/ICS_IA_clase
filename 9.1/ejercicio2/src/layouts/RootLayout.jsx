import { Outlet, NavLink } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header style={{ background: '#282c34', padding: '1rem', color: 'white' }}>
        <nav style={{ display: 'flex', gap: '20px' }}>
          <NavLink to="/" style={({isActive}) => ({color: isActive ? 'yellow' : 'white'})}>Inicio</NavLink>
          <NavLink to="/dashboard" style={({isActive}) => ({color: isActive ? 'yellow' : 'white'})}>Panel de Tareas</NavLink>
          <NavLink to="/profile" style={({isActive}) => ({color: isActive ? 'yellow' : 'white'})}>Mi Perfil</NavLink>
        </nav>
      </header>
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
}