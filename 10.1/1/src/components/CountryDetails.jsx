import { useParams, useRouteLoaderData, Link } from 'react-router-dom';

export default function CountryDetails() {
  const { countryName } = useParams();
  const countries = useRouteLoaderData('root');

  const country = countries.find(
    (c) => c.name.common.toLowerCase() === countryName.toLowerCase()
  );

  
  if (!country) {
    return (
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2 style={{ color: '#dc3545' }}>🕵️‍♂️ País no encontrado</h2>
        <p>El país "<strong>{countryName}</strong>" no existe en nuestra base de datos de Europa.</p>
        <Link to="/">Volver al inicio</Link>
      </div>
    );
  }

  const formattedPopulation = new Intl.NumberFormat().format(country.population);
  const languages = country.languages ? Object.values(country.languages).join(', ') : 'N/A';

 
  const borderCountries = country.borders?.map(code => {
    
    return countries.find(c => c.cca3 === code);
  }).filter(Boolean); 

  return (
    <div style={{ padding: '40px', maxWidth: '800px', fontFamily: 'sans-serif' }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
        <img src={country.flags.svg} alt={country.name.common} style={{ width: '120px', borderRadius: '8px' }} />
        <div>
          <h1 style={{ margin: 0 }}>{country.name.common}</h1>
          <p style={{ margin: 0, color: '#666' }}>{country.name.official}</p>
        </div>
      </header>

      <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={cardStyle}><strong>Capital:</strong> <p>{country.capital?.[0]}</p></div>
        <div style={cardStyle}><strong>Población:</strong> <p>{formattedPopulation}</p></div>
        <div style={cardStyle}><strong>Región:</strong> <p>{country.subregion}</p></div>
        <div style={cardStyle}><strong>Idiomas:</strong> <p>{languages}</p></div>
      </section>

     
      <section style={{ marginTop: '30px' }}>
        <h3>Países Fronterizos:</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {borderCountries && borderCountries.length > 0 ? (
            borderCountries.map(border => (
              <Link 
                key={border.cca3}
                to={`/country/${border.name.common.toLowerCase()}`}
                style={borderLinkStyle}
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

const cardStyle = { backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px' };

const borderLinkStyle = {
  padding: '8px 15px',
  backgroundColor: '#fff',
  border: '1px solid #007bff',
  borderRadius: '20px',
  color: '#007bff',
  textDecoration: 'none',
  fontSize: '0.9rem',
  transition: '0.3s'
};