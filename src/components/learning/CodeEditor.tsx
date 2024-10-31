// src/components/learning/CodeEditor.tsx
import { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('javascript', js);

interface CodeEditorProps {
  initialCode?: string;
  onCodeChange?: (code: string) => void;
  onRunCode?: (code: string) => void;
}

const CodeEditor = ({ 
  initialCode = '// Digite seu código aqui\n',
  onCodeChange,
  onRunCode 
}: CodeEditorProps) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value;
    setCode(newCode);
    onCodeChange?.(newCode);
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput('Executando...');

    try {
      // Aqui você pode implementar a lógica para executar o código
      // Por enquanto, vamos apenas simular uma execução
      setTimeout(() => {
        setOutput('Código executado com sucesso!\nOutput: Hello, World!');
        setIsRunning(false);
      }, 1000);

      onRunCode?.(code);
    } catch (error) {
      setOutput(`Erro: ${error}`);
      setIsRunning(false);
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 bg-gray-800">
        <h3 className="text-white font-medium">Editor de Código</h3>
        <button
          onClick={handleRunCode}
          disabled={isRunning}
          className={`px-4 py-2 rounded-lg text-white text-sm font-medium ${
            isRunning
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-green-600 hover:bg-green-700'
          }`}
        >
          {isRunning ? 'Executando...' : 'Executar'}
        </button>
      </div>

      <div className="relative">
        <textarea
          value={code}
          onChange={handleCodeChange}
          className="w-full h-64 p-4 bg-transparent text-transparent caret-white resize-none font-mono"
          spellCheck="false"
          style={{ position: 'absolute', zIndex: 1 }}
        />
        <SyntaxHighlighter
          language="javascript"
          style={vs2015}
          customStyle={{
            margin: 0,
            padding: '1rem',
            height: '16rem',
            backgroundColor: 'transparent',
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>

      {output && (
        <div className="p-4 border-t border-gray-700">
          <h4 className="text-white font-medium mb-2">Output:</h4>
          <pre className="text-gray-300 font-mono text-sm whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;