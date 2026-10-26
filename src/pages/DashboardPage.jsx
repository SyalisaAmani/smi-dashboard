import Navbar from "../components/NavBar";
import ProductCard from "../components/ProductCard";

function DashboardPage({ products, loading }) {

    return (
        <main className="dashboard">
            <div className="dashboard-page">
                <Navbar />
                {loading ? (
                <p>Memuat produk...</p>
                ) : ( products.length === 0 ? (
                    <p>Belum ada produk yang tersedia.</p>
                ) : (
                    <div className="product-list">
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