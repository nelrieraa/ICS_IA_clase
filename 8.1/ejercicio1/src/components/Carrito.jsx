import React from 'react';

const Carrito = ({ items, total, onUpdateQty, onRemove }) => {
  console.log("Rendering: Carrito");

  return (
    <div style={{ width: '45%', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px' }}>
      <h2>Tu Carrito 🛒</h2>
      {items.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          {items.map(item => (
            <div key={item.id} style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
              <h4>{item.nombre}</h4>
              <p>{item.precio}€ x {item.cantidad} = {item.precio * item.cantidad}€</p>
              <button onClick={() => onUpdateQty(item.id, 1)}>+</button>
              <button onClick={() => onUpdateQty(item.id, -1)} style={{ margin: '0 5px' }}>-</button>
              <button onClick={() => onRemove(item.id)} style={{ color: 'red', cursor: 'pointer' }}>Eliminar</button>
            </div>
          ))}
          <h3 style={{ marginTop: '20px', color: '#2ecc71', borderTop: '2px solid #2ecc71', paddingTop: '10px' }}>
            Total a pagar: {total}€
          </h3>
        </div>
      )}
    </div>
  );
};

export default Carrito;