// src\pages\Home.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../contexts/theme/ThemeContext';
import { 
  HiOutlinePresentationChartLine,
  HiOutlineCube,
  HiOutlineLightningBolt,
  HiOutlineCode
} from 'react-icons/hi';

const Home = () => {
  const { currentUser } = useAuth();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const displayName = currentUser?.displayName || currentUser?.email?.split('@')[0] || '';

  const features = [
    {
      title: 'Aprendizado Interativo',
      description: 'Aprenda programação através de visualizações dinâmicas e exercícios práticos.',
      icon: (
        <div className={`p-3 rounded-xl inline-flex ${
          isDark ? 'bg-blue-900/30' : 'bg-blue-100'
        }`}>
          <HiOutlinePresentationChartLine 
            className={`w-10 h-10 ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}
          />
        </div>
      ),
    },
    {
      title: 'Estruturas de Dados',
      description: 'Compreenda as estruturas de dados fundamentais com animações interativas.',
      icon: (
        <div className={`p-3 rounded-xl inline-flex ${
          isDark ? 'bg-indigo-900/30' : 'bg-indigo-100'
        }`}>
          <HiOutlineCube 
            className={`w-10 h-10 ${
              isDark ? 'text-indigo-400' : 'text-indigo-600'
            }`}
          />
        </div>
      ),
    },
    {
      title: 'Algoritmos',
      description: 'Domine os principais algoritmos com exemplos visuais e explicações detalhadas.',
      icon: (
        <div className={`p-3 rounded-xl inline-flex ${
          isDark ? 'bg-purple-900/30' : 'bg-purple-100'
        }`}>
          <HiOutlineLightningBolt 
            className={`w-10 h-10 ${
              isDark ? 'text-purple-400' : 'text-purple-600'
            }`}
          />
        </div>
      ),
    },
    {
      title: 'Exercícios Práticos',
      description: 'Pratique seus conhecimentos com exercícios e desafios de programação.',
      icon: (
        <div className={`p-3 rounded-xl inline-flex ${
          isDark ? 'bg-emerald-900/30' : 'bg-emerald-100'
        }`}>
          <HiOutlineCode 
            className={`w-10 h-10 ${
              isDark ? 'text-emerald-400' : 'text-emerald-600'
            }`}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center py-16 px-4 ${
        isDark 
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
                <>Bem-vindo(a) de volta, <br className="sm:hidden" />{displayName}!</>
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
                      isDark
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
                      isDark
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
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
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
                isDark ? 'text-gray-300' : 'text-gray-600'
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
                  isDark ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <div className="mb-4 sm:mb-6 text-primary-500">
                  {feature.icon}
                </div>
                <h3 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-sm sm:text-base leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={isDark ? 'bg-gray-800' : 'bg-primary-50'}>
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
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Pronto para continuar aprendendo?
                </h2>
                <p className={`text-lg sm:text-xl mb-8 sm:mb-12 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
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
                      isDark
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
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Pronto para começar sua jornada?
                </h2>
                <p className={`text-lg sm:text-xl mb-8 sm:mb-12 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
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
                      isDark
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