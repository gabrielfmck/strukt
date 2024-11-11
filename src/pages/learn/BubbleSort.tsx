// src/pages/learn/BubbleSort.tsx
import { useState } from 'react';
import ContentPage from '../../components/learning/ContentPage';
import CodeEditor from '../../components/learning/CodeEditor';
import VisualizationPanel from '../../components/learning/VisualizationPanel';
import { useTheme } from '../../contexts/theme/ThemeContext';

const BubbleSort = () => {
  const [speed, setSpeed] = useState(1000);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const getSpeedLabel = (value: number) => {
    if (value < 500) return 'Muito Rápido';
    if (value < 1000) return 'Rápido';
    if (value < 1500) return 'Médio';
    if (value < 2000) return 'Lento';
    return 'Muito Lento';
  };

  const content = (
    <div>
      <h2 className={`text-2xl font-bold mb-4 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>
        O que é Bubble Sort?
      </h2>
      <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        Bubble Sort é um algoritmo de ordenação simples que percorre repetidamente
        a lista, compara elementos adjacentes e os troca se estiverem na ordem errada.
        O algoritmo recebe esse nome porque elementos "flutuam" como bolhas para suas posições corretas.
      </p>

      {/* Visualização */}
      <div className="mb-8">
        <h3 className={`text-xl font-semibold mb-4 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Visualização
        </h3>
        <div className={`p-6 rounded-lg transition-colors duration-200 ${
          isDark ? 'bg-gray-800/50' : 'bg-gray-50'
        }`}>
          <div className="mb-4">
            <label
              htmlFor="speed"
              className={`block text-sm font-medium mb-2 flex justify-between ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              <span>Velocidade da Animação</span>
              <span className="text-primary-500 font-semibold">
                {getSpeedLabel(speed)}
              </span>
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                id="speed"
                min="100"
                max="2000"
                step="100"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className={`flex-grow h-2 rounded-lg appearance-none cursor-pointer ${
                  isDark ? 'bg-gray-700' : 'bg-gray-200'
                } accent-primary-500`}
              />
            </div>
            <div className={`flex justify-between text-xs mt-1 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <span>Mais Rápido</span>
              <span>Mais Lento</span>
            </div>
          </div>
          <VisualizationPanel
            algorithm="bubble"
            data={[64, 34, 25, 12, 22, 11, 90]}
            speed={speed}
          />
        </div>
      </div>

      {/* Implementação */}
      <div className="mb-8">
        <h3 className={`text-xl font-semibold mb-4 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Implementação
        </h3>
        <div className={`p-6 rounded-lg transition-colors duration-200 ${
          isDark ? 'bg-gray-800/50' : 'bg-gray-50'
        }`}>
          <CodeEditor
            initialCode={`/* ... código existente do Bubble Sort ... */`}
            language="c"
          />
        </div>
      </div>

      {/* Análise de Complexidade */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className={`p-6 rounded-lg transition-colors duration-200 ${
          isDark ? 'bg-gray-800/50' : 'bg-gray-50'
        }`}>
          <h3 className={`text-xl font-semibold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Complexidade
          </h3>
          <table className="min-w-full">
            <tbody>
              {[
                ['Melhor caso:', 'O(n)'],
                ['Caso médio:', 'O(n²)'],
                ['Pior caso:', 'O(n²)'],
                ['Espaço:', 'O(1)']
              ].map(([label, value]) => (
                <tr key={label}>
                  <td className={`py-2 font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-900'
                  }`}>
                    {label}
                  </td>
                  <td className="py-2 font-mono text-primary-500">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={`mt-4 text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            O melhor caso O(n) ocorre quando o array já está ordenado e a flag
            de otimização é usada.
          </p>
        </div>

        <div className={`p-6 rounded-lg transition-colors duration-200 ${
          isDark ? 'bg-gray-800/50' : 'bg-gray-50'
        }`}>
          <h3 className={`text-xl font-semibold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Características
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className={`font-semibold mb-2 ${
                isDark ? 'text-green-400' : 'text-green-600'
              }`}>
                Vantagens
              </h4>
              <ul className={`list-disc pl-5 space-y-1 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Fácil de implementar</li>
                <li>Bom para arrays pequenos</li>
                <li>Estável (mantém ordem de elementos iguais)</li>
                <li>In-place (não usa memória extra)</li>
              </ul>
            </div>
            <div>
              <h4 className={`font-semibold mb-2 ${
                isDark ? 'text-red-400' : 'text-red-600'
              }`}>
                Desvantagens
              </h4>
              <ul className={`list-disc pl-5 space-y-1 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>Ineficiente para arrays grandes</li>
                <li>Complexidade quadrática</li>
                <li>Muitas operações de troca</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Otimizações */}
      <div className="mb-8">
        <h3 className={`text-xl font-semibold mb-4 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Otimizações Possíveis
        </h3>
        <div className={`p-6 rounded-lg ${
          isDark 
            ? 'bg-blue-900/20 text-blue-300' 
            : 'bg-blue-50 text-blue-600'
        }`}>
          <ul className="space-y-3">
            {[
              {
                title: 'Flag de troca:',
                desc: 'Adicionar uma flag que indica se houve trocas no último passe. Se não houve trocas, o array já está ordenado.'
              },
              {
                title: 'Limite de comparações:',
                desc: 'Reduzir o número de comparações a cada passe, já que os últimos elementos já estão ordenados.'
              },
              {
                title: 'Bubble Sort bidirecional:',
                desc: 'Também conhecido como Cocktail Sort, percorre o array em ambas as direções, reduzindo o número de passes necessários.'
              }
            ].map((opt, index) => (
              <li key={index} className="flex items-start">
                <span className={`font-bold mr-2 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`}>
                  {index + 1}.
                </span>
                <div>
                  <strong className={isDark ? 'text-blue-300' : 'text-blue-700'}>
                    {opt.title}
                  </strong>
                  <p>{opt.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Exercícios */}
      <div>
        <h3 className={`text-xl font-semibold mb-4 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Exercícios
        </h3>
        <div className={`p-6 rounded-lg transition-colors duration-200 ${
          isDark ? 'bg-gray-800/50' : 'bg-gray-50'
        }`}>
          <ol className={`list-decimal list-inside space-y-4 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <li>
              Implemente uma versão do Bubble Sort que conte o número total de trocas realizadas.
            </li>
            <li>
              Modifique o algoritmo para ordenar em ordem decrescente em vez de crescente.
            </li>
            <li>
              Implemente a versão bidirecional (Cocktail Sort) e compare sua eficiência.
            </li>
            <li>
              Crie uma função que verifica se um array está ordenado usando o conceito
              do Bubble Sort (comparações adjacentes).
            </li>
          </ol>
        </div>
      </div>
    </div>
  );

  return (
    <ContentPage
      title="Bubble Sort"
      content={content}
      duration="15 min"
    />
  );
};

export default BubbleSort;