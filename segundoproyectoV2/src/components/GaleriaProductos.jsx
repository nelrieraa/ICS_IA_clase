import FichaProducto from './FichaProducto';

function GaleriaProductos({ productos }) {
  return (
    <div className="galeria">
      {productos.map(producto => (
        <FichaProducto key={producto.id} producto={producto}>
          <button className="btn-carrito">Más información</button>
        </FichaProducto>
      ))}
    </div>
  );
}

export default GaleriaProductos;
