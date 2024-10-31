// src/pages/learn/Variables.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Variables = () => {
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
            <h1 className="text-3xl font-bold text-gray-900">Variáveis e Tipos de Dados</h1>
            <span className="text-sm text-gray-500">Duração: 15 min</span>
          </div>

          {/* Conteúdo */}
          <div className="prose max-w-none mb-8">
            <h2>O que são variáveis?</h2>
            <p>
              Variáveis são espaços na memória do computador que armazenam dados. 
              Pense nelas como caixas onde você pode guardar diferentes tipos de informação.
            </p>

            <h3>Tipos de Dados Básicos</h3>
            <ul>
              <li>
                <strong>Números:</strong>
                <ul>
                  <li>Inteiros (int): 1, 2, 3, -1, -2, -3</li>
                  <li>Decimais (float/double): 1.5, 3.14, -2.8</li>
                </ul>
              </li>
              <li>
                <strong>Texto (string):</strong> "Olá, mundo!", "Programação"
              </li>
              <li>
                <strong>Booleano (bool):</strong> true, false
              </li>
            </ul>

            <h3>Exemplos de Uso</h3>
            <pre className="bg-gray-100 p-4 rounded-lg">
              <code>
{`// Declarando variáveis
let idade = 25;
let nome = "Maria";
let altura = 1.65;
let estudante = true;

// Usando variáveis
console.log("Nome:", nome);
console.log("Idade:", idade);`}
              </code>
            </pre>

            <h3>Boas Práticas</h3>
            <ul>
              <li>Use nomes descritivos para suas variáveis</li>
              <li>Comece com letra minúscula</li>
              <li>Evite caracteres especiais</li>
              <li>Use camelCase para nomes compostos (ex: idadeUsuario)</li>
            </ul>
          </div>

          {/* Navegação */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <Link
              to="/learn/what-is-programming"
              className="text-gray-600 hover:text-gray-900"
            >
              ← Aula Anterior
            </Link>
            <Link
              to="/learn/control-structures"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Próxima Aula →
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Variables;