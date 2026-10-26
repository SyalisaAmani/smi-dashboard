import { useState } from "react";
import Navbar from "../components/NavBar";
import ProductCard from "../components/ProductCard";

function DashboardPage({ products, loading, onLogout }) {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <main className="dashboard">
            <div className="dashboard-page">
                <Navbar onLogout={onLogout} />
                {loading ? (
                <p>Memuat produk...</p>
                ) : ( products.length === 0 ? (
                    <p>Belum ada produk yang tersedia.</p>
                ) : (
                    <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ))}
            </div>
        </main>
    );
}

  export default DashboardPage;