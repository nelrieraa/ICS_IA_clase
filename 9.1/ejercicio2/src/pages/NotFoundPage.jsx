import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1 style={{ fontSize: '100px', margin: 0 }}>404</h1>
      <h2>¡Ups! Página no encontrada</h2>
      <p>Parece que te has perdido en el sistema.</p>
      <Link to="/" style={{ color: '#646cff', textDecoration: 'underline' }}>Volver al inicio</Link>
    </div>
  );
}