import React from 'react';
import ToastItem from './ToastItem';

const ToastContainer = React.memo(({ errors, clearError }) => {
  console.log("Renderizando ToastContainer");
  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', width: '350px', zIndex: 1000 }}>
      {errors.map(err => (
        <ToastItem key={err.id} error={err} onClose={clearError} />
      ))}
    </div>
  );
});

export default ToastContainer;