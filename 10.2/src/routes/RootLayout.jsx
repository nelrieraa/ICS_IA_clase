import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

export default function RootLayout() {
  return (
    <div className="app-layout">
      <MainNavigation />
      <main className="page-content">
        <Outlet />
      </main>
    </div>
  );
}
