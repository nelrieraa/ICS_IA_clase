import { Outlet, NavLink } from 'react-router-dom';

export default function DashboardLayout() {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      <aside style={{ width: '200px', borderRight: '1px solid #ccc', minHeight: '50vh' }}>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><NavLink to="/dashboard" end>📋 Ver Tareas</NavLink></li>
          <li><NavLink to="/dashboard/new">➕ Añadir Tarea</NavLink></li>
        </ul>
      </aside>
      <section style={{ flex: 1 }}>
        <Outlet />
      </section>
    </div>
  );
}