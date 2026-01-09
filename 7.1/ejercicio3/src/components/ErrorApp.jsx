import React, { useState, useCallback } from 'react';
import ToastContainer from './ToastContainer';

const ErrorApp = () => {
  const [errors, setErrors] = useState([]);

  const addError = () => {
    const newError = {
      id: Date.now(),
      message: `Error generado a las ${new Date().toLocaleTimeString()}`
    };
    setErrors(prev => [...prev, newError]);
  };


  
  const clearError = useCallback((id) => {
    setErrors(prev => prev.filter(e => e.id !== id));
  }, []); 

  const clearAll = () => setErrors([]);

  return (
    <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Sistema de Errores Optimizado</h1>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={addError} style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' }}>
          Agregar Error
        </button>
        <button onClick={clearAll} style={{ padding: '10px 20px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Limpiar Todos
        </button>
      </div>
      
      <ToastContainer errors={errors} clearError={clearError} />
    </div>
  );
};

export default ErrorApp;