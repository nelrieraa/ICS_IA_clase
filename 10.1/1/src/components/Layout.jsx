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
    <div className="app-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>🌍 Países de Europa</h2>
          <input
            type="text"
            placeholder="Buscar país..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <small className="sidebar-count">
            Mostrando {sortedCountries.length} países
          </small>
        </div>

        <nav className="sidebar-nav">
          {sortedCountries.length > 0 ? (
            sortedCountries.map((country) => (
              <NavLink
                key={country.cca3}
                to={`/country/${country.name.common.toLowerCase()}`}
                className={({ isActive }) => `country-link${isActive ? ' active' : ''}`}
              >
                <img
                  src={country.flags.svg}
                  alt=""
                  className="country-flag"
                />
                <span>{country.name.common}</span>
              </NavLink>
            ))
          ) : (
            <p className="no-results">No se encontraron coincidencias.</p>
          )}
        </nav>
      </aside>

      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}
