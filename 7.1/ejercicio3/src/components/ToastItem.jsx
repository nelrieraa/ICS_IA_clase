import React from 'react';


const ToastItem = React.memo(({ error, onClose }) => {
  console.log(`Renderizando ToastItem: ${error.id}`);

  return (
    <div style={{
      background: '#ffeded', border: '1px solid #f44336', color: '#f44336',
      padding: '12px', margin: '10px 0', borderRadius: '6px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <span><strong>Error:</strong> {error.message}</span>
      <button 
        onClick={() => onClose(error.id)} 
        style={{ marginLeft: '15px', cursor: 'pointer', border: 'none', background: 'none', color: '#f44336', fontWeight: 'bold' }}
      >
        ✖
      </button>
    </div>
  );
});

export default ToastItem;