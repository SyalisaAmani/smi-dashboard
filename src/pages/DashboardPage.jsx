import ProductCard from "../components/ProductCard";

function DashboardPage({ products, loading }) {

    return (
        <main className="dashboard">
            <div className="dashboard-page">
                <h1 className="text-3xl font-bold text-indigo-700">SMI Dashboard</h1>
                <h2>Katalog Produk</h2>

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