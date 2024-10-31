import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setIsLogin(true)}
          className={`py-2 px-4 font-semibold ${
            isLogin ? 'bg-blue-600 text-white' : 'text-blue-600'
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`py-2 px-4 font-semibold ${
            !isLogin ? 'bg-blue-600 text-white' : 'text-blue-600'
          }`}
        >
          Cadastro
        </button>
      </div>
      {isLogin ? <Login /> : <Register />}
    </div>
  );
};

export default Auth;