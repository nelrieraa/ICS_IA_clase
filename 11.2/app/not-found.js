import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container empty-state">
      <h1 style={{ fontSize: '4rem', color: '#2d6a4f' }}>404</h1>
      <p>La página que buscas no existe.</p>
      <Link href="/" className="btn btn-primary">Volver al inicio</Link>
    </div>
  );
}
