// src/utils/auth-utils.ts
import { FirebaseError } from 'firebase/app';

export function handleFirebaseError(error: FirebaseError): string {
  let message = 'Ocorreu um erro. Tente novamente.';

  switch (error.code) {
    // Erros de autenticação
    case 'auth/email-already-in-use':
    case 'auth/email-already-exists':
      message = 'Este email já está em uso.';
      break;
    case 'auth/weak-password':
      message = 'A senha deve ter pelo menos 6 caracteres.';
      break;
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      message = 'Email ou senha incorretos.';
      break;
    case 'auth/requires-recent-login':
      message = 'Por favor, faça login novamente para realizar esta ação.';
      break;
    case 'auth/invalid-email':
      message = 'Email inválido.';
      break;
    case 'auth/too-many-requests':
      message = 'Muitas tentativas. Tente novamente mais tarde.';
      break;

    // Erros de storage
    case 'storage/unauthorized':
      message = 'Você não tem permissão para realizar esta ação.';
      break;
    case 'storage/canceled':
      message = 'Upload cancelado.';
      break;
    case 'storage/unknown':
      message = 'Erro ao fazer upload da imagem. Tente novamente.';
      break;

    // Erros gerais
    case 'auth/network-request-failed':
      message = 'Erro de conexão. Verifique sua internet.';
      break;
    case 'auth/internal-error':
      message = 'Erro interno. Tente novamente mais tarde.';
      break;
    case 'auth/invalid-photo-url':
      message = 'URL da foto inválida.';
      break;

    default:
      console.error('Firebase error:', error);
  }

  return message;
}

export function validateImageFile(file: File): string | null {
  // Validar tamanho (máximo 5MB)
  const maxSize = 5 * 1024 * 1024;
  if (file.size > maxSize) {
    return 'A imagem deve ter no máximo 5MB';
  }

  // Validar tipo
  if (!file.type.startsWith('image/')) {
    return 'O arquivo deve ser uma imagem';
  }

  // Validar extensão
  const validExtensions = ['jpg', 'jpeg', 'png', 'gif'];
  const extension = file.name.split('.').pop()?.toLowerCase();
  if (!extension || !validExtensions.includes(extension)) {
    return 'Formato de imagem inválido. Use JPG, PNG ou GIF';
  }

  return null;
}

export function getRandomAvatarColor(displayName: string | null | undefined): string {
  if (!displayName) return 'bg-primary-100';
  
  const colors = [
    'bg-red-100',
    'bg-yellow-100',
    'bg-green-100',
    'bg-blue-100',
    'bg-indigo-100',
    'bg-purple-100',
    'bg-pink-100'
  ];

  // Usar a primeira letra do nome para gerar um índice
  const charCode = displayName.charCodeAt(0);
  return colors[charCode % colors.length];
}

export function formatStudyTime(hours: number): string {
  if (hours < 1) return 'Menos de 1 hora';
  if (hours === 1) return '1 hora';
  return `${hours} horas`;
}

export function calculateLevel(exercisesCompleted: number): number {
  // Cada nível requer mais exercícios que o anterior
  const baseExercises = 10;
  let level = 1;
  let exercisesNeeded = baseExercises;

  while (exercisesCompleted >= exercisesNeeded) {
    level++;
    exercisesNeeded += baseExercises * level;
  }

  return level;
}