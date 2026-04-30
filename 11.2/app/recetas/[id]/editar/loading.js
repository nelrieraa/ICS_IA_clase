export default function Loading() {
  return (
    <div className="container">
      <div className="skeleton" style={{ height: '1rem', width: '150px', marginBottom: '1rem' }} />
      <div className="skeleton" style={{ height: '2rem', width: '200px', marginBottom: '0.5rem' }} />
      <div className="skeleton" style={{ height: '1rem', width: '260px', marginBottom: '1.5rem' }} />
      <div className="form-card">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="form-group">
            <div className="skeleton" style={{ height: '0.9rem', width: '130px', marginBottom: '0.35rem' }} />
            <div className="skeleton" style={{ height: i < 2 ? '2.2rem' : '6rem', width: '100%' }} />
          </div>
        ))}
      </div>
    </div>
  );
}
