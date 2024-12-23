// src\components\debug\CorsDebug.tsx
import { useState, useEffect } from 'react';
import { storage } from '../../config/firebase';

const CorsDebug = () => {
  const [corsStatus, setCorsStatus] = useState<'checking' | 'ok' | 'error'>('checking');
  const [errorDetails, setErrorDetails] = useState<string>('');

  useEffect(() => {
    const checkCors = async () => {
      try {
        // Tenta fazer uma requisição HEAD para o storage
        const testUrl = `https://storage.googleapis.com/${storage.app.options.storageBucket}/test.txt`;
        const response = await fetch(testUrl, { method: 'HEAD' });
        
        if (response.ok || response.status === 404) {
          setCorsStatus('ok');
        } else {
          setCorsStatus('error');
          setErrorDetails(`Status: ${response.status} ${response.statusText}`);
        }
      } catch (error) {
        setCorsStatus('error');
        setErrorDetails(error instanceof Error ? error.message : 'Unknown error');
      }
    };

    if (process.env.NODE_ENV === 'development') {
      checkCors();
    }
  }, []);

  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 p-4 rounded-lg shadow-lg bg-white">
      <h3 className="text-lg font-semibold mb-2">CORS Status</h3>
      <div className="flex items-center space-x-2">
        <span className={`h-3 w-3 rounded-full ${
          corsStatus === 'checking' ? 'bg-yellow-500' :
          corsStatus === 'ok' ? 'bg-green-500' : 'bg-red-500'
        }`} />
        <span className="text-sm">
          {corsStatus === 'checking' ? 'Verificando CORS...' :
           corsStatus === 'ok' ? 'CORS OK' : 'Erro CORS'}
        </span>
      </div>
      {errorDetails && (
        <p className="mt-2 text-xs text-red-600">{errorDetails}</p>
      )}
    </div>
  );
};

export default CorsDebug;