// src/components/common/Navbar.tsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Aprender', href: '/learn' },
  { name: 'Algoritmos', href: '/algorithms' },
  { name: 'Estruturas de Dados', href: '/data-structures' },
  { name: 'Praticar', href: '/practice' },
  { name: 'Sobre', href: '/about' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Detecta scroll para mudar o estilo do navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha o menu mobile quando a rota muda
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isHomePage
          ? isScrolled 
            ? 'bg-white shadow-lg' 
            : 'bg-transparent'
          : 'bg-white shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo e Nome */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className={`text-2xl font-bold ${
                isHomePage && !isScrolled
                  ? 'text-white'
                  : 'text-primary-600'
              }`}>
                Strukt
              </span>
            </Link>
          </div>

          {/* Links de Navegação - Desktop */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? isHomePage && !isScrolled
                      ? 'text-white bg-white/20'
                      : 'text-primary-600 bg-primary-50'
                    : isHomePage && !isScrolled
                    ? 'text-white/90 hover:text-white hover:bg-white/20'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Botão de Login */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`ml-4 px-4 py-2 rounded-md text-sm font-medium ${
                isHomePage && !isScrolled
                  ? 'bg-white text-primary-600 hover:bg-white/90'
                  : 'bg-primary-600 text-white hover:bg-primary-700'
              }`}
            >
              Entrar
            </motion.button>
          </div>

          {/* Botão do Menu Mobile */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isHomePage && !isScrolled
                  ? 'text-white hover:text-white hover:bg-white/20'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <span className="sr-only">Abrir menu principal</span>
              {isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      <Transition
        show={isMobileMenuOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="sm:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 shadow-lg ${
            isHomePage && !isScrolled ? 'bg-primary-600' : 'bg-white'
          }`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.href
                    ? isHomePage && !isScrolled
                      ? 'text-white bg-white/20'
                      : 'text-primary-600 bg-primary-50'
                    : isHomePage && !isScrolled
                    ? 'text-white/90 hover:text-white hover:bg-white/20'
                    : 'text-gray-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              className={`w-full mt-4 px-4 py-2 rounded-md text-sm font-medium ${
                isHomePage && !isScrolled
                  ? 'bg-white text-primary-600 hover:bg-white/90'
                  : 'bg-primary-600 text-white hover:bg-primary-700'
              }`}
            >
              Entrar
            </button>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;