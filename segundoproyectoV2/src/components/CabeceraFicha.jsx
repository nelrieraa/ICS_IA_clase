function CabeceraFicha({ nombre, vendedor }) {
  return (
    <div className="cabecera">
      <h2>{nombre}</h2>
      <p>Vendedor: {vendedor.nombre} ⭐{vendedor.rating}</p>
    </div>
  );
}

export default CabeceraFicha;
