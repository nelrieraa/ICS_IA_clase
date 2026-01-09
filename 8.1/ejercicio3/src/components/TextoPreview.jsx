import React from 'react';
import { useTheme } from '../context/ThemeContext';

const TextoPreview = React.memo(() => {
  const { theme } = useTheme();
  console.log("Rendering: TextoPreview");

  const textStyle = {
    fontSize: `${theme.fontSize}px`,
    textTransform: theme.textTransform,
    color: '#333',
    lineHeight: '1.5'
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <p style={textStyle}>
        Este es un texto de prueba que cambia su tamaño y transformación según
        los controles del panel lateral.
      </p>
    </div>
  );
});

export default TextoPreview;