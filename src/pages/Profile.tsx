// src/pages/Profile.tsx
import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const Profile = () => {
  const { currentUser, updateUserProfile, updateUserEmail, updateUserPassword } = useAuth();
  const [displayName, setDisplayName] = useState(currentUser?.displayName || '');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(currentUser?.photoURL || '');

  // useEffect para atualizar os dados iniciais
  useEffect(() => {
    if (currentUser) {
      setDisplayName(currentUser.displayName || '');
      setEmail(currentUser.email || '');
      setPhotoURL(currentUser.photoURL || '');
    }
  }, [currentUser]);

  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const profileData: { displayName?: string; photoURL?: string } = {};

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

      toast.success('Perfil atualizado com sucesso!');
    } catch (error) {
      console.error(error);
      toast.error('Erro ao atualizar perfil. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !currentUser) return;

    const storage = getStorage();
    const storageRef = ref(storage, `profile_pictures/${currentUser.uid}/${file.name}`);

    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);

      setPhotoURL(`${url}?timestamp=${Date.now()}`); // Força o recarregamento usando o timestamp

      // Atualiza o photoURL no Firebase Authentication
      await updateUserProfile({ photoURL: url });

      toast.success('Foto de perfil atualizada com sucesso!');
    } catch (error) {
      toast.error('Erro ao enviar foto de perfil. Tente novamente.');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="px-4 py-5 sm:p-6">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Seu Perfil</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Atualize suas informações pessoais e senha
                </p>
              </div>

              <form onSubmit={handleProfileUpdate} className="space-y-6">
                {/* Nome */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nome de exibição
                  </label>
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                {/* Nova Senha */}
                <div className="space-y-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Nova Senha (opcional)
                  </label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Digite a nova senha"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirme a nova senha"
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                {/* Foto de Perfil */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Foto de Perfil
                  </label>
                  <div className="mt-1 flex items-center">
                    {photoURL ? (
                      <img
                        src={photoURL} // URL com timestamp para forçar atualização
                        alt="Foto de perfil"
                        className="h-16 w-16 rounded-full object-cover"
                      />
                    ) : (
                      <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-3xl text-gray-600 font-medium">
                          {displayName?.charAt(0) || email?.charAt(0)}
                        </span>
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="ml-4"
                    />
                  </div>
                </div>

                {/* Botão de Salvar */}
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors ${
                      loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {loading ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Atualizando...
                      </div>
                    ) : (
                      'Salvar Alterações'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
