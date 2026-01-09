import React from 'react';

const Producto = React.memo(({ producto, alAnadir }) => {
  console.log(`Renderizando Producto: ${producto.nombre}`);
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', borderRadius: '8px' }}>
      <h4>{producto.nombre}</h4>
      <p>Precio: {producto.precio}€</p>
      <button onClick={() => alAnadir(producto)}>Añadir al carrito</button>
    </div>
  );
});

export default Producto;