import React from 'react';

const HomePage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bienvenido a Mi Blog Personal</h1>
      <p>Explora mis artículos sobre desarrollo web y tecnología.</p>
      <img 
        src="https://via.placeholder.com/400x200" 
        alt="Blog" 
        style={{ borderRadius: '10px', marginTop: '20px' }} 
      />
    </div>
  );
};

// ESTA LÍNEA ES LA QUE FALTA Y CAUSA EL ERROR:
export default HomePage;