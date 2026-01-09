import React, { useState, useMemo } from 'react';
import UserList from './UserList';

const SearchApp = () => {
  const [search, setSearch] = useState("");

  
  const allUsers = useMemo(() => {
    console.log("Generando 10.000 usuarios en memoria...");
    return Array.from({ length: 10000 }, (_, i) => ({
      id: i + 1,
      name: `Usuario ${i + 1}`,
      email: `user${i + 1}@test.com`,
      avatar: `https://i.pravatar.cc/150?img=${(i + 1) % 70 + 1}`
    }));
  }, []); 

 
  const filteredUsers = useMemo(() => {
    if (!search) return allUsers;
    console.log("Filtrando lista...");
    return allUsers.filter(u => 
      u.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, allUsers]);

  return (
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <div style={{ position: 'sticky', top: '0', backgroundColor: '#f0f2f5', padding: '20px', zIndex: 10 }}>
        <h1>Buscador Optimizado (10k Usuarios)</h1>
        <input 
          type="text" 
          placeholder="Escribe para buscar..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: '12px', width: '350px', borderRadius: '25px', border: '1px solid #ccc', fontSize: '16px' }}
        />
        <p>Resultados encontrados: {filteredUsers.length}</p>
      </div>
      <UserList users={filteredUsers} />
    </div>
  );
};

export default SearchApp;