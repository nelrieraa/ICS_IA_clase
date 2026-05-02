import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="error-page">
      <h1>Oops! Algo salió mal</h1>
      <p>Lo sentimos, ha ocurrido un error inesperado.</p>
      <p style={{ color: '#999' }}>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/" className="error-link">
        Volver al inicio
      </Link>
    </div>
  );
}
