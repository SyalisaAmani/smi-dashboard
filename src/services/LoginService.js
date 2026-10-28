import { useState } from 'react';

export const useLoginService = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [isLoggedIn, setIsLoggedIn] = useState(
    () => sessionStorage.getItem('isLoggedIn') === 'true'
  );

  // Validasi login
  const checkLogin = () => {
    if (!username.trim() || !password.trim()) {
      setErrorMessage('Username dan password wajib diisi');
      return;
    }

    if (username === 'admin' && password === 'smi123') {
      setErrorMessage('');
      sessionStorage.setItem('isLoggedIn', 'true');
      setIsLoggedIn(true);
    } else {
      setErrorMessage('Username atau password salah');
    }
  };

  // Fungsi logout
  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');

    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
    setErrorMessage('');
  };

  return {
    username,
    setUsername,
    password,
    setPassword,
    errorMessage,
    isLoggedIn,
    checkLogin,
    handleLogout,
  };
};