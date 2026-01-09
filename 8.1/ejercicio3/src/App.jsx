import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ThemeControls from './components/ThemeControls';
import CardPreview from './components/CardPreview';
import BotonPreview from './components/BotonPreview';
import TextoPreview from './components/TextoPreview';

function App() {
  return (
    <ThemeProvider>
      <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
        <ThemeControls />

        {}
        <main style={{ flex: 1, padding: '40px', backgroundColor: '#f5f5f5', display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <header>
            <h2 style={{ margin: 0 }}>Editor de Temas UI</h2>
            <p style={{ color: '#666' }}>Cambia los valores a la izquierda para ver la actualización optimizada.</p>
          </header>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '800px' }}>
            <section style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <BotonPreview />
              <span style={{ color: '#888', fontSize: '14px' }}>← Botón con color y fuente dinámica</span>
            </section>

            <section>
              <CardPreview />
            </section>

            <section style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px', border: '1px dotted #ccc' }}>
              <TextoPreview />
            </section>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;