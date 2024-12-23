// src\pages\About.tsx
import { motion } from "framer-motion";
import { useTheme } from "../contexts/theme/ThemeContext";
import {
  FaDesktop,
  FaRocket,
  FaCode,
  FaClock,
  FaUsers,
  FaBookOpen,
  FaBullseye,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaGraduationCap,
  FaLightbulb,
  FaFileDownload,
} from "react-icons/fa";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const baseStyles = {
    bg: isDark ? "bg-gray-900" : "bg-gray-50",
    card: isDark ? "bg-gray-800" : "bg-white",
    text: isDark ? "text-gray-300" : "text-gray-600",
    heading: isDark ? "text-white" : "text-gray-900",
  };

  const achievements = [
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Desenvolvedor Front-end",
      description:
        "Experiência com React.js, Node.js e outras tecnologias modernas",
    },
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      title: "Graduado em Eng. Software",
      description: "UniCesumar - Conclusão em 2024",
    },
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "Criador do Strukt",
      description: "Plataforma de ensino inovadora",
    },
  ];

  const stats = [
    {
      value: "100+",
      label: "Estudantes Ativos",
      icon: <FaUsers className="w-10 h-10" />,
      color: isDark ? "text-primary-400" : "text-primary-600",
      iconBg: isDark ? "bg-primary-900/30" : "bg-primary-100",
    },
    {
      value: "25+",
      label: "Exercícios Práticos",
      icon: <FaBookOpen className="w-10 h-10" />,
      color: isDark ? "text-green-400" : "text-green-500",
      iconBg: isDark ? "bg-green-900/30" : "bg-green-100",
    },
    {
      value: "100%",
      label: "Gratuito",
      icon: <FaBullseye className="w-10 h-10" />,
      color: isDark ? "text-blue-400" : "text-blue-500",
      iconBg: isDark ? "bg-blue-900/30" : "bg-blue-100",
    },
  ];

  const benefits = [
    {
      icon: <FaDesktop className="w-8 h-8" />,
      title: "Aprendizado Interativo",
      bgColor: isDark ? 'bg-blue-900/30' : 'bg-blue-100',
      iconColor: isDark ? 'text-blue-400' : 'text-blue-600',
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Visualização de Conceitos",
      bgColor: isDark ? 'bg-purple-900/30' : 'bg-purple-100',
      iconColor: isDark ? 'text-purple-400' : 'text-purple-600',
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Prática em Tempo Real",
      bgColor: isDark ? 'bg-green-900/30' : 'bg-green-100',
      iconColor: isDark ? 'text-green-400' : 'text-green-600',
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "Conteúdo Estruturado",
      bgColor: isDark ? 'bg-orange-900/30' : 'bg-orange-100',
      iconColor: isDark ? 'text-orange-400' : 'text-orange-600',
    },
  ];

  return (
    <div className={`min-h-screen ${baseStyles.bg}`}>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Developer Profile */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${baseStyles.card} rounded-xl shadow-xl overflow-hidden`}
          >
            <div className={`p-8 ${isDark ? "bg-gray-800/50" : "bg-gray-50/50"}`}>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <img
                    src="https://i.imgur.com/2JQn4Qf.jpeg"
                    alt="Gabriel Fernandes"
                    className={`w-48 h-48 rounded-xl object-cover border-4 ${
                      isDark ? "border-gray-700" : "border-white"
                    } shadow-lg mx-auto md:mx-0`}
                  />
                </div>

                <div className="flex-1 space-y-6">
                  <h2 className={`text-2xl font-bold ${baseStyles.heading}`}>
                    Gabriel Fernandes de Jesus
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={achievement.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{
                          scale: 1.02,
                          boxShadow: isDark
                            ? "0 10px 30px -10px rgba(0, 0, 0, 0.5)"
                            : "0 10px 30px -10px rgba(0, 0, 0, 0.2)",
                        }}
                        className={`p-4 rounded-xl ${
                          isDark
                            ? "bg-gray-800/70 hover:bg-gray-700/70"
                            : "bg-white hover:bg-gray-50"
                        } border ${
                          isDark ? "border-gray-700" : "border-gray-100"
                        } shadow-lg hover:shadow-2xl transition-all duration-300`}
                      >
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${
                            isDark 
                              ? 'bg-primary-900/30 text-primary-400' 
                              : 'bg-primary-100 text-primary-600'
                          }`}
                        >
                          {achievement.icon}
                        </div>
                        <h3 className={`font-medium ${baseStyles.heading} mb-1`}>
                          {achievement.title}
                        </h3>
                        <p className={`text-sm ${baseStyles.text}`}>
                          {achievement.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="mailto:gabrielfernandes0625@gmail.com"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                        isDark
                          ? "bg-gray-700 hover:bg-gray-600 text-gray-200"
                          : "bg-gray-800 hover:bg-gray-900 text-white"
                      }`}
                    >
                      <FaEnvelope className="text-lg" />
                      <span>Email</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="https://linkedin.com/in/gabrielfernandesj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0077B5] hover:bg-[#006399] text-white transition-all duration-200"
                    >
                      <FaLinkedin className="text-lg" />
                      <span>LinkedIn</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="https://github.com/gabrielfmck"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                        isDark
                          ? "bg-gray-700 hover:bg-gray-600 text-gray-200"
                          : "bg-gray-800 hover:bg-gray-900 text-white"
                      }`}
                    >
                      <FaGithub className="text-lg" />
                      <span>GitHub</span>
                    </motion.a>
                    <motion.a
                      href="/CV Gabriel.Fernandes.pdf"
                      download="CV Gabriel.Fernandes.pdf"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                        isDark
                          ? "bg-primary-600 hover:bg-primary-700 text-white"
                          : "bg-primary-500 hover:bg-primary-600 text-white"
                      }`}
                    >
                      <FaFileDownload className="text-lg" />
                      <span>Baixar Currículo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Nossa Missão */}
        <section className={`${baseStyles.card} rounded-xl shadow-lg p-8 mb-16`}>
          <h2 className={`text-2xl font-bold mb-6 ${baseStyles.heading}`}>
            Nossa Missão
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
            <div className="space-y-4">
            <div className="space-y-4">
  <p className={baseStyles.text}>
    O Strukt nasceu de uma visão clara: democratizar o aprendizado de programação, tornando-o mais acessível, 
    intuitivo e envolvente para todos. Nossa missão é transformar conceitos complexos de programação em 
    visualizações interativas, gamificação e experiências práticas que facilitam a compreensão e aceleram o aprendizado.
  </p>
  
  <p className={baseStyles.text}>
    Em um mundo cada vez mais digital, acreditamos que a programação deve ser acessível a todos. Com métodos 
    inovadores de ensino, exemplos práticos e uma abordagem passo a passo, transformamos conceitos complexos 
    em algo alcançável e divertido, oferecendo um ambiente onde teoria e prática se encontram de forma dinâmica.
  </p>

  <p className={baseStyles.text}>
    Nosso compromisso é ser um parceiro na sua jornada de aprendizado, fornecendo as ferramentas e o conhecimento 
    necessários para que você alcance seus objetivos na programação. Juntos, construímos um futuro onde cada pessoa 
    pode ser protagonista de sua própria história no mundo da tecnologia.
  </p>
</div>
</div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.title}
                  whileHover={{ scale: 1.05 }}
                  className={`flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 ${
                    isDark 
                      ? 'hover:bg-gray-800/50' 
                      : 'hover:shadow-lg'
                  }`}
                >
                  <div className={`${benefit.bgColor} p-4 rounded-xl mb-3 transition-colors`}>
                    <div className={`${benefit.iconColor} transition-colors`}>{benefit.icon}</div>
                  </div>
                  <h3 className={`text-sm font-medium ${baseStyles.heading}`}>
                    {benefit.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.02 }}
              className={`${baseStyles.card} rounded-xl shadow-lg p-8 transition-all duration-300 ${
                isDark 
                  ? 'hover:bg-gray-700/50' 
                  : 'hover:shadow-xl'
              }`}
            >
              <div className="flex flex-col items-center">
                <div className={`${stat.iconBg} p-4 rounded-xl mb-4 transition-colors`}>
                  <div className={`${stat.color} transition-colors`}>{stat.icon}</div>
                </div>
                <div className={`text-4xl font-bold mb-2 ${stat.color} transition-colors`}>
                  {stat.value}
                </div>
                <div className={`text-lg font-medium ${baseStyles.heading}`}>
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default About;