export default function Welcome() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100%',
      color: '#666'
    }}>
      <span style={{ fontSize: '4rem' }}>🗺️</span>
      <h1>Explorador de Países</h1>
      <p>Selecciona un país de la lista de la izquierda para ver su información detallada.</p>
    </div>
  );
}