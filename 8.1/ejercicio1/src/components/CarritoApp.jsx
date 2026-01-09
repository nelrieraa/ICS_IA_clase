import React, { useReducer, useCallback, useMemo } from 'react';
import productosData from '../data/productos.json';
import Producto from './Producto';
import Carrito from './Carrito'; // <-- Importamos el nuevo componente

const carritoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const existe = state.find(i => i.id === action.payload.id);
      if (existe) {
        return state.map(i => i.id === action.payload.id ? { ...i, cantidad: i.cantidad + 1 } : i);
      }
      return [...state, { ...action.payload, cantidad: 1 }];
    case 'REMOVE':
      return state.filter(i => i.id !== action.payload);
    case 'UPDATE_QTY':
      return state.map(i => i.id === action.payload.id ? { ...i, cantidad: Math.max(1, i.cantidad + action.payload.cambio) } : i);
    default: return state;
  }
};

const CarritoApp = () => {
  const [items, dispatch] = useReducer(carritoReducer, []);

  const handleAnadir = useCallback((p) => dispatch({ type: 'ADD', payload: p }), []);
  
 
  const handleUpdateQty = useCallback((id, cambio) => dispatch({ type: 'UPDATE_QTY', payload: { id, cambio } }), []);
  const handleRemove = useCallback((id) => dispatch({ type: 'REMOVE', payload: id }), []);

  const total = useMemo(() => {
    return items.reduce((acc, i) => acc + (i.precio * i.cantidad), 0);
  }, [items]);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      <div style={{ width: '45%' }}>
        <h2>Catálogo</h2>
        {productosData.map(p => (
          <Producto key={p.id} producto={p} alAnadir={handleAnadir} />
        ))}
      </div>

      {}
      <Carrito 
        items={items} 
        total={total} 
        onUpdateQty={handleUpdateQty} 
        onRemove={handleRemove} 
      />
    </div>
  );
};

export default CarritoApp;