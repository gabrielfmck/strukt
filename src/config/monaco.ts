// src/config/monaco.ts
export const MONACO_CONFIG = {
    themes: {
      light: 'vs-light',
      dark: 'vs-dark'
    },
    options: {
      fontFamily: 'Fira Code, monospace',
      fontSize: 14,
      lineHeight: 21,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      renderWhitespace: 'none',
      tabSize: 2,
      wordWrap: 'on',
      formatOnPaste: true,
      formatOnType: true,
      smoothScrolling: true,
      cursorBlinking: 'smooth',
      cursorSmoothCaretAnimation: 'on'
    }
  } as const;