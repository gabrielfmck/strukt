import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
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
      // Removido o parâmetro 'error' não utilizado
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
        <div className="flex justify-between h-16">
          {/* Logo e Nome */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center group"
            >
              <motion.span 
                className={`text-2xl font-bold transition-colors ${
                  isHomePage && !isScrolled
                    ? 'text-white'
                    : 'text-primary-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Strukt
              </motion.span>
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

            {/* Autenticação */}
            {currentUser ? (
              <Menu as="div" className="relative ml-3">
                <Menu.Button className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium ${
                  isHomePage && !isScrolled
                    ? 'text-white hover:bg-white/20'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}>
                  <span>{currentUser.email?.split('@')[0]}</span>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Menu.Button>
                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/profile"
                            className={`${
                              active ? 'bg-gray-100' : ''
                            } block px-4 py-2 text-sm text-gray-700`}
                          >
                            Perfil
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={handleLogout}
                            className={`${
                              active ? 'bg-gray-100' : ''
                            } block w-full text-left px-4 py-2 text-sm text-gray-700`}
                          >
                            Sair
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isHomePage && !isScrolled
                      ? 'text-white hover:bg-white/20'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Entrar
                </Link>
                <Link
                  to="/register"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
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

          {/* Botão do Menu Mobile */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                isHomePage && !isScrolled
                  ? 'text-white hover:text-white hover:bg-white/20'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
              aria-expanded="false"
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
            
            {currentUser ? (
              <>
                <Link
                  to="/profile"
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isHomePage && !isScrolled
                      ? 'text-white hover:bg-white/20'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Perfil
                </Link>
                <button
                  onClick={handleLogout}
                  className={`w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    isHomePage && !isScrolled
                      ? 'text-white hover:bg-white/20'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Sair
                </button>
              </>
            ) : (
              <div className="pt-4 space-y-2">
                <Link
                  to="/login"
                  className={`block w-full px-3 py-2 rounded-md text-base font-medium text-center ${
                    isHomePage && !isScrolled
                      ? 'text-white hover:bg-white/20'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  Entrar
                </Link>
                <Link
                  to="/register"
                  className={`block w-full px-3 py-2 rounded-md text-base font-medium text-center ${
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
      </Transition>
    </nav>
  );
};

export default Navbar;