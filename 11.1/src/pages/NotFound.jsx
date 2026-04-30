import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h1 style={{ fontSize: '4rem', color: '#e50914' }}>404</h1>
      <p style={{ color: '#aaa', marginBottom: '1.5rem' }}>Página no encontrada</p>
      <Link to="/" style={{ color: '#e50914' }}>Volver al inicio</Link>
    </div>
  );
}
