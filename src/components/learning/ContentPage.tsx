// src/components/learning/ContentPage.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useModuleNavigation } from '../../hooks/useModuleNavigation';

interface ContentPageProps {
  title: string;
  content: JSX.Element;
  duration: string;
}

const ContentPage = ({ title, content, duration }: ContentPageProps) => {
  const { previousModule, nextModule, currentModule } = useModuleNavigation();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          {/* Navegação Superior */}
          <div className="text-sm text-gray-500 mb-6">
            <Link to="/learn" className="hover:text-gray-700">
              Trilha de Aprendizado
            </Link>
            <span className="mx-2">/</span>
            <span>{currentModule?.topic}</span>
            <span className="mx-2">/</span>
            <span>{title}</span>
          </div>

          {/* Cabeçalho */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            <span className="text-sm text-gray-500">Duração: {duration}</span>
          </div>

          {/* Conteúdo */}
          <div className="prose max-w-none mb-8">
            {content}
          </div>

          {/* Navegação */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            {previousModule ? (
              <Link
                to={previousModule.path}
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 19l-7-7 7-7" 
                  />
                </svg>
                <span className="hidden sm:inline">Aula Anterior:</span>
                <span className="ml-1">{previousModule.title}</span>
              </Link>
            ) : (
              <Link
                to="/learn"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 19l-7-7 7-7" 
                  />
                </svg>
                <span>Voltar para Trilha</span>
              </Link>
            )}
            {nextModule && (
              <Link
                to={nextModule.path}
                className="inline-flex items-center bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
              >
                <span>
                  <span className="hidden sm:inline">Próxima Aula:</span>
                  <span className="ml-1">{nextModule.title}</span>
                </span>
                <svg 
                  className="w-5 h-5 ml-2" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentPage;