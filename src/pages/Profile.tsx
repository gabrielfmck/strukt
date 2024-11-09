// src/pages/Profile.tsx
import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useAuth } from '../hooks/useAuth';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { Camera, Trophy, Code, Clock, Award } from 'lucide-react';

interface ProfileData {
  displayName?: string;
  photoURL?: string;
}

interface UserStats {
  exercisesCompleted: number;
  studyHours: number;
  studyStreak: number;
  level: number;
  badges: number;
  currentModule: string;
}

const defaultStats: UserStats = {
  exercisesCompleted: 42,
  studyHours: 28,
  studyStreak: 7,
  level: 3,
  badges: 12,
  currentModule: 'Estruturas de Dados'
};

const Profile = () => {
  const { currentUser, updateUserProfile, updateUserEmail, updateUserPassword } = useAuth();
  const [displayName, setDisplayName] = useState(currentUser?.displayName || '');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(currentUser?.photoURL || '');
  const [stats] = useState<UserStats>(defaultStats);
  const [theme, setTheme] = useState('light');
  const [preferredLanguage, setPreferredLanguage] = useState('javascript');
  const [difficulty, setDifficulty] = useState('intermediate');
  const [notifications, setNotifications] = useState(true);

  useEffect(() => {
    if (currentUser) {
      setDisplayName(currentUser.displayName || '');
      setEmail(currentUser.email || '');
      setPhotoURL(currentUser.photoURL || '');
      // Em produção, aqui você buscaria os dados do usuário da API
      // fetchUserStats(currentUser.uid);
      // fetchUserPreferences(currentUser.uid);
    }
  }, [currentUser]);

  const handleProfileUpdate = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const profileData: ProfileData = {};

      if (displayName !== currentUser?.displayName) {
        profileData.displayName = displayName;
      }

      if (photoURL && photoURL !== currentUser?.photoURL) {
        profileData.photoURL = photoURL;
      }

      if (Object.keys(profileData).length > 0) {
        await updateUserProfile(profileData);
      }

      if (email !== currentUser?.email) {
        await updateUserEmail(email);
      }

      if (newPassword) {
        if (newPassword !== confirmPassword) {
          toast.error('As senhas não coincidem');
          setLoading(false);
          return;
        }
        await updateUserPassword(newPassword);
        setNewPassword('');
        setConfirmPassword('');
      }

      // Em produção, aqui você também atualizaria as preferências do usuário
      // await updateUserPreferences({ theme, preferredLanguage, difficulty, notifications });

      toast.success('Perfil atualizado com sucesso!');
    } catch (error) {
      console.error(error);
      toast.error('Erro ao atualizar perfil');
    } finally {
      setLoading(false);
    }
  };

  const handlePhotoUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !currentUser) return;

    const storage = getStorage();
    const storageRef = ref(storage, `profile_pictures/${currentUser.uid}/${file.name}`);

    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setPhotoURL(`${url}?timestamp=${Date.now()}`);
      await updateUserProfile({ photoURL: url });
      toast.success('Foto atualizada com sucesso!');
    } catch (error) {
      toast.error('Erro ao atualizar foto');
      console.error(error);
    }
  };

return (
  <div className="min-h-screen bg-gray-50 py-12">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Card Principal do Perfil */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
        {/* Header com Banner e Foto */}
        <div className="relative h-48 bg-gradient-to-r from-primary-600 to-primary-800">
          <div className="absolute left-8 -bottom-16">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden">
                {photoURL ? (
                  <img
                    src={photoURL}
                    alt={displayName || 'Perfil'}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <span className="text-4xl font-medium text-gray-600">
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

        {/* Formulário de Perfil */}
        <div className="pt-20 px-8 pb-8">
          <form onSubmit={handleProfileUpdate} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome de exibição
                </label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Seu nome"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Nova Senha */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nova Senha
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Digite a nova senha"
                />
              </div>

              {/* Confirmar Senha */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirmar Senha
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Confirme a nova senha"
                />
              </div>
            </div>

            {/* Preferências */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Preferências</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Tema */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tema
                  </label>
                  <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="light">Claro</option>
                    <option value="dark">Escuro</option>
                    <option value="system">Sistema</option>
                  </select>
                </div>

                {/* Linguagem Preferida */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Linguagem Principal
                  </label>
                  <select
                    value={preferredLanguage}
                    onChange={(e) => setPreferredLanguage(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                  </select>
                </div>

                {/* Nível de Dificuldade */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nível de Dificuldade
                  </label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="beginner">Iniciante</option>
                    <option value="intermediate">Intermediário</option>
                    <option value="advanced">Avançado</option>
                  </select>
                </div>

                {/* Notificações */}
                <div className="flex items-center justify-between">
                  <div>
                    <label className="text-sm font-medium text-gray-700">
                      Notificações
                    </label>
                    <p className="text-sm text-gray-500">
                      Receba lembretes e atualizações
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setNotifications(!notifications)}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      notifications ? 'bg-primary-600' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        notifications ? 'translate-x-5' : 'translate-x-0'
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
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          Estatísticas de Aprendizado
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Exercícios e Nível */}
          <div className="bg-primary-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Trophy className="w-5 h-5 text-primary-600 mr-2" />
                <h4 className="font-medium text-gray-900">Progresso</h4>
              </div>
              <span className="text-sm text-primary-600 font-medium">
                Nível {stats.level}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Exercícios Completados</span>
                <span className="font-medium text-gray-900">{stats.exercisesCompleted}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-primary-600 rounded-full h-2" 
                  style={{ width: `${(stats.exercisesCompleted % 50) * 2}%` }}
                />
              </div>
            </div>
          </div>

          {/* Tempo de Estudo */}
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center mb-4">
              <Clock className="w-5 h-5 text-green-600 mr-2" />
              <h4 className="font-medium text-gray-900">Tempo de Estudo</h4>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Horas Totais</span>
                <span className="font-medium text-gray-900">{stats.studyHours}h</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Sequência</span>
                <span className="font-medium text-gray-900">{stats.studyStreak} dias</span>
              </div>
            </div>
          </div>

          {/* Conquistas */}
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <Award className="w-5 h-5 text-purple-600 mr-2" />
                <h4 className="font-medium text-gray-900">Conquistas</h4>
              </div>
              <span className="text-sm text-purple-600 font-medium">
                {stats.badges} badges
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    i < stats.badges ? 'bg-purple-200' : 'bg-gray-200'
                  }`}
                >
                  <Award 
                    className={`w-4 h-4 ${
                      i < stats.badges ? 'text-purple-600' : 'text-gray-400'
                    }`} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Módulo Atual */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Code className="w-5 h-5 text-gray-400 mr-2" />
              <span className="text-gray-600">Módulo Atual</span>
            </div>
            <span className="text-primary-600 font-medium">{stats.currentModule}</span>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);
};

export default Profile;