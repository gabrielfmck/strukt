import { FirebaseError } from 'firebase/app';

export function handleFirebaseError(error: FirebaseError): string {
  switch (error.code) {
    case 'auth/email-already-in-use':
      return 'Este email já está sendo usado por outra conta.';
    case 'auth/invalid-email':
      return 'Email inválido.';
    case 'auth/operation-not-allowed':
      return 'Operação não permitida.';
    case 'auth/weak-password':
      return 'A senha é muito fraca. Use pelo menos 6 caracteres.';
    case 'auth/user-disabled':
      return 'Esta conta foi desativada.';
    case 'auth/user-not-found':
      return 'Não existe uma conta com este email.';
    case 'auth/wrong-password':
      return 'Senha incorreta.';
    case 'auth/too-many-requests':
      return 'Muitas tentativas. Tente novamente mais tarde.';
    case 'auth/requires-recent-login':
      return 'Esta operação é sensível e requer autenticação recente. Faça login novamente.';
    default:
      console.error('Erro Firebase:', error);
      return 'Ocorreu um erro. Tente novamente.';
  }
}