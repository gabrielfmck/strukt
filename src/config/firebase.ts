import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getStorage } from 'firebase/storage'; // Adiciona essa importação

const firebaseConfig = {
  apiKey: "AIzaSyDujRB_MYGFj2vqpMZiSF0v3UqpmS_ezms",
  authDomain: "strukt-tcc.firebaseapp.com",
  projectId: "strukt-tcc",
  storageBucket: "strukt-tcc.firebasestorage.app",
  messagingSenderId: "892023344275",
  appId: "1:892023344275:web:6a1b665e915a6025009166",
  measurementId: "G-J8965FLEJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app); // Inicializa o Storage aqui

// Initialize Analytics conditionally
const initAnalytics = async () => {
  try {
    if (await isSupported()) {
      const analytics = await getAnalytics(app);
      console.log('Analytics initialized successfully');
      return analytics;
    }
    console.log('Analytics not supported in this environment');
    return null;
  } catch {
    // Log sem o parâmetro error não utilizado
    console.log('Failed to initialize analytics');
    return null;
  }
};

// Initialize analytics and export what we need
initAnalytics().catch(() => {
  console.log('Failed to initialize analytics');
});

export { auth, storage };
export default app;