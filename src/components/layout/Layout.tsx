// src/components/layout/Layout.tsx
import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../common/Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      <header className={isHomePage ? 'absolute w-full z-50' : 'relative bg-white shadow-lg'}>
        <Navbar />
      </header>
      <main className={`flex-grow ${isHomePage ? '' : 'pt-16'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;