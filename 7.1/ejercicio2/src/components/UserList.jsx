import React from 'react';
import UserCard from './UserCard';


const UserList = React.memo(({ users }) => {
  console.log("Renderizando Lista Completa");
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
      {users.map(u => (
        <UserCard key={u.id} user={u} />
      ))}
    </div>
  );
});

export default UserList;