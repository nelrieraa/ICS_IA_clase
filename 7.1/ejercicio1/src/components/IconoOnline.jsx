import React from 'react';
import PuntitoVerde from './PuntitoVerde';

const IconoOnline = ({ isOnline }) => {
  console.log("Rendering: IconoOnline");
  return (
    <span style={{ fontSize: '0.8rem' }}>
      {isOnline ? "En línea" : "Desconectado"}
      <PuntitoVerde isOnline={isOnline} />
    </span>
  );
};

export default IconoOnline;