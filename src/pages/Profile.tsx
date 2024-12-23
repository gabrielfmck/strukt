// src/pages/Profile.tsx
import { useState, useEffect, useCallback, FormEvent, ChangeEvent } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../contexts/theme/ThemeContext';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import type { UserStats, UserPreferences } from '../types/auth';
import { Camera } from 'lucide-react';
import ProgressCard from '../components/learning/ProgressCard';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

interface ProfileData {
  displayName?: string;
  photoURL?: string;
}

const defaultStats: UserStats = {
  exercisesCompleted: 0,
  studyHours: 0,
  studyStreak: 0,
  level: 0,
  badges: 0,
  currentModule: 'Aprender'
};

const defaultPreferences: UserPreferences = {
  theme: 'system',
  preferredLanguage: 'javascript',
  difficulty: 'intermediate',
  notifications: true
};

const Profile = () => {
  const { currentUser, updateUserProfile, updateUserEmail, updateUserPassword } = useAuth();
  const { theme } = useTheme();
  const [displayName, setDisplayName] = useState(currentUser?.displayName || '');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(currentUser?.photoURL || '');
  const [stats, setStats] = useState<UserStats>(defaultStats);
  const [preferences, setPreferences] = useState<UserPreferences>(defaultPreferences);
  const db = getFirestore();

  const fetchUserStatsAndPreferences = useCallback(async (userId: string) => {
    try {
      // Fetch stats
      const userStatsRef = doc(db, 'users', userId, 'stats', 'progress');
      const statsDoc = await getDoc(userStatsRef);

      if (statsDoc.exists()) {
        setStats(statsDoc.data() as UserStats);
      } else {
        await setDoc(userStatsRef, defaultStats);
      }

      // Fetch preferences
      const userPreferencesRef = doc(db, 'users', userId, 'preferences', 'settings');
      const preferencesDoc = await getDoc(userPreferencesRef);

      if (preferencesDoc.exists()) {
        setPreferences(preferencesDoc.data() as UserPreferences);
      } else {
        await setDoc(userPreferencesRef, defaultPreferences);
      }
    } catch (error) {
      console.error('Erro ao buscar dados do usuário:', error);
      toast.error('Erro ao carregar dados do usuário');
    }
  }, [db]);

  useEffect(() => {
    if (currentUser) {
      fetchUserStatsAndPreferences(currentUser.uid);
    }
  }, [currentUser, fetchUserStatsAndPreferences]);

  const handleProfileUpdate = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const profileData: ProfileData = {};
      const userPreferencesRef = doc(db, 'users', currentUser?.uid || '', 'preferences', 'settings');

      if (displayName !== currentUser?.displayName) {
        profileData.displayName = displayName;
      }

      if (photoURL && photoURL !== currentUser?.photoURL) {
        profileData.photoURL = photoURL;
      }

      // Salvar as preferências no Firestore
      await setDoc(userPreferencesRef, preferences, { merge: true });

      if (Object.keys(profileData).length > 0) {
        await updateUserProfile(profileData);
      }

      if (email !== currentUser?.email) {
        await updateUserEmail(email);
      }

      if (newPassword) {
        if (newPassword !== confirmPassword) {
          throw new Error('As senhas não coincidem');
        }
        if (newPassword.length < 6) {
          throw new Error('A senha deve ter pelo menos 6 caracteres');
        }
        await updateUserPassword(newPassword);
        setNewPassword('');
        setConfirmPassword('');
      }

      toast.success('Perfil atualizado com sucesso!');
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Erro ao atualizar perfil');
      }
    } finally {
      setLoading(false);
    }
  };

  const handlePhotoUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !currentUser) return;

    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      toast.error('A imagem deve ter no máximo 5MB');
      return;
    }

    if (!file.type.startsWith('image/')) {
      toast.error('O arquivo deve ser uma imagem');
      return;
    }

    try {
      setLoading(true);
      const storage = getStorage();
      const fileRef = ref(storage, `profile_pictures/${currentUser.uid}/${file.name}`);

      await uploadBytes(fileRef, file);
      const url = await getDownloadURL(fileRef);

      setPhotoURL(url);
      await updateUserProfile({ photoURL: url });
      toast.success('Foto atualizada com sucesso!');
    } catch (error) {
      console.error('Erro ao fazer upload:', error);
      toast.error('Erro ao atualizar foto');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen py-12 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Card Principal */}
        <div className={`rounded-2xl shadow-xl overflow-hidden mb-8 ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        }`}>
          {/* Header com Banner e Foto */}
          <div className="relative h-48 bg-gradient-to-r from-primary-600 to-primary-800">
            <div className="absolute left-8 -bottom-16">
              <div className="relative">
                <div className={`w-32 h-32 rounded-full overflow-hidden shadow-lg ${
                  theme === 'dark' ? 'border-4 border-gray-800' : 'border-4 border-white'
                }`}>
                  {photoURL ? (
                    <img
                      src={photoURL}
                      alt={displayName || 'Perfil'}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className={`w-full h-full flex items-center justify-center ${
                      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                    }`}>
                      <span className={`text-4xl font-medium ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {displayName?.charAt(0) || email?.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <label 
                  htmlFor="photo-upload" 
                  className="absolute bottom-0 right-0 p-2 bg-primary-600 rounded-full text-white cursor-pointer hover:bg-primary-700 transition-colors"
                >
                  <Camera size={20} />
                  <input
                    id="photo-upload"
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="pt-20 px-8 pb-8">
            <form onSubmit={handleProfileUpdate} className="space-y-6">
              {/* Informações Básicas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nome */}
                <div>
                  <label className={`block text-sm font-medium mb-1 ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Nome de exibição
                  </label>
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Seu nome"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className={`block text-sm font-medium mb-1 ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Nova Senha */}
                <div>
                  <label className={`block text-sm font-medium mb-1 ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Nova Senha
                  </label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Digite a nova senha"
                  />
                </div>

                {/* Confirmar Senha */}
                <div>
                  <label className={`block text-sm font-medium mb-1 ${
                    theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                  }`}>
                    Confirmar Senha
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                      theme === 'dark'
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Confirme a nova senha"
                  />
                </div>
              </div>

              {/* Preferências */}
              <div className={`border-t pt-6 ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <h3 className={`text-lg font-medium mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Preferências
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Tema */}
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      Tema
                    </label>
                    <select
                      value={preferences.theme}
                      onChange={(e) => setPreferences(prev => ({ ...prev, theme: e.target.value as 'light' | 'dark' | 'system' }))}
                      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                        theme === 'dark'
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="light">Claro</option>
                      <option value="dark">Escuro</option>
                      <option value="system">Sistema</option>
                    </select>
                  </div>

                  {/* Linguagem Principal */}
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      Linguagem Principal
                    </label>
                    <select
                      value={preferences.preferredLanguage}
                      onChange={(e) => setPreferences(prev => ({ ...prev, preferredLanguage: e.target.value }))}
                      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                        theme === 'dark'
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="javascript">JavaScript</option>
                      <option value="python">Python</option>
                      <option value="java">Java</option>
                      <option value="cpp">C++</option>
                      <option value="c">C</option>
                    </select>
                  </div>

                  {/* Nível de Dificuldade */}
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                      Nível de Dificuldade
                    </label>
                    <select
                      value={preferences.difficulty}
                      onChange={(e) => setPreferences(prev => ({ ...prev, difficulty: e.target.value as 'beginner' | 'intermediate' | 'advanced' }))}
                      className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                        theme === 'dark'
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="beginner">Iniciante</option>
                      <option value="intermediate">Intermediário</option>
                      <option value="advanced">Avançado</option>
                    </select>
                  </div>

                  {/* Notificações */}
                  <div className="flex items-center justify-between">
                    <div>
                      <label className={`block text-sm font-medium ${
                        theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                      }`}>
                        Notificações
                      </label>
                      <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
                        Receba lembretes e atualizações
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setPreferences(prev => ({ ...prev, notifications: !prev.notifications }))}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                        preferences.notifications ? 'bg-primary-600' : theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          preferences.notifications ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Botão Salvar */}
              <div className="flex justify-end pt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Salvando...
                    </>
                  ) : (
                    'Salvar Alterações'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Card de Estatísticas */}
<ProgressCard stats={stats} theme={theme} />
      </motion.div>
    </div>
  );
};

export default Profile;