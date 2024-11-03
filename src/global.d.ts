// src/global.d.ts
/// <reference types="vite/client" />

declare module '*.css' {
    const content: { [className: string]: string };
    export default content;
  }
  
  declare module 'react-syntax-highlighter/dist/esm/languages/hljs/c' {
    const content: unknown;
    export default content;
  }
  
  declare module 'react-syntax-highlighter/dist/esm/styles/hljs' {
    export const vs2015: Record<string, unknown>;
  }