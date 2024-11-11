// src/pages/Home.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../contexts/theme/ThemeContext';

const features = [
  {
    title: 'Aprendizado Interativo',
    description: 'Aprenda programação através de visualizações dinâmicas e exercícios práticos.',
    icon: (
      <svg
        className="w-12 h-12 text-primary-500"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
  },
  {
    title: 'Estruturas de Dados',
    description: 'Compreenda as estruturas de dados fundamentais com animações interativas.',
    icon: (
      <svg
        className="w-12 h-12 text-primary-500"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
        />
      </svg>
    ),
  },
  {
    title: 'Algoritmos',
    description: 'Domine os principais algoritmos com exemplos visuais e explicações detalhadas.',
    icon: (
      <svg
        className="w-12 h-12 text-primary-500"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
        />
      </svg>
    ),
  },
  {
    title: 'Exercícios Práticos',
    description: 'Pratique seus conhecimentos com exercícios e desafios de programação.',
    icon: (
      <svg
        className="w-12 h-12 text-primary-500"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
  },
];

const Home = () => {
  const { currentUser } = useAuth();
  const { theme } = useTheme();
  const displayName = currentUser?.displayName || currentUser?.email?.split('@')[0] || '';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center py-16 px-4 ${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-primary-900 to-primary-800'
          : 'bg-gradient-to-r from-primary-600 to-primary-800'
      }`}>
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center px-4 sm:px-6 lg:px-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              {currentUser ? (
                <>Bem-vindo de volta, <br className="sm:hidden" />{displayName}!</>
              ) : (
                <>Aprenda Programação <br className="sm:hidden" />de Forma Visual</>
              )}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              {currentUser ? (
                'Continue sua jornada de aprendizado'
              ) : (
                'Domine lógica, algoritmos e estruturas de dados através de visualizações interativas'
              )}
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              {currentUser ? (
                <>
                  <Link
                    to="/learn"
                    className={`px-8 py-4 rounded-lg font-medium transition-colors text-base sm:text-lg w-full sm:w-auto ${
                      theme === 'dark'
                        ? 'bg-white/10 text-white hover:bg-white/20'
                        : 'bg-white text-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    Continuar Aprendendo
                  </Link>
                  <Link
                    to="/practice"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors text-base sm:text-lg w-full sm:w-auto"
                  >
                    Praticar Agora
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/register"
                    className={`px-8 py-4 rounded-lg font-medium transition-colors text-base sm:text-lg w-full sm:w-auto ${
                      theme === 'dark'
                        ? 'bg-white/10 text-white hover:bg-white/20'
                        : 'bg-white text-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    Começar Agora
                  </Link>
                  <Link
                    to="/about"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors text-base sm:text-lg w-full sm:w-auto"
                  >
                    Saiba Mais
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-16 sm:py-20 px-4 ${
        theme === 'dark' ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              Por que escolher o Strukt?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-lg sm:text-xl max-w-3xl mx-auto ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Uma plataforma completa para seu aprendizado em programação
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="mb-4 sm:mb-6 text-primary-500">
                  {feature.icon}
                </div>
                <h3 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-sm sm:text-base leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={theme === 'dark' ? 'bg-gray-800' : 'bg-primary-50'}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            {currentUser ? (
              <>
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Pronto para continuar aprendendo?
                </h2>
                <p className={`text-lg sm:text-xl mb-8 sm:mb-12 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Continue sua jornada de aprendizado com o Strukt
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link
                    to="/learn"
                    className="w-full sm:w-auto bg-primary-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-all duration-300 text-base sm:text-lg hover:scale-105"
                  >
                    Continuar Aprendendo
                  </Link>
                  <Link
                    to="/algorithms"
                    className={`w-full sm:w-auto border-2 px-8 py-4 rounded-lg font-medium transition-all duration-300 text-base sm:text-lg hover:scale-105 ${
                      theme === 'dark'
                        ? 'border-gray-600 text-white hover:bg-gray-700'
                        : 'border-primary-600 text-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    Explorar Algoritmos
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Pronto para começar sua jornada?
                </h2>
                <p className={`text-lg sm:text-xl mb-8 sm:mb-12 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Junte-se a milhares de estudantes que já estão aprendendo com o Strukt
                </p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <Link
                    to="/register"
                    className="w-full sm:w-auto bg-primary-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-primary-700 transition-all duration-300 text-base sm:text-lg hover:scale-105"
                  >
                    Criar Conta Gratuita
                  </Link>
                  <Link
                    to="/login"
                    className={`w-full sm:w-auto border-2 px-8 py-4 rounded-lg font-medium transition-all duration-300 text-base sm:text-lg hover:scale-105 ${
                      theme === 'dark'
                        ? 'border-gray-600 text-white hover:bg-gray-700'
                        : 'border-primary-600 text-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    Já tenho uma conta
                  </Link>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;