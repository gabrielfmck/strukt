// src/components/learning/MonacoEditor.tsx
import { useRef, useEffect } from 'react';
import Editor, { OnMount, OnChange } from '@monaco-editor/react';
import { editor } from 'monaco-editor';
import { useTheme } from '../../contexts/theme/ThemeContext';

interface MonacoEditorProps {
  initialCode: string;
  language?: string;
  readOnly?: boolean;
  onChange?: (value: string | undefined) => void;
  height?: string;
  className?: string;
}

const MonacoEditor = ({
  initialCode,
  language = 'c',
  readOnly = false,
  onChange,
  height = '400px',
  className = '',
}: MonacoEditorProps) => {
  const { theme } = useTheme();
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
  const isDark = theme === 'dark';

  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor;
    
    editor.updateOptions({
      theme: isDark ? 'vs-dark' : 'vs-light',
      fontSize: 14,
      fontFamily: 'Fira Code, monospace',
      minimap: { enabled: false },
      scrollbar: {
        vertical: 'auto',
        horizontal: 'auto',
      },
      lineNumbers: 'on',
      readOnly: readOnly,
      wordWrap: 'on',
      automaticLayout: true,
      tabSize: 2,
      renderWhitespace: 'none',
      roundedSelection: true,
      cursorBlinking: 'smooth',
      cursorSmoothCaretAnimation: 'on',
      scrollBeyondLastLine: false,
    });
  };

  const handleEditorChange: OnChange = (value) => {
    if (onChange) {
      onChange(value);
    }
  };

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.updateOptions({
        theme: isDark ? 'vs-dark' : 'vs-light'
      });
    }
  }, [isDark]);

  return (
    <div className={`overflow-hidden rounded-lg border ${
      isDark 
        ? 'border-gray-700 bg-gray-800' 
        : 'border-gray-200 bg-white'
    } ${className}`}>
      <Editor
        height={height}
        defaultLanguage={language}
        defaultValue={initialCode}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        options={{
          readOnly,
          contextmenu: true,
          scrollBeyondLastLine: false,
          smoothScrolling: true,
        }}
      />
    </div>
  );
};

export default MonacoEditor;