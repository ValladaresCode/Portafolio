import { Outlet } from 'react-router-dom';
import PortfolioNavbar from './PortfolioNavbar';
import PortfolioFooter from './PortfolioFooter';

export default function PortfolioLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PortfolioNavbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <PortfolioFooter />
    </div>
  );
}
