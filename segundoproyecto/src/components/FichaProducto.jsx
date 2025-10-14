import ImagenProducto from './ImagenProducto';

function FichaProducto({ producto, children }) {
  return (
    <div className="ficha">
      <ImagenProducto url={producto.imagenURL} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p className="precio">{producto.precio.toFixed(2)} €</p>
      {children}
    </div>
  );
}

export default FichaProducto;
