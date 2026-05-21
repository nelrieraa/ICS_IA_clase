import './globals.css';

export const metadata = {
  title: 'Gestor de Imágenes IA',
  description: 'Sube imágenes y descubre su contenido con inteligencia artificial',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header className="site-header">
          <h1>🖼 Gestor de Imágenes IA</h1>
          <p>Sube imágenes · Analiza con Groq · Busca por contenido</p>
        </header>
        {children}
      </body>
    </html>
  );
}
