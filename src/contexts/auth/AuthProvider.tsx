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
  type User,
  setPersistence,
  browserLocalPersistence
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { auth } from '../../config/firebase';
import { AuthContext } from './AuthContext';
import type { AuthContextType } from '../../types/auth';
import { handleAuthError } from '../../utils/auth-utils';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Configurar persistência local
    setPersistence(auth, browserLocalPersistence)
      .catch((error) => {
        console.error('Erro ao configurar persistência:', error);
      });

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
      if (user) {
        console.log('Usuário autenticado:', user.email);
      } else {
        console.log('Usuário não autenticado');
      }
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (email: string, password: string, displayName?: string) => {
    try {
      console.log('Iniciando cadastro para:', email);
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      if (displayName) {
        await updateProfile(userCredential.user, { displayName });
      }

      setCurrentUser(userCredential.user);
      console.log('Cadastro realizado com sucesso');
      return userCredential.user;
    } catch (error) {
      console.error('Erro no cadastro:', error);
      if (error instanceof FirebaseError) {
        throw new Error(handleAuthError(error));
      }
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    try {
      console.log('Iniciando login para:', email);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setCurrentUser(userCredential.user);
      console.log('Login realizado com sucesso');
      return userCredential.user;
    } catch (error) {
      console.error('Erro no login:', error);
      if (error instanceof FirebaseError) {
        throw new Error(handleAuthError(error));
      }
      throw error;
    }
  };

  const logout = async () => {
    try {
      console.log('Iniciando logout');
      await signOut(auth);
      setCurrentUser(null);
      console.log('Logout realizado com sucesso');
    } catch (error) {
      console.error('Erro no logout:', error);
      if (error instanceof FirebaseError) {
        throw new Error(handleAuthError(error));
      }
      throw error;
    }
  };

  const resetPassword = async (email: string) => {
    try {
      console.log('Iniciando recuperação de senha para:', email);
      await sendPasswordResetEmail(auth, email);
      console.log('Email de recuperação enviado com sucesso');
    } catch (error) {
      console.error('Erro na recuperação de senha:', error);
      if (error instanceof FirebaseError) {
        throw new Error(handleAuthError(error));
      }
      throw error;
    }
  };

  const updateUserEmail = async (newEmail: string) => {
    if (!currentUser) {
      throw new Error('Nenhum usuário autenticado');
    }

    try {
      console.log('Iniciando atualização de email para:', newEmail);
      await updateEmail(currentUser, newEmail);
      console.log('Email atualizado com sucesso');
    } catch (error) {
      console.error('Erro na atualização de email:', error);
      if (error instanceof FirebaseError) {
        throw new Error(handleAuthError(error));
      }
      throw error;
    }
  };

  const updateUserPassword = async (newPassword: string) => {
    if (!currentUser) {
      throw new Error('Nenhum usuário autenticado');
    }

    try {
      console.log('Iniciando atualização de senha');
      await updatePassword(currentUser, newPassword);
      console.log('Senha atualizada com sucesso');
    } catch (error) {
      console.error('Erro na atualização de senha:', error);
      if (error instanceof FirebaseError) {
        throw new Error(handleAuthError(error));
      }
      throw error;
    }
  };

  const updateUserProfile = async (newDisplayName: string) => {
    if (!currentUser) {
      throw new Error('Nenhum usuário autenticado');
    }

    try {
      console.log('Iniciando atualização de perfil');
      await updateProfile(currentUser, { displayName: newDisplayName });
      // Atualizamos o usuário atual para refletir as mudanças
      setCurrentUser(prev => prev ? { ...prev } : null);
      console.log('Perfil atualizado com sucesso');
    } catch (error) {
      console.error('Erro na atualização do perfil:', error);
      if (error instanceof FirebaseError) {
        throw new Error(handleAuthError(error));
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