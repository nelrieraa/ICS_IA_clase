import React from 'react';
import { useTheme } from '../context/ThemeContext';

const BotonPreview = React.memo(() => {
  const { theme } = useTheme();
  console.log("Rendering: BotonPreview");

  const buttonStyle = {
    backgroundColor: theme.primaryColor,
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: `${theme.fontSize}px`,
    textTransform: theme.textTransform,
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  };

  return <button style={buttonStyle}>Botón de Ejemplo</button>;
});

export default BotonPreview;