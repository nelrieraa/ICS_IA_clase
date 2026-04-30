import { Link, Outlet } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  return (
    <div className="app">
      <header className="header">
        <Link to="/" className="logo">CineDB</Link>
        <nav className="nav">
          <Link to="/movies">Películas</Link>
          <Link to="/actors">Actores</Link>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <p>CineDB &copy; 2025</p>
      </footer>
    </div>
  );
}
