// src/components/common/Navbar.tsx
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Menu } from '@headlessui/react';
import { toast } from 'react-toastify';

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
      toast.success('Logout realizado com sucesso!');
      navigate('/');
    } catch {
      toast.error('Erro ao fazer logout');
    }
  };

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
        {/* Navbar principal */}
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span 
                className={`text-2xl font-bold transition-all duration-300 hover:scale-105 ${
                  isHomePage && !isScrolled ? 'text-white' : 'text-primary-600'
                }`}
              >
                Strukt
              </span>
            </Link>
          </div>

          {/* Links Desktop */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
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

            {/* Autenticação Desktop */}
            {currentUser ? (
              <Menu as="div" className="relative ml-3">
                <Menu.Button 
                  className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isHomePage && !isScrolled
                      ? 'text-white hover:bg-white/20'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {currentUser.displayName || currentUser.email?.split('@')[0]}
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </Menu.Button>

                <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/profile"
                          className={`block px-4 py-2 text-sm ${
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700'
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
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700'
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
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Entrar
                </Link>
                <Link
                  to="/register"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isHomePage && !isScrolled
                      ? 'bg-white text-primary-600 hover:bg-white/90'
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  }`}
                >
                  Criar Conta
                </Link>
              </div>
            )}
          </div>

          {/* Botão Menu Mobile */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-all duration-300 ${
                isHomePage && !isScrolled
                  ? 'text-white hover:bg-white/20'
                  : 'text-gray-600 hover:bg-gray-100'
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

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="sm:hidden">
            <div className={`z-50 px-2 pb-3 pt-2 space-y-1 shadow-lg transition-all duration-300 ${
              isHomePage && !isScrolled ? 'bg-primary-600' : 'bg-white'
            }`}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    location.pathname === item.href
                      ? isHomePage && !isScrolled
                        ? 'bg-white/20 text-white'
                        : 'bg-primary-50 text-primary-600'
                      : isHomePage && !isScrolled
                      ? 'text-white hover:bg-white/20'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Autenticação Mobile */}
              {currentUser ? (
                <div className="border-t border-gray-200/20 mt-2 pt-2">
                  <div className={`px-3 py-2 text-sm font-medium ${
                    isHomePage && !isScrolled ? 'text-white' : 'text-gray-700'
                  }`}>
                    {currentUser.displayName || currentUser.email?.split('@')[0]}
                  </div>
                  <Link
                    to="/profile"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                      isHomePage && !isScrolled
                        ? 'text-white hover:bg-white/20'
                        : 'text-gray-700 hover:bg-gray-100'
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
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Sair
                  </button>
                </div>
              ) : (
                <div className="border-t border-gray-200/20 mt-2 pt-2 space-y-1">
                  <Link
                    to="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                      isHomePage && !isScrolled
                        ? 'text-white hover:bg-white/20'
                        : 'text-gray-700 hover:bg-gray-100'
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
                        : 'bg-primary-600 text-white'
                    }`}
                  >
                    Criar Conta
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;