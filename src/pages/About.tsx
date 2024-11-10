import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Sobre o Strukt
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            Uma nova maneira de aprender programação
          </motion.p>
        </section>

        {/* Mission Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nossa Missão</h2>
            <p className="text-base text-gray-600 mb-6">
              O Strukt nasceu da necessidade de tornar o aprendizado de programação mais
              acessível e intuitivo. Nossa missão é transformar conceitos complexos em
              visualizações interativas que facilitam a compreensão e o aprendizado.
            </p>
            <p className="text-base text-gray-600">
              Acreditamos que todos podem aprender a programar, e nossa plataforma
              foi desenvolvida para tornar essa jornada mais envolvente e eficaz.
            </p>
          </motion.div>
        </section>

        {/* Benefits Section */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Aprendizado Visual
            </h3>
            <p className="text-base text-gray-600">
              Nossas visualizações interativas tornam conceitos abstratos mais
              tangíveis e fáceis de entender. Veja algoritmos em ação e compreenda
              como as estruturas de dados funcionam na prática.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Prática Guiada  
            </h3>
            <p className="text-base text-gray-600">
              Aprenda no seu próprio ritmo com exercícios práticos e feedback
              instantâneo. Nossa plataforma oferece um ambiente seguro para
              experimentar e aprender com seus erros.  
            </p>
          </motion.div>
        </section>

        {/* Stats Section */}  
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-3xl font-bold text-primary-600 mb-2">1000+</h4>
              <p className="text-base text-gray-600">Estudantes Ativos</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-3xl font-bold text-primary-600 mb-2">50+</h4>
              <p className="text-base text-gray-600">Exercícios Práticos</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-3xl font-bold text-primary-600 mb-2">100%</h4>
              <p className="text-base text-gray-600">Gratuito</p>
            </motion.div>
          </div>
        </section>

        {/* About Me Section */}
        <section className="bg-white rounded-lg shadow-lg p-10 md:p-16">
          <div className="md:flex md:items-center md:space-x-16">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg mx-auto">
                <motion.img 
                  src="https://i.imgur.com/2JQn4Qf.jpeg"
                  alt="Gabriel Fernandes"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Gabriel Fernandes de Jesus
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-gray-600 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Graduando em Engenharia de Software<br />
                <span className="text-black">UniCesumar</span>
              </motion.p>
              <motion.div
                className="mb-8 text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="mb-2">
                  <strong>Email:</strong> <a href="mailto:gabrielfernandes0625@gmail.com" className="text-[#0284c7] hover:underline">gabrielfernandes0625@gmail.com</a>
                </p>
                <p>
                  <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/gabrielfernandesj" target="_blank" rel="noopener noreferrer" className="text-[#0284c7] hover:underline">linkedin.com/in/gabrielfernandesj</a>
                </p>
              </motion.div>
              <motion.a
                href="https://www.linkedin.com/in/gabrielfernandesj/" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-[#0284c7] hover:bg-[#0369a1] text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md transition duration-300"
                initial={{ opacity: 0, scale: 0.8 }} 
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Baixar Currículo
              </motion.a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;