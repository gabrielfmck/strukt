// src/contexts/auth/AuthProvider.tsx
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
import { toast } from 'react-toastify';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleError = (error: FirebaseError) => {
    console.error('Firebase error:', error);
    let message = 'Ocorreu um erro. Tente novamente.';

    switch (error.code) {
      case 'auth/email-already-in-use':
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
      case 'auth/email-already-exists':
        message = 'Este email já está em uso por outra conta.';
        break;
    }

    toast.error(message);
    throw new Error(message);
  };

  const signUp = async (email: string, password: string, displayName?: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      if (displayName) {
        await updateProfile(userCredential.user, { displayName });
      }

      toast.success('Conta criada com sucesso!');
      return userCredential.user;
    } catch (error) {
      if (error instanceof FirebaseError) {
        handleError(error);
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
        handleError(error);
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
        handleError(error);
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
        handleError(error);
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
        handleError(error);
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
        handleError(error);
      }
      throw error;
    }
  };

  const updateUserProfile = async (profileData: { displayName?: string; photoURL?: string }) => {
    if (!currentUser) {
      throw new Error('Nenhum usuário autenticado');
    }

    try {
      await updateProfile(currentUser, profileData);
      // Atualiza o estado do usuário com os novos dados
      setCurrentUser(prev => prev ? Object.assign(Object.create(Object.getPrototypeOf(prev)), { ...prev, ...profileData }) : null);
      toast.success('Perfil atualizado com sucesso!');
    } catch (error) {
      if (error instanceof FirebaseError) {
        handleError(error);
      }
      throw error;
    }
  };

  const value = {
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

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}