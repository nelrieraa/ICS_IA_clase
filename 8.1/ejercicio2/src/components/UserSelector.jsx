import React from 'react';
import { useAuth } from '../context/AuthContext';

const UserSelector = () => {
  const { login } = useAuth();

  return (
    <div style={{ marginBottom: '20px' }}>
      <label>Cambiar de usuario: </label>
      <select onChange={(e) => login(e.target.value)}>
        <option value="Invitado">Invitado</option>
        <option value="Ana">Ana</option>
        <option value="Luis">Luis</option>
      </select>
    </div>
  );
};

export default UserSelector;