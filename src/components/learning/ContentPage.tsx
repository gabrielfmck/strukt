// src/components/learning/ContentPage.tsx
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ContentPageProps {
  title: string;
  content: string;
  nextModule?: string;
  duration: string;
}

const ContentPage = ({ title, content, nextModule, duration }: ContentPageProps) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-8"
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <span className="text-sm text-gray-500">Duração: {duration}</span>
        </div>

        <div className="prose max-w-none mb-8">
          {content}
        </div>

        <div className="flex justify-between items-center mt-8 pt-6 border-t">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-gray-900"
          >
            ← Voltar
          </button>
          {nextModule && (
            <button
              onClick={() => navigate(nextModule)}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700"
            >
              Próximo →
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ContentPage;