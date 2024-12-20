// src/pages/Login.tsx
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../contexts/theme/ThemeContext';
import { toast } from 'react-toastify';
import { FirebaseError } from 'firebase/app';
import { motion } from 'framer-motion';
import { FiEye, FiEyeOff } from 'react-icons/fi'; // Adicione esta importação

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const { login, currentUser } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (currentUser) {
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    }
  }, [currentUser, navigate, location]);

  const inputBaseClasses = `appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 disabled:cursor-not-allowed sm:text-sm ${
    theme === 'dark'
      ? 'bg-gray-700 border-gray-600 text-white disabled:bg-gray-800'
      : 'bg-white border-gray-300 text-gray-900 disabled:bg-gray-100'
  }`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setError('');
      setLoading(true);

      if (!email.trim() || !password.trim()) {
        throw new Error('Por favor, preencha todos os campos');
      }

      await login(email, password);
      //toast.success('Login realizado com sucesso!');
      
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
      
    } catch (error) {
      console.error('Erro no login:', error);
      
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case 'auth/user-not-found':
          case 'auth/wrong-password':
            setError('Email ou senha incorretos');
            break;
          case 'auth/too-many-requests':
            setError('Muitas tentativas. Tente novamente mais tarde');
            break;
          case 'auth/invalid-email':
            setError('Email inválido');
            break;
          default:
            setError('Ocorreu um erro ao fazer login. Tente novamente.');
        }
      } else if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Ocorreu um erro inesperado');
      }
      
      toast.error(error instanceof Error ? error.message : 'Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sm:mx-auto sm:w-full sm:max-w-md"
      >
        <h2 className={`mt-6 text-center text-3xl font-extrabold ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          Entre na sua conta
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
      >
        <div className={`py-8 px-4 shadow sm:rounded-lg sm:px-10 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`border px-4 py-3 rounded relative ${
                  theme === 'dark' 
                    ? 'bg-red-900/50 border-red-700 text-red-200' 
                    : 'bg-red-50 border-red-400 text-red-700'
                }`}
                role="alert"
              >
                <span className="block sm:inline">{error}</span>
              </motion.div>
            )}

            <div>
              <label 
                htmlFor="email" 
                className={`block text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                }`}
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 disabled:cursor-not-allowed sm:text-sm ${
                    theme === 'dark'
                      ? 'bg-gray-700 border-gray-600 text-white disabled:bg-gray-800'
                      : 'bg-white border-gray-300 text-gray-900 disabled:bg-gray-100'
                  }`}
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
    <label 
      htmlFor="password" 
      className={`block text-sm font-medium ${
        theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
      }`}
    >
      Senha
    </label>
    <div className="mt-1 relative">
      <input
        id="password"
        name="password"
        type={showPassword ? "text" : "password"}
        autoComplete="current-password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
        className={inputBaseClasses}
        placeholder="••••••••"
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className={`absolute inset-y-0 right-0 pr-3 flex items-center ${
          theme === 'dark' ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-500'
        } transition-colors focus:outline-none`}
      >
        {showPassword ? (
          <FiEyeOff className="h-5 w-5" />
        ) : (
          <FiEye className="h-5 w-5" />
        )}
        <span className="sr-only">
          {showPassword ? 'Esconder senha' : 'Mostrar senha'}
        </span>
      </button>
    </div>
  </div>

  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <input
        id="remember-me"
        name="remember-me"
        type="checkbox"
        checked={rememberMe}
        onChange={(e) => setRememberMe(e.target.checked)}
        className={`h-4 w-4 rounded focus:ring-primary-500 ${
          theme === 'dark'
            ? 'bg-gray-700 border-gray-600 text-primary-600'
            : 'bg-white border-gray-300 text-primary-600'
        } transition-colors`}
      />
      <label 
        htmlFor="remember-me" 
        className={`ml-2 block text-sm ${
          theme === 'dark' ? 'text-gray-200' : 'text-gray-900'
        }`}
      >
        Lembrar-me
      </label>
    </div>

    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="text-sm"
    >
      <Link
        to="/forgot-password"
        className={`font-medium ${
          theme === 'dark'
            ? 'text-primary-400 hover:text-primary-300'
            : 'text-primary-600 hover:text-primary-500'
        } transition-colors`}
      >
        Esqueceu sua senha?
      </Link>
    </motion.div>
  </div>

            <div>
              <button
    type="submit"
    disabled={loading}
    className={`w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ${
      loading ? 'cursor-not-allowed' : 'cursor-pointer transform hover:-translate-y-0.5'
    }`}
  >
    {loading ? (
      <div className="flex items-center">
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Entrando...
      </div>
    ) : (
      'Entrar'
    )}
  </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className={`w-full border-t ${
                  theme === 'dark' ? 'border-gray-700' : 'border-gray-300'
                }`} />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className={`px-2 ${
                  theme === 'dark' 
                    ? 'bg-gray-800 text-gray-400' 
                    : 'bg-white text-gray-500'
                }`}>
                  Não tem uma conta?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/register"
                className={`w-full inline-flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors ${
                  theme === 'dark'
                    ? 'border-gray-600 bg-gray-700 text-gray-200 hover:bg-gray-600'
                    : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Criar nova conta
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;