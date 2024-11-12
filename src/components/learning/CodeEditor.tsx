import { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/theme/ThemeContext';
import { compileAndExecute } from '../../services/compilerService';
import { toast } from 'react-toastify';
import MonacoEditor from './MonacoEditor';

interface CodeEditorProps {
  initialCode: string;
  language?: string;
  onCodeChange?: (code: string) => void; // Garantir que esta prop existe
  readOnly?: boolean;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  initialCode = '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}',
  onCodeChange,
  language = 'c',
  readOnly = false
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [input, setInput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  const handleCodeChange = (newCode: string | undefined) => {
    if (newCode) {
      setCode(newCode);
      setShowSuccess(false);
      if (onCodeChange) {
        onCodeChange(newCode);
      }
    }
  };

  const handleRunCode = async () => {
    if (!code.trim()) {
      toast.error('Por favor, insira algum código para executar');
      return;
    }

    setIsRunning(true);
    setOutput('Compilando e executando...');
    setShowSuccess(false);

    try {
      const result = await compileAndExecute(code, input);
      setOutput(result);

      if (!result.includes('Erro') && !result.includes('error')) {
        setShowSuccess(true);
        toast.success('Código executado com sucesso!');
      } else {
        toast.error('Erro ao executar o código');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
      setOutput(`Erro: ${errorMessage}`);
      toast.error(errorMessage);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className={`rounded-lg overflow-hidden shadow-xl border ${
      isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'
    }`}>
      {/* Header */}
      <div className={`flex items-center justify-between p-4 ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <h3 className={`font-medium ml-4 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>Editor de Código {language.toUpperCase()}</h3>
        </div>
        <button
          onClick={handleRunCode}
          disabled={isRunning || readOnly}
          className={`px-4 py-2 rounded-lg text-white text-sm font-medium transition-all ${
            isRunning || readOnly
              ? 'bg-gray-600 cursor-not-allowed opacity-50'
              : 'bg-primary-600 hover:bg-primary-700 hover:scale-105'
          }`}
        >
          {isRunning ? (
            <div className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Executando...
            </div>
          ) : (
            'Executar'
          )}
        </button>
      </div>

      {/* Editor */}
      <MonacoEditor
        initialCode={code}
        language={language}
        onChange={handleCodeChange}
        readOnly={readOnly}
        height="400px"
      />

      {/* Input Section */}
      {!readOnly && (
        <div className={`p-4 border-t ${
          isDark ? 'border-gray-700 bg-gray-900/20' : 'border-gray-200 bg-gray-50'
        }`}>
          <h4 className={`font-medium mb-2 flex items-center ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            Entrada (stdin):
          </h4>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={`w-full h-20 p-3 font-mono rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-500/50 border ${
              isDark 
                ? 'bg-gray-800 border-gray-700 text-gray-300' 
                : 'bg-white border-gray-300 text-gray-900'
            }`}
            placeholder="Digite a entrada do programa aqui..."
          />
        </div>
      )}

      {/* Success Message */}
      {showSuccess && (
        <div className="mx-4 mt-4">
          <div className={`border px-4 py-3 rounded-lg ${
            isDark 
              ? 'bg-green-900/20 border-green-500 text-green-300'
              : 'bg-green-50 border-green-400 text-green-800'
          }`}>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p>Código executado com sucesso!</p>
            </div>
          </div>
        </div>
      )}

      {/* Output */}
      {output && (
        <div className={`p-4 border-t ${
          isDark ? 'border-gray-700 bg-gray-900/20' : 'border-gray-200 bg-gray-50'
        }`}>
          <h4 className={`font-medium mb-2 flex items-center ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
            Saída:
          </h4>
          <pre className={`font-mono text-sm whitespace-pre-wrap p-4 rounded-lg border max-h-48 overflow-auto leading-relaxed ${
            isDark 
              ? 'bg-gray-800 border-gray-700 text-gray-300'
              : 'bg-white border-gray-200 text-gray-900'
          }`}>
            {output}
          </pre>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;