// src/pages/learn/QuickSort.tsx
import { useState } from 'react';
import ContentPage from '../../components/learning/ContentPage';
import CodeEditor from '../../components/learning/CodeEditor';
import VisualizationPanel from '../../components/learning/VisualizationPanel';
import { useTheme } from '../../contexts/theme/ThemeContext';

const QuickSort = () => {
  const [speed, setSpeed] = useState(1000);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const getSpeedLabel = (value: number): string => {
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
        O que é Quick Sort?
      </h2>
      <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        Quick Sort é um algoritmo de ordenação eficiente que usa a estratégia de divisão
        e conquista. Ele escolhe um elemento como pivô e particiona o array ao redor
        deste pivô, repetindo o processo recursivamente nas partições resultantes.
      </p>

      {/* Visualização */}
      <div className="mb-8">
        <h3 className={`text-xl font-semibold mb-4 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Visualização
        </h3>
        <div className={`p-6 rounded-lg transition-colors duration-200 ${
          isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
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
            algorithm="quick"
            data={[64, 34, 25, 12, 22, 11, 90]}
            speed={speed}
          />
        </div>
      </div>

      {/* Como Funciona */}
      <div className="mb-8">
        <h3 className={`text-xl font-semibold mb-4 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Como Funciona
        </h3>
        <div className={`p-6 rounded-lg space-y-4 ${
          isDark 
            ? 'bg-blue-900/20 text-blue-300' 
            : 'bg-blue-50 text-blue-700'
        }`}>
          {[
            {
              title: 'Escolha do Pivô',
              desc: 'Seleciona um elemento como pivô (geralmente o último)'
            },
            {
              title: 'Particionamento',
              desc: 'Rearranja o array de forma que elementos menores que o pivô fiquem à esquerda e maiores à direita'
            },
            {
              title: 'Recursão',
              desc: 'Aplica o mesmo processo recursivamente nas duas partições criadas'
            },
            {
              title: 'Combinação',
              desc: 'As subpartes já estarão ordenadas naturalmente após o processo'
            }
          ].map((step, index) => (
            <div key={index} className="flex items-start">
              <span className={`font-bold mr-2 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {index + 1}.
              </span>
              <div>
                <p className={`font-medium ${
                  isDark ? 'text-blue-300' : 'text-blue-700'
                }`}>
                  {step.title}
                </p>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
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
          isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
        }`}>
          <CodeEditor
            initialCode={`/* ... código existente do Quick Sort ... */`}
            language="c"
          />
        </div>
      </div>
      {/* Análise de Complexidade */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className={`p-6 rounded-lg transition-colors duration-200 ${
          isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
        }`}>
          <h3 className={`text-xl font-semibold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Complexidade
          </h3>
          <table className="min-w-full">
            <tbody>
              {[
                ['Melhor caso:', 'O(n log n)'],
                ['Caso médio:', 'O(n log n)'],
                ['Pior caso:', 'O(n²)'],
                ['Espaço:', 'O(log n)']
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
          <p className={`mt-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Nota: O pior caso O(n²) ocorre quando o pivô é sempre o menor ou maior elemento,
            mas isso é raro em arrays aleatórios.
          </p>
        </div>

        <div className={`p-6 rounded-lg transition-colors duration-200 ${
          isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
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
                <li>Eficiente na média</li>
                <li>In-place (pouca memória extra)</li>
                <li>Cache-friendly</li>
                <li>Paralelizável</li>
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
                <li>Pior caso O(n²)</li>
                <li>Não é estável</li>
                <li>Sensível à escolha do pivô</li>
                <li>Recursivo (usa pilha)</li>
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
          Otimizações Comuns
        </h3>
        <div className={`p-6 rounded-lg space-y-4 ${
          isDark 
            ? 'bg-yellow-900/20 text-yellow-300' 
            : 'bg-yellow-50 text-yellow-600'
        }`}>
          {[
            {
              title: 'Mediana de Três',
              desc: 'Escolhe o pivô como a mediana entre primeiro, meio e último elemento, reduzindo a chance do pior caso.'
            },
            {
              title: 'Insertion Sort para Partições Pequenas',
              desc: 'Usa Insertion Sort para partições menores que um certo limiar (geralmente 10-20 elementos).'
            },
            {
              title: 'Particionamento de Três Vias',
              desc: 'Lida melhor com arrays que têm muitos elementos duplicados, dividindo em três partes: menor, igual e maior que o pivô.'
            },
            {
              title: 'Iterativo em vez de Recursivo',
              desc: 'Implementação iterativa usando uma pilha explícita para evitar overflow da pilha de recursão.'
            }
          ].map((opt, index) => (
            <div key={index} className="flex items-start">
              <span className={`font-bold mr-2 ${
                isDark ? 'text-yellow-400' : 'text-yellow-600'
              }`}>
                {index + 1}.
              </span>
              <div>
                <h4 className={`font-semibold ${
                  isDark ? 'text-yellow-300' : 'text-yellow-700'
                }`}>
                  {opt.title}
                </h4>
                <p>{opt.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparação com Outros Algoritmos */}
      <div className="mb-8">
        <h3 className={`text-xl font-semibold mb-4 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Comparação com Outros Algoritmos
        </h3>
        <div className="overflow-x-auto rounded-lg">
          <table className={`min-w-full overflow-hidden shadow-lg ${
            isDark ? 'bg-gray-800' : 'bg-white'
          }`}>
            <thead className={isDark ? 'bg-gray-900' : 'bg-gray-50'}>
              <tr>
                {['Aspecto', 'Quick Sort', 'Merge Sort', 'Heap Sort'].map((header) => (
                  <th key={header} className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                    isDark ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={`divide-y ${
              isDark ? 'divide-gray-700' : 'divide-gray-200'
            }`}>
              {[
                ['Melhor/Médio', 'O(n log n)', 'O(n log n)', 'O(n log n)'],
                ['Pior caso', 'O(n²)', 'O(n log n)', 'O(n log n)'],
                ['Espaço', 'O(log n)', 'O(n)', 'O(1)'],
                ['Estável', 'Não', 'Sim', 'Não']
              ].map((row, index) => (
                <tr key={index}>
                  {row.map((cell, i) => (
                    <td key={i} className={`px-6 py-4 ${
                      isDark ? 'text-gray-300' : 'text-gray-900'
                    }`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
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
          isDark ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-50 hover:bg-gray-100'
        }`}>
          <ol className={`list-decimal list-inside space-y-4 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <li>
              Implemente o Quick Sort usando a estratégia de "Mediana de Três"
              para seleção do pivô.
            </li>
            <li>
              Modifique o algoritmo para usar Insertion Sort em partições menores
              que 10 elementos.
            </li>
            <li>
              Implemente uma versão iterativa do Quick Sort usando uma pilha
              explícita.
            </li>
            <li>
              Crie uma versão do Quick Sort que ordene strings em ordem
              alfabética.
            </li>
            <li>
              Implemente o particionamento de três vias para lidar melhor com
              elementos duplicados.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );

  return (
    <ContentPage
      title="Quick Sort"
      content={content}
      duration="30 min"
    />
  );
};

export default QuickSort;