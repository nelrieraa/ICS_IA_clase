import { useParams, useRouteLoaderData, Link } from 'react-router-dom';

export default function CountryDetails() {
  const { countryName } = useParams();
  const countries = useRouteLoaderData('root');

  const country = countries.find(
    (c) => c.name.common.toLowerCase() === countryName.toLowerCase()
  );

  if (!country) {
    return (
      <div className="not-found">
        <h2 style={{ color: '#dc3545' }}>🕵️‍♂️ País no encontrado</h2>
        <p>El país "<strong>{countryName}</strong>" no existe en nuestra base de datos de Europa.</p>
        <Link to="/" className="error-link">Volver al inicio</Link>
      </div>
    );
  }

  const formattedPopulation = new Intl.NumberFormat().format(country.population);
  const languages = country.languages ? Object.values(country.languages).join(', ') : 'N/A';

  const borderCountries = country.borders?.map(code =>
    countries.find(c => c.cca3 === code)
  ).filter(Boolean);

  return (
    <div className="country-detail">
      <header className="country-header">
        <img src={country.flags.svg} alt={country.name.common} className="country-header-flag" />
        <div>
          <h1>{country.name.common}</h1>
          <p>{country.name.official}</p>
        </div>
      </header>

      <section className="country-info-grid">
        <div className="info-card"><strong>Capital:</strong> <p>{country.capital?.[0]}</p></div>
        <div className="info-card"><strong>Población:</strong> <p>{formattedPopulation}</p></div>
        <div className="info-card"><strong>Región:</strong> <p>{country.subregion}</p></div>
        <div className="info-card"><strong>Idiomas:</strong> <p>{languages}</p></div>
      </section>

      <section className="borders-section">
        <h3>Países Fronterizos:</h3>
        <div className="borders-list">
          {borderCountries && borderCountries.length > 0 ? (
            borderCountries.map(border => (
              <Link
                key={border.cca3}
                to={`/country/${border.name.common.toLowerCase()}`}
                className="border-link"
              >
                {border.name.common}
              </Link>
            ))
          ) : (
            <p style={{ color: '#999' }}>Este país no tiene fronteras terrestres en Europa.</p>
          )}
        </div>
      </section>
    </div>
  );
}
