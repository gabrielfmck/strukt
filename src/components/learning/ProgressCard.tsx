// src\components\learning\ProgressCard.tsx
import React from 'react';
import { Trophy, Clock, Award, Code } from 'lucide-react';
import { motion } from 'framer-motion';
import type { UserStats } from '../../types/auth';

interface ProgressCardProps {
  stats: UserStats;
  theme: 'dark' | 'light';
}

const ProgressCard: React.FC<ProgressCardProps> = ({ stats, theme }) => {
  const isDark = theme === 'dark';
  
  return (
    <div className={`rounded-lg shadow-lg p-6 ${
      isDark ? 'bg-gray-800' : 'bg-white'
    }`}>
      <h3 className={`text-lg font-semibold mb-6 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        Progresso
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* Exercícios e Nível */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`rounded-lg p-4 ${
            isDark ? 'bg-primary-900/50' : 'bg-primary-50'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Trophy className={`w-5 h-5 mr-2 ${
                isDark ? 'text-primary-400' : 'text-primary-600'
              }`} />
              <h4 className={`font-medium ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Exercícios</h4>
            </div>
            <span className={`text-sm font-medium ${
              isDark ? 'text-primary-400' : 'text-primary-600'
            }`}>
              Nível {stats.level}
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                Completados
              </span>
              <span className={`font-medium ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {stats.exercisesCompleted}
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${(stats.exercisesCompleted % 50) * 2}%` }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-primary-600 rounded-full h-2"
              />
            </div>
          </div>
        </motion.div>

        {/* Tempo de Estudo */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className={`rounded-lg p-4 ${
            isDark ? 'bg-green-900/50' : 'bg-green-50'
          }`}
        >
          <div className="flex items-center mb-4">
            <Clock className={`w-5 h-5 mr-2 ${
              isDark ? 'text-green-400' : 'text-green-600'
            }`} />
            <h4 className={`font-medium ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Tempo de Estudo</h4>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                Horas Totais
              </span>
              <span className={`font-medium ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {stats.studyHours}h
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
                Sequência
              </span>
              <span className={`font-medium ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {stats.studyStreak} dias
              </span>
            </div>
          </div>
        </motion.div>

        {/* Conquistas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className={`rounded-lg p-4 ${
            isDark ? 'bg-purple-900/50' : 'bg-purple-50'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Award className={`w-5 h-5 mr-2 ${
                isDark ? 'text-purple-400' : 'text-purple-600'
              }`} />
              <h4 className={`font-medium ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Conquistas</h4>
            </div>
            <span className={`text-sm font-medium ${
              isDark ? 'text-purple-400' : 'text-purple-600'
            }`}>
              {stats.badges} badges
            </span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2, delay: 0.3 + (i * 0.05) }}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  i < stats.badges 
                    ? isDark ? 'bg-purple-700' : 'bg-purple-200'
                    : isDark ? 'bg-gray-700' : 'bg-gray-200'
                }`}
              >
                <Award className={`w-4 h-4 ${
                  i < stats.badges 
                    ? isDark ? 'text-purple-400' : 'text-purple-600'
                    : isDark ? 'text-gray-600' : 'text-gray-400'
                }`} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Módulo Atual */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className={`mt-6 pt-6 border-t ${
          isDark ? 'border-gray-700' : 'border-gray-200'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Code className={`w-5 h-5 mr-2 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>
              Módulo Atual
            </span>
          </div>
          <span className={isDark ? 'text-primary-400' : 'text-primary-600'}>
            {stats.currentModule}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default ProgressCard;