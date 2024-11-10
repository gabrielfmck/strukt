// src/hooks/useAuth.ts
import { useContext } from 'react';
import { AuthContext, type AuthContextType } from '../contexts/auth/AuthContext';

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  
  return context;
}

// src/utils/auth-utils.ts
import { FirebaseError } from 'firebase/app';

export function handleFirebaseError(error: FirebaseError): string {
  switch (error.code) {
    case 'auth/email-already-in-use':
      return 'Este email já está em uso.';
    case 'auth/weak-password':
      return 'A senha deve ter pelo menos 6 caracteres.';
    case 'auth/invalid-email':
      return 'Email inválido.';
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      return 'Email ou senha incorretos.';
    case 'auth/requires-recent-login':
      return 'Por favor, faça login novamente para completar esta ação.';
    case 'auth/too-many-requests':
      return 'Muitas tentativas. Tente novamente mais tarde.';
    case 'auth/network-request-failed':
      return 'Erro de conexão. Verifique sua internet.';
    case 'auth/internal-error':
      return 'Erro interno. Tente novamente mais tarde.';
    case 'auth/email-already-exists':
      return 'Este email já está em uso por outra conta.';
    case 'auth/invalid-photo-url':
      return 'URL da foto inválida.';
    case 'storage/unknown':
      return 'Erro ao fazer upload da imagem. Tente novamente.';
    default:
      console.error('Firebase error:', error);
      return 'Ocorreu um erro inesperado. Tente novamente.';
  }
}