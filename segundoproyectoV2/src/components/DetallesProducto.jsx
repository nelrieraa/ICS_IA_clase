function DetallesProducto({ caracteristicas, children }) {
  return (
    <div className="detalles">
      <ul>
        {caracteristicas.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>
      {children}
    </div>
  );
}

export default DetallesProducto;
