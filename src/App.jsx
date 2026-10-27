import { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import { getProducts } from './services/ProductService';

function App() {
  // State login
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [password, setPassword] = useState('');

  // Get data produk
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productError, setProductError] = useState('');

  // Fungsi validasi login
  const checkLogin = () => {
    if (!username.trim() || !password.trim()) {
      setErrorMessage("Username dan password wajib diisi");
      return;
    }
    
    if (username === "admin" && password === "smi123") {
      setErrorMessage('');
      setProductError('');
      setLoading(true);
      setIsLoggedIn(true);
    } else {
      setErrorMessage('Username atau password salah');
    }
  };

  // Fecth data produk dari API
  useEffect(() => {
  if (!isLoggedIn) return;

  let ignored = false;

  const loadProducts = async () => {
    try {
      const productsData = await getProducts();

      if (ignored) return;

      setProducts(productsData);
    } catch (error) {
      if (ignored) return;

      console.error(error);
      setProductError('Gagal mengambil data produk');
    } finally {
      if (!ignored) {
        setLoading(false);
      }
    }
  };

  loadProducts();

  return () => {
    ignored = true;
  };
}, [isLoggedIn]);

  // Fungsi logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setProducts([]);
    setLoading(false);
    setUsername('');
    setPassword('');
    setErrorMessage('');
    setProductError('');
  };

  return (
    <div>
      {isLoggedIn ? (
        <DashboardPage products={products} loading={loading} productError={productError} onLogout={handleLogout} />
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