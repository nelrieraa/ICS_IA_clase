import React from 'react';
import TarjetaUsuario from './TarjetaUsuario';


const ListaIntermedia = React.memo(({ users }) => {
  console.log("Rendering: ListaIntermedia");
  return (
    <div>
      {users.map((u) => <TarjetaUsuario key={u.id} user={u} />)}
    </div>
  );
});

export default ListaIntermedia;