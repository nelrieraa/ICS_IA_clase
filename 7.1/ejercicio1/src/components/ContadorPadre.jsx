import React, { useState, useMemo } from 'react';
import ListaIntermedia from './ListaIntermedia';

const ContadorPadre = () => {
  const [count, setCount] = useState(0);


  const users = useMemo(() => {
    console.log("--- Generando lista de usuarios (Solo una vez) ---");
    return Array.from({ length: 500 }, (_, i) => ({
      id: i + 1,
      name: `Usuario ${i + 1}`,
      email: `user${i + 1}@example.com`,
      avatar: `https://i.pravatar.cc/150?img=${(i + 1) % 70 + 1}`,
      isOnline: i % 2 === 0
    }));
  }, []); 

  console.log("Rendering: ContadorPadre");

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ position: 'sticky', top: 0, background: 'white', padding: '20px', borderBottom: '2px solid black' }}>
        <h1>Contador Optimizado: {count}</h1>
        <button onClick={() => setCount(prev => prev + 1)}>INCREMENTAR</button>
      </div>
      <ListaIntermedia users={users} />
    </div>
  );
};

export default ContadorPadre;