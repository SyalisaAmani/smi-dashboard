function DashboardPage({ products, loading }) {
    console.log('Products di DashboardPage:', products);
    console.log('Loading di DashboardPage:', loading);

    return (
      <div className="dashboard-page">
        <h1>SMI Dashboard</h1>
        <h2>Katalog Produk</h2>

        {loading ? (
          <p>Memuat produk...</p>
        ) : ( products.length > 0 ? (
            <p>Belum ada produk yang tersedia.</p>
        ) : (
            <div className="product-list">
                {products.map((product) => (
                    <article key={product.id} className="product-card">
                        <img src={product.thumbnail} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                    </article>
                ))}
            </div>
        ))}
      </div>
    );
}

  export default DashboardPage;