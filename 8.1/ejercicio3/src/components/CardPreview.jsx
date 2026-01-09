import React, { useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';

const CardPreview = React.memo(() => {
  const { theme } = useTheme();
  console.log("Rendering: CardPreview");

  
  const shadowStyle = useMemo(() => {
    console.log("Calculando sombra derivada...");
    return `0 4px 15px ${theme.primaryColor}66`; 
  }, [theme.primaryColor]);

  const styles = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: shadowStyle,
    fontSize: `${theme.fontSize}px`,
    textTransform: theme.textTransform,
    border: `2px solid ${theme.primaryColor}`
  };

  return (
    <div style={styles}>
      <h4>Tarjeta de Previsualización</h4>
      <p>Este componente reacciona a todos los cambios del tema.</p>
    </div>
  );
});

export default CardPreview;