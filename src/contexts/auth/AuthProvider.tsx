import { useState, useEffect, type ReactNode } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile,
  updateEmail,
  updatePassword,
  type User
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { auth } from '../../config/firebase';
import { AuthContext } from './AuthContext';
import type { AuthContextType } from '../../types/auth';
import { toast } from 'react-toastify';

interface AuthProviderProps {
  children: ReactNode;
}

const handleFirebaseError = (error: FirebaseError): string => {
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
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      if (user) {
        console.log('Usuário autenticado:', user.email);
      }
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, displayName?: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      if (displayName) {
        await updateProfile(userCredential.user, { displayName });
      }

      toast.success('Conta criada com sucesso! Bem-vindo ao Strukt!');
      return userCredential.user;
    } catch (error) {
      if (error instanceof FirebaseError) {
        const message = handleFirebaseError(error);
        toast.error(message);
        throw new Error(message);
      }
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      toast.success('Login realizado com sucesso!');
      return userCredential.user;
    } catch (error) {
      if (error instanceof FirebaseError) {
        const message = handleFirebaseError(error);
        toast.error(message);
        throw new Error(message);
      }
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      toast.success('Logout realizado com sucesso!');
    } catch (error) {
      if (error instanceof FirebaseError) {
        const message = handleFirebaseError(error);
        toast.error(message);
        throw new Error(message);
      }
      throw error;
    }
  };

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Email de recuperação enviado! Verifique sua caixa de entrada.');
    } catch (error) {
      if (error instanceof FirebaseError) {
        const message = handleFirebaseError(error);
        toast.error(message);
        throw new Error(message);
      }
      throw error;
    }
  };

  const updateUserEmail = async (newEmail: string) => {
    if (!currentUser) {
      throw new Error('Nenhum usuário autenticado');
    }

    try {
      await updateEmail(currentUser, newEmail);
      toast.success('Email atualizado com sucesso!');
    } catch (error) {
      if (error instanceof FirebaseError) {
        const message = handleFirebaseError(error);
        toast.error(message);
        throw new Error(message);
      }
      throw error;
    }
  };

  const updateUserPassword = async (newPassword: string) => {
    if (!currentUser) {
      throw new Error('Nenhum usuário autenticado');
    }

    try {
      await updatePassword(currentUser, newPassword);
      toast.success('Senha atualizada com sucesso!');
    } catch (error) {
      if (error instanceof FirebaseError) {
        const message = handleFirebaseError(error);
        toast.error(message);
        throw new Error(message);
      }
      throw error;
    }
  };

  const updateUserProfile = async (newDisplayName: string) => {
    if (!currentUser) {
      throw new Error('Nenhum usuário autenticado');
    }

    try {
      await updateProfile(currentUser, { displayName: newDisplayName });
      setCurrentUser({ ...currentUser, displayName: newDisplayName });
      toast.success('Perfil atualizado com sucesso!');
    } catch (error) {
      if (error instanceof FirebaseError) {
        const message = handleFirebaseError(error);
        toast.error(message);
        throw new Error(message);
      }
      throw error;
    }
  };

  const value: AuthContextType = {
    currentUser,
    loading,
    signUp,
    login,
    logout,
    resetPassword,
    updateUserEmail,
    updateUserPassword,
    updateUserProfile
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
