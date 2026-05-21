'use client';

import { useState, useEffect, useCallback } from 'react';

export default function ImageManager() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);

  // Búsqueda: array de hasta N términos
  const [searchInput, setSearchInput] = useState('');
  const [searchTerms, setSearchTerms] = useState([]);

  const fetchImages = useCallback(async (terms = []) => {
    setLoading(true);
    try {
      const q = terms.join(',');
      const res = await fetch(`/api/images${q ? `?search=${encodeURIComponent(q)}` : ''}`);
      const data = await res.json();
      setImages(data.images || []);
    } catch {
      setImages([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchImages(searchTerms);
  }, [searchTerms, fetchImages]);

  function handleFileChange(e) {
    const selected = e.target.files[0];
    if (!selected) return;
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setUploadError('');
  }

  async function handleUpload(e) {
    e.preventDefault();
    if (!file) return;
    setUploading(true);
    setUploadError('');
    try {
      const form = new FormData();
      form.append('image', file);
      const res = await fetch('/api/upload', { method: 'POST', body: form });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Error al subir');
      setFile(null);
      setPreview(null);
      e.target.reset();
      fetchImages(searchTerms);
    } catch (err) {
      setUploadError(err.message);
    } finally {
      setUploading(false);
    }
  }

  function addSearchTerm() {
    const term = searchInput.trim().toLowerCase();
    if (!term || searchTerms.includes(term)) return;
    setSearchTerms((prev) => [...prev, term]);
    setSearchInput('');
  }

  function removeSearchTerm(term) {
    setSearchTerms((prev) => prev.filter((t) => t !== term));
  }

  function handleSearchKeyDown(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSearchTerm();
    }
    if (e.key === ',' || e.key === ' ') {
      e.preventDefault();
      addSearchTerm();
    }
  }

  return (
    <div>
      {/* Upload */}
      <section className="upload-section">
        <h2 className="section-title">Subir imagen</h2>
        <form onSubmit={handleUpload} className="upload-form">
          <label className="file-label">
            {preview ? (
              <img src={preview} alt="preview" className="preview-img" />
            ) : (
              <div className="file-placeholder">
                <span className="upload-icon">📷</span>
                <span>Haz clic o arrastra una imagen aquí</span>
                <span className="file-hint">JPG, PNG, WEBP, GIF</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
            />
          </label>
          {uploadError && <p className="error-msg">{uploadError}</p>}
          <button
            type="submit"
            className="btn-upload"
            disabled={!file || uploading}
          >
            {uploading ? (
              <>
                <span className="spinner" />
                Analizando con IA y subiendo…
              </>
            ) : (
              '⬆ Subir y analizar'
            )}
          </button>
        </form>
      </section>

      {/* Buscador */}
      <section className="search-section">
        <h2 className="section-title">Buscar por contenido</h2>
        <p className="search-hint">
          Añade términos (ej: <em>dog</em>, <em>car</em>, <em>sky</em>). Se muestran imágenes que contengan cualquiera de ellos.
        </p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Escribe un término y pulsa Enter o coma…"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleSearchKeyDown}
            className="search-input"
          />
          <button
            type="button"
            onClick={addSearchTerm}
            className="btn-add-term"
            disabled={!searchInput.trim()}
          >
            + Añadir
          </button>
        </div>

        {searchTerms.length > 0 && (
          <div className="terms-chips">
            {searchTerms.map((t) => (
              <span key={t} className="chip">
                {t}
                <button
                  type="button"
                  onClick={() => removeSearchTerm(t)}
                  className="chip-remove"
                  title="Eliminar filtro"
                >
                  ×
                </button>
              </span>
            ))}
            <button
              type="button"
              onClick={() => setSearchTerms([])}
              className="btn-clear"
            >
              Limpiar todo
            </button>
          </div>
        )}
      </section>

      {/* Galería */}
      <section className="gallery-section">
        <div className="gallery-header">
          <h2 className="section-title">
            {searchTerms.length > 0
              ? `Resultados para: ${searchTerms.join(', ')}`
              : 'Todas las imágenes'}
          </h2>
          <span className="count-badge">{images.length} imagen{images.length !== 1 ? 'es' : ''}</span>
        </div>

        {loading ? (
          <div className="loading-grid">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="skeleton-card" />
            ))}
          </div>
        ) : images.length === 0 ? (
          <div className="empty-state">
            <span>🔍</span>
            <p>
              {searchTerms.length > 0
                ? 'No hay imágenes con esos elementos.'
                : 'Aún no hay imágenes. ¡Sube la primera!'}
            </p>
          </div>
        ) : (
          <div className="gallery-grid">
            {images.map((img) => (
              <div key={img._id} className="image-card">
                <div className="image-wrapper">
                  <img
                    src={img.url}
                    alt={img.originalName}
                    className="gallery-img"
                    loading="lazy"
                  />
                </div>
                <div className="image-info">
                  <p className="image-name" title={img.originalName}>
                    {img.originalName}
                  </p>
                  <p className="image-uuid">{img.name}</p>
                  <div className="objects-list">
                    {img.objects?.map((obj) => (
                      <span
                        key={obj}
                        className={`object-tag ${searchTerms.some((t) => obj.includes(t) || t.includes(obj)) ? 'highlighted' : ''}`}
                        onClick={() => {
                          if (!searchTerms.includes(obj)) {
                            setSearchTerms((prev) => [...prev, obj]);
                          }
                        }}
                        title="Clic para buscar este elemento"
                      >
                        {obj}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
