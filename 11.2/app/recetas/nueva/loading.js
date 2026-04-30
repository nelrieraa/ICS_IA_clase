export default function Loading() {
  return (
    <div className="container">
      <div className="skeleton" style={{ height: '1rem', width: '120px', marginBottom: '1rem' }} />
      <div className="skeleton" style={{ height: '2rem', width: '200px', marginBottom: '0.5rem' }} />
      <div className="skeleton" style={{ height: '1rem', width: '280px', marginBottom: '1.5rem' }} />
      <div className="form-card">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="form-group">
            <div className="skeleton" style={{ height: '0.9rem', width: '120px', marginBottom: '0.35rem' }} />
            <div className="skeleton" style={{ height: '2.2rem', width: '100%' }} />
          </div>
        ))}
      </div>
    </div>
  );
}
