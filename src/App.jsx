
import { useState, useEffect, useRef, useCallback } from 'react';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import { getProducts } from './services/ProductService';
import { useLoginService } from './services/LoginService';

function App() {
  const {
    username,
    setUsername,
    password,
    setPassword,
    errorMessage,
    isLoggedIn,
    checkLogin,
    handleLogout,
  } = useLoginService();

  // State data produk
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [productError, setProductError] = useState('');

  // Penanda untuk mengabaikan request yang sudah tidak berlaku
  const requestIdRef = useRef(0);

  // Fungsi untuk mengambil data produk
  const loadProducts = useCallback(async () => {
    const currentRequestId = ++requestIdRef.current;

    setLoading(true);
    setProductError('');

    try {
      const productsData = await getProducts();

      if (currentRequestId !== requestIdRef.current) return;

      setProducts(productsData);
    } catch (error) {
      if (currentRequestId !== requestIdRef.current) return;

      console.error(error);
      setProductError(
        error instanceof Error
          ? error.message
          : 'Terjadi kesalahan saat mengambil data produk'
      );
    } finally {
      if (currentRequestId === requestIdRef.current) {
        setLoading(false);
      }
    }
  }, []);

  // Memuat produk ketika pengguna sudah login
  useEffect(() => {
    if (!isLoggedIn) return;

    loadProducts();

    return () => {
      requestIdRef.current += 1;
    };
  }, [isLoggedIn, loadProducts]);

  // Menangani logout aplikasi
  const handleAppLogout = () => {
    // Membatalkan validitas request yang sedang berjalan
    requestIdRef.current += 1;

    setProducts([]);
    setProductError('');
    setLoading(false);

    handleLogout();
  };

  return (
    <div>
      {isLoggedIn ? (
        <DashboardPage
          products={products}
          loading={loading}
          productError={productError}
          onLogout={handleAppLogout}
        />
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
