import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Blog de Recetas',
  description: 'Descubre y comparte tus recetas favoritas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header className="site-header">
          <Link href="/" className="logo">🍳 Blog de Recetas</Link>
          <nav>
            <Link href="/">Inicio</Link>
            <Link href="/recetas/nueva">Nueva Receta</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
