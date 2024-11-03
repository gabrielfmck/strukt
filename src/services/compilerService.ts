// src/services/compilerService.ts
interface PaizaResponse {
  id?: string;
  status: string;
  stdout?: string;
  stderr?: string;
  build_stderr?: string;
  error?: string;
}

const PAIZA_API_KEY = 'guest';

export const compileAndExecute = async (code: string): Promise<string> => {
  try {
    console.log('Enviando código para compilação...', code);

    // Criar sessão de compilação
    const createResponse = await fetch('https://api.paiza.io/runners/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'API-KEY': PAIZA_API_KEY,
      },
      body: JSON.stringify({
        source_code: code,
        language: 'c',
        longpoll: true,
        api_key: PAIZA_API_KEY,
      })
    });

    if (!createResponse.ok) {
      throw new Error('Erro ao criar sessão de compilação');
    }

    const createData = await createResponse.json() as PaizaResponse;
    
    if (createData.error) {
      throw new Error(`Erro na criação da sessão: ${createData.error}`);
    }

    if (!createData.id) {
      console.error('Dados da resposta de criação:', createData);
      throw new Error('ID da sessão não recebido');
    }

    console.log('Sessão criada:', createData.id);

    // Aguardar resultado
    let retries = 0;
    const maxRetries = 10;
    
    while (retries < maxRetries) {
      const detailsResponse = await fetch(`https://api.paiza.io/runners/get_details?id=${createData.id}&api_key=${PAIZA_API_KEY}`);
      const result = await detailsResponse.json() as PaizaResponse;

      console.log('Status:', result.status);

      if (result.status === 'completed') {
        if (result.build_stderr) {
          return `Erro de compilação:\n${result.build_stderr}`;
        }

        if (result.stderr) {
          return `Erro de execução:\n${result.stderr}`;
        }

        return result.stdout || 'Programa executado com sucesso (sem saída)';
      }

      await new Promise(resolve => setTimeout(resolve, 1000));
      retries++;
    }

    throw new Error('Tempo limite excedido');

  } catch (error) {
    console.error('Erro detalhado:', error);
    if (error instanceof Error) {
      throw new Error(`Erro ao compilar/executar: ${error.message}`);
    }
    throw new Error('Erro desconhecido ao compilar/executar o código');
  }
};