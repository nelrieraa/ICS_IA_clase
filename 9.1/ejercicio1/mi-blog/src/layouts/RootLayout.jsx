import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar';

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;