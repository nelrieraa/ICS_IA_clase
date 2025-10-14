import CabeceraFicha from './CabeceraFicha';
import ImagenProducto from './ImagenProducto';
import DetallesProducto from './DetallesProducto';
import PieFicha from './PieFicha';

function FichaProducto({ producto, children }) {
  return (
    <div className="ficha">
      <CabeceraFicha nombre={producto.nombre} vendedor={producto.vendedor} />
      <ImagenProducto url={producto.imagenes[0]} alt={producto.nombre} />
      <DetallesProducto caracteristicas={producto.caracteristicas}>
        {children}
      </DetallesProducto>
      <PieFicha precio={producto.precio} enStock={producto.enStock} />
    </div>
  );
}

export default FichaProducto;
