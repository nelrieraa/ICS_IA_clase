export default function Loading() {
  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <div>
          <div className="skeleton" style={{ height: '2rem', width: '220px', marginBottom: '0.5rem' }} />
          <div className="skeleton" style={{ height: '1rem', width: '120px' }} />
        </div>
        <div className="skeleton" style={{ height: '2.2rem', width: '140px', borderRadius: '6px' }} />
      </div>
      <div className="recipe-grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="recipe-card" style={{ gap: '0.75rem' }}>
            <div className="skeleton" style={{ height: '1.2rem', width: '80%' }} />
            <div className="skeleton" style={{ height: '0.9rem', width: '100%' }} />
            <div className="skeleton" style={{ height: '0.9rem', width: '70%' }} />
            <div className="skeleton" style={{ height: '1.5rem', width: '80px', borderRadius: '20px' }} />
          </div>
        ))}
      </div>
    </div>
  );
}
