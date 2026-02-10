import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Welcome from './components/Welcome';
import CountryDetails from './components/CountryDetails';
import ErrorPage from './components/ErrorPage'; 

const europeLoader = async () => {
  
  const response = await fetch('https://restcountries.com/v3.1/region/europe');
  if (!response.ok) throw new Error('No se pudo conectar con la API de países');
  return response.json();
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: europeLoader,
    id: 'root',
    errorElement: <ErrorPage />, 
    children: [
      { index: true, element: <Welcome /> },
      { path: "country/:countryName", element: <CountryDetails /> }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}