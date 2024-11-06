// src/pages/learn/ControlStructures.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ControlStructures = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          {/* Cabeçalho */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Estruturas de Controle</h1>
            <span className="text-sm text-gray-500">Duração: 20 min</span>
          </div>

          {/* Conteúdo */}
          <div className="prose max-w-none mb-8">
            <h2>Estruturas Condicionais</h2>
            <p>
              Estruturas de controle permitem que seu programa tome decisões e execute 
              diferentes blocos de código baseados em condições.
            </p>

            <h3>if/else</h3>
            <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
              <code className="text-gray-100">
{`if (idade >= 18) {
    console.log("Pode dirigir");
} else {
    console.log("Não pode dirigir");
}`}
              </code>
            </pre>

            <h3>Loops (Estruturas de Repetição)</h3>
            <h4>for</h4>
            <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
              <code className="text-gray-100">
{`for (let i = 0; i < 5; i++) {
    console.log("Número:", i);
}`}
              </code>
            </pre>

            <h4>while</h4>
            <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
              <code className="text-gray-100">
{`let contador = 0;
while (contador < 5) {
    console.log("Contador:", contador);
    contador++;
}`}
              </code>
            </pre>

            <h3>switch/case</h3>
            <pre className="bg-gray-800 p-4 rounded-lg overflow-x-auto">
              <code className="text-gray-100">
{`switch (diaDaSemana) {
    case "Segunda":
        console.log("Início da semana");
        break;
    case "Sexta":
        console.log("Quase fim de semana");
        break;
    default:
        console.log("Outro dia");
}`}
              </code>
            </pre>

            <h3>Dicas Importantes</h3>
            <ul>
              <li>Sempre use chaves {} para delimitar blocos de código</li>
              <li>Indente seu código para melhor legibilidade</li>
              <li>Não esqueça do break no switch/case</li>
              <li>Cuidado com loops infinitos</li>
            </ul>
          </div>

          {/* Navegação */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <Link
              to="/learn/variables"
              className="text-gray-600 hover:text-gray-900"
            >
              ← Aula Anterior
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ControlStructures;