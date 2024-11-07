import { useState, useRef, useEffect } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import c from 'react-syntax-highlighter/dist/esm/languages/hljs/c';
import { compileAndExecute } from '../../services/compilerService';
import { toast } from 'react-toastify';

SyntaxHighlighter.registerLanguage('c', c);

interface CodeEditorProps {
  initialCode?: string;
  onCodeChange?: (code: string) => void;
  language?: string;
  readOnly?: boolean;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  initialCode = '#include <stdio.h>\n\nint main() {\n    printf("Hello, World!\\n");\n    return 0;\n}',
  onCodeChange,
  language = 'c',
  readOnly = false
}) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [input, setInput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  const handleScroll = (event: React.UIEvent<HTMLTextAreaElement>) => {
    if (textareaRef.current && editorRef.current) {
      editorRef.current.scrollTop = event.currentTarget.scrollTop;
      editorRef.current.scrollLeft = event.currentTarget.scrollLeft;
    }
  };

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    setShowSuccess(false);
    if (onCodeChange) {
      onCodeChange(newCode);
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

  const ExecuteButton = () => (
    <button
      onClick={handleRunCode}
      disabled={isRunning || readOnly}
      className={`px-4 py-2 rounded-lg text-white text-sm font-medium transition-all ${
        isRunning || readOnly
          ? 'bg-gray-600 cursor-not-allowed opacity-50'
          : 'bg-[#0284c7] hover:bg-[#0284c7]/90 hover:scale-105'
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
  );

  return (
    <div className="bg-[#1a1b26] rounded-lg overflow-hidden shadow-xl border border-[#232433]">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between p-4 bg-[#232433]">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <h3 className="text-gray-300 font-medium ml-4">Editor de Código C</h3>
        </div>
        <ExecuteButton />
      </div>

      {/* Editor */}
      <div className="relative" style={{ height: '400px' }}>
        <textarea
          ref={textareaRef}
          value={code}
          onChange={(e) => handleCodeChange(e.target.value)}
          onScroll={handleScroll}
          disabled={readOnly}
          className="absolute inset-0 w-full h-full resize-none font-mono bg-[#1a1b26] text-gray-300 
            focus:outline-none p-4 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            fontSize: '14px',
            lineHeight: '1.6',
            tabSize: 2,
            padding: '1rem 1rem 1rem 4rem',
            caretColor: '#0284c7',
            zIndex: 2,
          }}
          spellCheck={false}
        />
        <div 
          ref={editorRef}
          className="absolute inset-0 overflow-auto pointer-events-none"
          style={{ zIndex: 1 }}
        >
          <SyntaxHighlighter
            language={language}
            style={atomOneDark}
            showLineNumbers
            customStyle={{
              margin: 0,
              padding: '1rem 1rem 1rem 4rem',
              background: 'transparent',
              minHeight: '100%',
              fontSize: '14px',
              lineHeight: '1.6',
            }}
            lineNumberStyle={{
              minWidth: '3em',
              paddingRight: '1em',
              color: '#506686',
              textAlign: 'right',
              userSelect: 'none',
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>

      {/* Entrada */}
      {!readOnly && (
        <div className="p-4 border-t border-[#232433] bg-[#1f2937]/20">
          <h4 className="text-gray-300 font-medium mb-2 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            Entrada (stdin):
          </h4>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-20 p-3 bg-[#232433] text-gray-300 font-mono rounded-lg 
              resize-none focus:outline-none focus:ring-2 focus:ring-[#0284c7]/50 
              border border-gray-700"
            placeholder="Digite a entrada do programa aqui..."
          />
        </div>
      )}

      {/* Mensagem de Sucesso */}
      {showSuccess && (
        <div className="mx-4 mt-4">
          <div className="bg-green-900/20 border border-green-500 text-green-300 px-4 py-3 rounded-lg">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p>Código executado com sucesso!</p>
            </div>
          </div>
        </div>
      )}

      {/* Saída */}
      {output && (
        <div className="p-4 border-t border-[#232433] bg-[#1f2937]/20">
          <h4 className="text-gray-300 font-medium mb-2 flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
            Saída:
          </h4>
          <pre className="text-gray-300 font-mono text-sm whitespace-pre-wrap 
            bg-[#232433] p-4 rounded-lg max-h-48 overflow-auto border border-gray-700 
            leading-relaxed">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;