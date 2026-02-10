import { useState } from 'react';
import { useLoaderData, NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  const countries = useLoaderData();
  
  
  const [search, setSearch] = useState("");

 
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  const sortedCountries = [...filteredCountries].sort((a, b) => 
    a.name.common.localeCompare(b.name.common)
  );

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif' }}>

      <aside style={{ 
        width: '320px', 
        borderRight: '1px solid #ddd', 
        overflowY: 'auto',
        backgroundColor: '#f9f9f9',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <div style={{ padding: '20px', borderBottom: '1px solid #eee', backgroundColor: '#fff' }}>
          <h2 style={{ margin: '0 0 15px 0', fontSize: '1.2rem' }}>🌍 Países de Europa</h2>
          

          <input
            type="text"
            placeholder="Buscar país..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #ccc',
              boxSizing: 'border-box',
              outline: 'none'
            }}
          />
          <small style={{ color: '#888', marginTop: '10px', display: 'block' }}>
            Mostrando {sortedCountries.length} países
          </small>
        </div>

        <nav style={{ flex: 1, overflowY: 'auto' }}>
          {sortedCountries.length > 0 ? (
            sortedCountries.map((country) => (
              <NavLink
                key={country.cca3}
                to={`/country/${country.name.common.toLowerCase()}`}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  padding: '10px 20px',
                  textDecoration: 'none',
                  color: isActive ? '#fff' : '#333',
                  backgroundColor: isActive ? '#007bff' : 'transparent',
                  borderBottom: '1px solid #f0f0f0',
                  transition: 'background-color 0.2s'
                })}
              >
                <img 
                  src={country.flags.svg} 
                  alt="" 
                  style={{ width: '25px', height: '18px', marginRight: '12px', objectFit: 'cover', borderRadius: '2px' }} 
                />
                <span>{country.name.common}</span>
              </NavLink>
            ))
          ) : (
            <p style={{ padding: '20px', color: '#999', textAlign: 'center' }}>
              No se encontraron coincidencias.
            </p>
          )}
        </nav>
      </aside>


      <main style={{ flex: 1, overflowY: 'auto', backgroundColor: '#fff' }}>
        <Outlet />
      </main>
    </div>
  );
}