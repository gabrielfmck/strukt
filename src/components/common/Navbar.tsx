// src/components/common/Navbar.tsx
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Menu } from '@headlessui/react';
import { toast } from 'react-toastify';
import ThemeToggle from './ThemeToggle';

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
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleLogout = async () => {
    try {
      await logout();
      //toast.success('Logout realizado com sucesso!');
      navigate('/');
    } catch {
      toast.error('Erro ao fazer logout');
    }
  };

  const navBackground = isHomePage
    ? isScrolled
      ? 'bg-white dark:bg-gray-900 shadow-lg'
      : 'bg-transparent'
    : 'bg-white dark:bg-gray-900 shadow-lg';

  const textColor = isHomePage && !isScrolled
    ? 'text-white'
    : 'text-gray-900 dark:text-gray-100';

  const linkStyle = (isActive: boolean) => `
    px-3 py-2 rounded-md text-sm font-medium transition-all duration-300
    ${isActive
      ? isHomePage && !isScrolled
        ? 'text-white bg-white/20'
        : 'text-primary-600 dark:text-primary-400 bg-primary-50/80 dark:bg-primary-900/50'
      : isHomePage && !isScrolled
        ? 'text-white/90 hover:text-white hover:bg-white/20'
        : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/50'
    }
  `.trim();

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${navBackground}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span 
                className={`text-2xl font-bold transition-all duration-300 hover:scale-105 ${
                  isHomePage && !isScrolled 
                    ? 'text-white' 
                    : 'text-primary-600 dark:text-primary-400'
                }`}
              >
                Strukt
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={linkStyle(location.pathname === item.href)}
              >
                {item.name}
              </Link>
            ))}

            {/* Theme Toggle Desktop */}
            <ThemeToggle
              className={`${
                isHomePage && !isScrolled
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : 'bg-gray-100 dark:bg-gray-800'
              }`}
            />

            {/* Auth Desktop */}
            {currentUser ? (
              <Menu as="div" className="relative ml-3">
                <Menu.Button className="flex items-center gap-2">
                  {currentUser.photoURL ? (
                    <img
                      src={currentUser.photoURL}
                      alt="Foto de perfil"
                      className="h-8 w-8 rounded-full object-cover ring-2 ring-white dark:ring-gray-800"
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center ring-2 ring-white dark:ring-gray-800">
                      <span className="text-gray-600 dark:text-gray-300 font-medium">
                        {currentUser.displayName?.charAt(0) || currentUser.email?.charAt(0)}
                      </span>
                    </div>
                  )}
                  <span className={textColor}>
                    {currentUser.displayName || currentUser.email?.split('@')[0]}
                  </span>
                  <svg
                    className={`h-5 w-5 ${textColor}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </Menu.Button>

                <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/profile"
                          className={`block px-4 py-2 text-sm ${
                            active
                              ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                              : 'text-gray-700 dark:text-gray-300'
                          }`}
                        >
                          Perfil
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={handleLogout}
                          className={`w-full text-left px-4 py-2 text-sm ${
                            active
                              ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                              : 'text-gray-700 dark:text-gray-300'
                          }`}
                        >
                          Sair
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isHomePage && !isScrolled
                      ? 'text-white hover:bg-white/20'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Entrar
                </Link>
                <Link
                  to="/register"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isHomePage && !isScrolled
                      ? 'bg-white text-primary-600 hover:bg-white/90'
                      : 'bg-primary-600 dark:bg-primary-500 text-white hover:bg-primary-700 dark:hover:bg-primary-600'
                  }`}
                >
                  Criar Conta
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Navigation Button */}
          <div className="sm:hidden flex items-center space-x-2">
            {/* Theme Toggle Mobile */}
            <ThemeToggle
              className={`${
                isHomePage && !isScrolled
                  ? 'bg-white/10 text-white hover:bg-white/20'
                  : 'bg-gray-100 dark:bg-gray-800'
              }`}
            />
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-all duration-300 ${
                isHomePage && !isScrolled
                  ? 'text-white hover:bg-white/20'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <span className="sr-only">Menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`sm:hidden px-2 pb-3 pt-2 space-y-1 shadow-lg ${
            isHomePage && !isScrolled
              ? 'bg-primary-600 dark:bg-primary-900'
              : 'bg-white dark:bg-gray-800'
          }`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={linkStyle(location.pathname === item.href)}
              >
                {item.name}
              </Link>
            ))}

            {currentUser ? (
              <div className="border-t border-gray-200/20 dark:border-gray-700/20 mt-2 pt-2">
                <div className={`px-3 py-2 text-sm font-medium ${textColor}`}>
                  {currentUser.displayName || currentUser.email?.split('@')[0]}
                </div>
                <Link
                  to="/profile"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    isHomePage && !isScrolled
                      ? 'text-white hover:bg-white/20'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Perfil
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    isHomePage && !isScrolled
                      ? 'text-white hover:bg-white/20'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Sair
                </button>
              </div>
            ) : (
              <div className="border-t border-gray-200/20 dark:border-gray-700/20 mt-2 pt-2 space-y-1">
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    isHomePage && !isScrolled
                      ? 'text-white hover:bg-white/20'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Entrar
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    isHomePage && !isScrolled
                      ? 'bg-white text-primary-600'
                      : 'bg-primary-600 dark:bg-primary-500 text-white hover:bg-primary-700 dark:hover:bg-primary-600'
                  }`}
                >
                  Criar Conta
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;