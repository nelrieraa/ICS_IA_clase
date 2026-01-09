import React from 'react';
import { useAuth } from '../context/AuthContext';

const UserInfo = () => {
  const { user } = useAuth();
  console.log("Rendering: UserInfo");

  return (
    <div style={{
      position: 'absolute', top: '10px', right: '10px',
      padding: '10px', border: '1px solid #333', borderRadius: '5px',
      backgroundColor: '#f0f0f0'
    }}>
      <strong>Usuario:</strong> {user.name} <br />
      <small>Rol: {user.role}</small>
    </div>
  );
};

export default UserInfo;