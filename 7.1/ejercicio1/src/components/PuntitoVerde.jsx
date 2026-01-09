import React from 'react';

const PuntitoVerde = ({ isOnline }) => {
  console.log("Rendering: PuntitoVerde");
  return (
    <div style={{
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: isOnline ? '#4caf50' : '#f44336',
      display: 'inline-block',
      marginLeft: '8px'
    }} />
  );
};

export default PuntitoVerde;