// src/utils/auth-utils.ts
import { FirebaseError } from 'firebase/app';

export function handleAuthError(error: FirebaseError): string {
  switch (error.code) {
    case 'auth/email-already-in-use':
      return 'Este email já está em uso';
    case 'auth/invalid-email':
      return 'Email inválido';
    case 'auth/operation-not-allowed':
      return 'Operação não permitida';
    case 'auth/weak-password':
      return 'Senha muito fraca';
    case 'auth/user-disabled':
      return 'Usuário desabilitado';
    case 'auth/user-not-found':
      return 'Usuário não encontrado';
    case 'auth/wrong-password':
      return 'Senha incorreta';
    case 'auth/too-many-requests':
      return 'Muitas tentativas. Tente novamente mais tarde';
    case 'auth/api-key-not-valid':
      return 'Erro de configuração do Firebase. Contate o suporte';
    default:
      return 'Ocorreu um erro inesperado';
  }
}