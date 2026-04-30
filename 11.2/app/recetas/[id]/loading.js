export default function Loading() {
  return (
    <div className="container">
      <div className="skeleton" style={{ height: '1rem', width: '120px', marginBottom: '1rem' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <div>
          <div className="skeleton" style={{ height: '2rem', width: '300px', marginBottom: '0.5rem' }} />
          <div className="skeleton" style={{ height: '1.5rem', width: '80px', borderRadius: '20px' }} />
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <div className="skeleton" style={{ height: '2.2rem', width: '80px', borderRadius: '6px' }} />
          <div className="skeleton" style={{ height: '2.2rem', width: '80px', borderRadius: '6px' }} />
        </div>
      </div>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="detail-section" style={{ marginBottom: '1.5rem' }}>
          <div className="skeleton" style={{ height: '1rem', width: '120px', marginBottom: '0.75rem' }} />
          <div className="skeleton" style={{ height: '0.9rem', width: '100%', marginBottom: '0.4rem' }} />
          <div className="skeleton" style={{ height: '0.9rem', width: '80%' }} />
        </div>
      ))}
    </div>
  );
}
