import { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import { Search, ArrowUp } from "lucide-react";

function DashboardPage({ products, loading, productError, onLogout }) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()));
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape" || event.key === "Enter") {
                 event.preventDefault();
                setSelectedProduct(null);
            }
        };

        if (selectedProduct) {
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [selectedProduct]);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main className="dashboard min-h-screen bg-[#F8F1F2]">
            <div className="dashboard-page">
                <Navbar onLogout={onLogout} />

                {loading ? (
                    <p>Memuat produk...</p>
                ) : productError ? (
                    <p>{productError}</p>
                ) : filteredProducts.length === 0 ? (
                    <div className="px-4 py-12 text-center">
                        <Search size={36} className="mx-auto mb-3 text-gray-300" />
                        <p className="text-base font-semibold text-gray-700">
                            Tidak ada produk yang sesuai dengan pencarian.
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                            Coba gunakan kata kunci lain.
                        </p>
                    </div>
                ) : (
                    <div>
                        <div className="mb-6 flex items-center justify-between px-4">
                            <span className="rounded-full border border-red-100 bg-red-50 px-4 py-2 text-sm font-semibold text-red-900 shadow-sm">{filteredProducts.length} Produk</span>
                        </div>

                        <div className="mb-6 px-4">
                            <div className="relative">
                                <Search
                                size={18}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                />
                                <input
                                    type="text"
                                    placeholder="Cari nama produk..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-10 text-sm text-gray-700 outline-none transition duration-200 focus:border-red-900 focus:ring-2 focus:ring-red-100"
                                />
                                {searchTerm && (
                                <button
                                    type="button"
                                    onClick={() => setSearchTerm('')}
                                    aria-label="Hapus pencarian"
                                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md px-2 py-1 text-gray-400 transition hover:bg-gray-100 hover:text-red-900"
                                >
                                    ✕
                                </button>
                                )}
                            </div>
                        </div>

                        {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                    onDetailClick={setSelectedProduct}
                                />
                            ))}
                        </div>
                        ) : (
                            <div className="px-4 py-12 text-center">
                                <Search size={36} className="mx-auto mb-3 text-gray-300" />
                                <p className="text-base font-semibold text-gray-700">
                                    Tidak ada produk yang sesuai dengan pencarian.
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                    Coba gunakan kata kunci lain.
                                </p>
                            </div>
                        )}
                    </div>
                )}

                {selectedProduct && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
                        onClick={() => setSelectedProduct(null)}
                    >
                        <div
                            role="dialog" aria-modal="true"
                            className="relative max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-lg bg-white p-6"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <button
                                type="button"
                                onClick={() => setSelectedProduct(null)}
                                className="absolute right-4 top-4 rounded-lg px-3 py-1 text-gray-500 transition hover:bg-gray-100"
                                aria-label="Tutup detail produk"
                            >
                                ✕
                            </button>

                            <h2 className="pr-10 text-xl font-bold text-gray-800">
                                {selectedProduct.title}
                            </h2>

                            <img
                                src={selectedProduct.thumbnail}
                                alt={selectedProduct.title}
                                className="my-4 h-48 w-full rounded-xl bg-gray-50 object-contain p-3"
                            />

                            <p className="text-gray-600">
                                {selectedProduct.description}
                            </p>

                            <p className="mt-4 text-2xl font-bold text-red-900">
                                Rp {selectedProduct.price.toLocaleString("id-ID")}
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {showBackToTop && (
            <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                aria-label="Kembali ke atas"
                className="fixed bottom-6 right-6 z-40 rounded-full bg-red-900 p-3 text-white shadow-lg transition duration-200 hover:bg-red-950 hover:shadow-xl active:scale-90"
            >
                <ArrowUp size={20} />
            </button>
            )}
        </main>
    );
}

export default DashboardPage;