import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';

const features = [
  {
    title: 'Aprendizado Interativo',
    description: 'Aprenda programação através de visualizações dinâmicas e exercícios práticos.',
    icon: '💡',
  },
  {
    title: 'Estruturas de Dados',
    description: 'Compreenda as estruturas de dados fundamentais com animações interativas.',
    icon: '🔄',
  },
  {
    title: 'Algoritmos',
    description: 'Domine os principais algoritmos com exemplos visuais e explicações detalhadas.',
    icon: '⚡',
  },
  {
    title: 'Exercícios Práticos',
    description: 'Pratique seus conhecimentos com exercícios e desafios de programação.',
    icon: '✍️',
  },
];

const Home = () => {
  const { currentUser } = useAuth();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              {currentUser ? (
                <>Bem-vindo de volta, {currentUser.email?.split('@')[0]}!</>
              ) : (
                <>Aprenda Programação de Forma Visual</>
              )}
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-primary-100">
              {currentUser ? (
                <>Continue sua jornada de aprendizado</>
              ) : (
                <>Domine lógica, algoritmos e estruturas de dados através de visualizações interativas</>
              )}
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              {currentUser ? (
                <>
                  <Link
                    to="/learn"
                    className="bg-white text-primary-600 px-8 py-4 rounded-lg font-medium hover:bg-primary-50 transition-colors text-lg"
                  >
                    Continuar Aprendendo
                  </Link>
                  <Link
                    to="/practice"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors text-lg"
                  >
                    Praticar Agora
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/register"
                    className="bg-white text-primary-600 px-8 py-4 rounded-lg font-medium hover:bg-primary-50 transition-colors text-lg"
                  >
                    Começar Agora
                  </Link>
                  <Link
                    to="/about"
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors text-lg"
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
            >
              Por que escolher o Strukt?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Uma plataforma completa para seu aprendizado em programação
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            {currentUser ? (
              <>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Pronto para continuar aprendendo?
                </h2>
                <p className="text-xl text-gray-600 mb-12">
                  Continue sua jornada de aprendizado com o Strukt
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    to="/learn"
                    className="inline-block bg-primary-600 text-white px-10 py-4 rounded-lg font-medium hover:bg-primary-700 transition-all duration-300 text-lg hover:scale-105"
                  >
                    Continuar Aprendendo
                  </Link>
                  <Link
                    to="/algorithms"
                    className="inline-block bg-white border-2 border-primary-600 text-primary-600 px-10 py-4 rounded-lg font-medium hover:bg-primary-50 transition-all duration-300 text-lg hover:scale-105"
                  >
                    Explorar Algoritmos
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Pronto para começar sua jornada?
                </h2>
                <p className="text-xl text-gray-600 mb-12">
                  Junte-se a milhares de estudantes que já estão aprendendo com o Strukt
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    to="/register"
                    className="inline-block bg-primary-600 text-white px-10 py-4 rounded-lg font-medium hover:bg-primary-700 transition-all duration-300 text-lg hover:scale-105"
                  >
                    Criar Conta Gratuita
                  </Link>
                  <Link
                    to="/login"
                    className="inline-block bg-white border-2 border-primary-600 text-primary-600 px-10 py-4 rounded-lg font-medium hover:bg-primary-50 transition-all duration-300 text-lg hover:scale-105"
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