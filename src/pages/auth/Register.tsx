// src/pages/auth/Register.tsx
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { handleFirebaseError } from '../../utils/auth-utils';
import { FirebaseError } from 'firebase/app';
import { toast } from 'react-toastify';
import { useTheme } from '../../contexts/theme/ThemeContext';
import { FiEye, FiEyeOff } from 'react-icons/fi';


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signUp, currentUser } = useAuth();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    try {
      setError('');
      setLoading(true);
      await signUp(email, password);
      toast.success('Conta criada com sucesso! Bem-vindo ao Strukt!');
      navigate('/');
    } catch (error) {
      console.error('Erro no registro:', error);
      if (error instanceof FirebaseError) {
        const errorMessage = handleFirebaseError(error);
        setError(errorMessage);
        toast.error(errorMessage);
      } else {
        setError('Ocorreu um erro inesperado');
        toast.error('Ocorreu um erro inesperado');
      }
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = `appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
    isDark
      ? 'bg-gray-700 border-gray-600 text-white disabled:bg-gray-800'
      : 'bg-white border-gray-300 text-gray-900 disabled:bg-gray-100'
  }`;

  return (
    <div className={`min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className={`mt-6 text-center text-3xl font-extrabold ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Criar nova conta
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className={`py-8 px-4 shadow sm:rounded-lg sm:px-10 ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className={`border px-4 py-3 rounded relative animate-fade-in ${
                isDark
                  ? 'bg-red-900/50 border-red-700 text-red-200'
                  : 'bg-red-50 border-red-400 text-red-700'
              }`}>
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className={`block text-sm font-medium ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
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
                  placeholder="seu@email.com"
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
    <label htmlFor="password" className={`block text-sm font-medium ${
      isDark ? 'text-gray-300' : 'text-gray-700'
    }`}>
      Senha
    </label>
    <div className="mt-1 relative">
      <input
        id="password"
        name="password"
        type={showPassword ? "text" : "password"}
        autoComplete="new-password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        disabled={loading}
        placeholder="Mínimo 6 caracteres"
        className={inputClasses}
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className={`absolute inset-y-0 right-0 pr-3 flex items-center ${
          isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-500'
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

  <div>
    <label htmlFor="confirm-password" className={`block text-sm font-medium ${
      isDark ? 'text-gray-300' : 'text-gray-700'
    }`}>
      Confirmar Senha
    </label>
    <div className="mt-1 relative">
      <input
        id="confirm-password"
        name="confirm-password"
        type={showConfirmPassword ? "text" : "password"}
        autoComplete="new-password"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        disabled={loading}
        placeholder="Digite a senha novamente"
        className={inputClasses}
      />
      <button
        type="button"
        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        className={`absolute inset-y-0 right-0 pr-3 flex items-center ${
          isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-500'
        } transition-colors focus:outline-none`}
      >
        {showConfirmPassword ? (
          <FiEyeOff className="h-5 w-5" />
        ) : (
          <FiEye className="h-5 w-5" />
        )}
        <span className="sr-only">
          {showConfirmPassword ? 'Esconder senha' : 'Mostrar senha'}
        </span>
      </button>
    </div>
  </div>

  {/* Botão de submit atualizado */}
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
          Criando conta...
        </div>
      ) : (
        'Criar conta'
      )}
    </button>
  </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className={`w-full border-t ${
                  isDark ? 'border-gray-700' : 'border-gray-300'
                }`} />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className={`px-2 ${
                  isDark ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500'
                }`}>
                  Já tem uma conta?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/login"
                className={`w-full inline-flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium transition-colors ${
                  isDark
                    ? 'border-gray-600 bg-gray-700 text-gray-200 hover:bg-gray-600'
                    : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
              >
                Fazer login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;