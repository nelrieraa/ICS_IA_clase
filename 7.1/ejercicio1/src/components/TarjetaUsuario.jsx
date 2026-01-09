import React from 'react';
import Avatar from './Avatar';

const TarjetaUsuario = ({ user }) => {
  console.log(`Rendering: TarjetaUsuario - ID: ${user.id}`);
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '10px',
      margin: '10px',
      borderRadius: '8px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '400px',
      backgroundColor: '#f9f9f9'
    }}>
      <div>
        <p><strong>ID:</strong> {user.id}</p>
        <p><strong>Nombre:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <Avatar url={user.avatar} isOnline={user.isOnline} />
    </div>
  );
};

export default TarjetaUsuario;