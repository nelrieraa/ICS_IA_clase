import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeControls = React.memo(() => {
  const { theme, dispatch } = useTheme();
  console.log("Rendering: ThemeControls (Panel lateral)");

  return (
    <div style={{ width: '250px', padding: '20px', borderRight: '1px solid #ccc' }}>
      <h3>Configuración</h3>
      
      <label>Color Primario:</label>
      <input 
        type="color" 
        value={theme.primaryColor} 
        onChange={(e) => dispatch({ type: 'SET_PRIMARY_COLOR', payload: e.target.value })} 
      />

      <br /><br />
      <label>Tamaño Fuente: {theme.fontSize}px</label>
      <input 
        type="range" min="10" max="50" 
        value={theme.fontSize} 
        onChange={(e) => dispatch({ type: 'SET_FONT_SIZE', payload: Number(e.target.value) })} 
      />

      <br /><br />
      <label>Transformación:</label>
      <select value={theme.textTransform} onChange={(e) => dispatch({ type: 'SET_TEXT_TRANSFORM', payload: e.target.value })}>
        <option value="none">Normal</option>
        <option value="uppercase">MAYÚSCULAS</option>
        <option value="lowercase">minúsculas</option>
        <option value="capitalize">Capitalizado</option>
      </select>
    </div>
  );
});

export default ThemeControls;