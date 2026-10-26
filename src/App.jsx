import { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  // State login
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [password, setPassword] = useState('');

  // Get data produk
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fungsi validasi login
  const checkLogin = () => {
    if (username === "admin" && password === "smi123") {
      setErrorMessage('');
      setIsLoggedIn(true);
    } else {
      setErrorMessage('Username atau password salah');
    }
  };

  // Fecth data produk dari API
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/products');

      if (!response.ok) {
        throw new Error('Gagal mengambil data produk');
      }

      const data = await response.json();
      console.log('Data produk:',data.products);
      setProducts(data.products);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetchProducts();
    }
  }, [isLoggedIn]);

  // Tampilan aplikasi
  return (
    <div>
      {isLoggedIn ? (
        <DashboardPage products={products} loading={loading} />
      ) : (
        <LoginPage
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          errorMessage={errorMessage}
          checkLogin={checkLogin}
        />
      )}
    </div>
  );
}

export default App;