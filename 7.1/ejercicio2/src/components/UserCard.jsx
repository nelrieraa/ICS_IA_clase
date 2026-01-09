import React from 'react';


const UserCard = React.memo(({ user }) => {
  console.log(`Renderizando Tarjeta: ${user.id}`);
  
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '5px', borderRadius: '8px', width: '200px', backgroundColor: '#fff' }}>
      <img src={user.avatar} alt={user.name} style={{ width: '50px', borderRadius: '50%' }} />
      <h4>{user.name}</h4>
      <p style={{ fontSize: '11px', color: '#666' }}>{user.email}</p>
    </div>
  );
});

export default UserCard;