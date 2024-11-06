// src/config/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import type { FirebaseOptions } from 'firebase/app';

const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDuJR8_MYGFj2vqpMZiSF0v3UqpmS_ezms",
  authDomain: "strukt-tcc.firebaseapp.com",
  projectId: "strukt-tcc",
  storageBucket: "strukt-tcc.firebasestorage.app",
  messagingSenderId: "892023344275",
  appId: "1:892023344275:web:6a1b665e915a60250091f66",
  measurementId: "G-J896SFLEJZ"
};

// Inicializa Firebase com verificação
let app;
try {
  app = initializeApp(firebaseConfig);
  console.log('Firebase inicializado com sucesso');
} catch (error) {
  console.error('Erro ao inicializar Firebase:', error);
  throw error;
}

// Inicializa Auth com verificação
const auth = getAuth(app);

// Log para debug
console.log('Firebase App:', app);
console.log('Firebase Auth:', auth);

export { app, auth };