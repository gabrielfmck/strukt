// src/services/pistonCompilerService.ts

interface PistonResponse {
    language: string;
    version: string;
    run?: {
      stdout: string;
      stderr: string;
      code: number;
      signal: string | null;
      output: string;
    };
    compile?: {
      stdout: string;
      stderr: string;
      code: number;
      signal: string | null;
      output: string;
    };
  }
  
  const PISTON_API = 'https://emkc.org/api/v2/piston';
  
  export const compileAndExecute = async (code: string, input: string = ''): Promise<string> => {
    try {
      console.log('Enviando código para compilação:', { code, input });
  
      const response = await fetch(`${PISTON_API}/execute`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          language: 'c',
          version: '10.2.0',
          files: [
            {
              name: 'main.c',
              content: code,
            }
          ],
          stdin: input,
          compile_timeout: 10000,
          run_timeout: 3000,
          compile_memory_limit: -1,
          run_memory_limit: -1,
        })
      });
  
      if (!response.ok) {
        console.error('Erro na resposta:', response.status, response.statusText);
        throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
      }
  
      const result: PistonResponse = await response.json();
      console.log('Resposta do servidor:', result);
  
      // Verifica erros de compilação
      if (result.compile?.stderr) {
        return `Erro de compilação:\n${result.compile.stderr}`;
      }
  
      // Verifica se compilou com sucesso
      if (result.compile?.code !== 0) {
        return `Erro de compilação: código ${result.compile?.code}`;
      }
  
      // Verifica se executou
      if (!result.run) {
        return 'Erro: O programa não foi executado';
      }
  
      // Verifica erros de execução
      if (result.run.stderr) {
        return `Erro de execução:\n${result.run.stderr}`;
      }
  
      // Verifica se executou com sucesso
      if (result.run.code !== 0) {
        return `Erro: Programa terminou com código ${result.run.code}`;
      }
  
      // Retorna a saída do programa
      return result.run.stdout || 'Programa executado com sucesso (sem saída)';
  
    } catch (error) {
      console.error('Erro detalhado:', error);
      if (error instanceof Error) {
        return `Erro: ${error.message}`;
      }
      return 'Erro desconhecido ao compilar/executar o código';
    }
  };