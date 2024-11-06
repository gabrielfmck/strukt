// src/components/TestFirebase.tsx
import { useEffect } from 'react';
import { type FirebaseApp } from 'firebase/app';
import { type Auth } from 'firebase/auth';
import { app, auth } from '../config/firebase';

export const TestFirebase = () => {
  useEffect(() => {
    const firebaseApp: FirebaseApp = app;
    const firebaseAuth: Auth = auth;

    console.log('Firebase App:', firebaseApp);
    console.log('Firebase Auth:', firebaseAuth);
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-lg m-4">
      <h2 className="text-xl font-bold text-primary-600">Firebase Test</h2>
      <p className="text-gray-600">Verifique o console para detalhes da inicialização</p>
    </div>
  );
};