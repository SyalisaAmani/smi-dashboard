import { LogOut } from "lucide-react";

function NavBar({onLogout}) {
    return (
        <nav className="sticky top-0 z-40 mb-8 rounded-b-2xl border border-gray-100 bg-white px-6 py-5 shadow-md">
            <div className="container mx-auto flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
                <div className="flex items-center gap-3">
                    <img
                        src="/img/logo.png"
                        alt="Logo SMI"
                        className="h-12 w-12 rounded-xl bg-white object-contain p-1"
    />
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold tracking-tight text-red-900">SMI Dashboard</h1>
                        <h3 className="mt-1 text-sm text-gray-500">Selamat Datang di Katalog Produk</h3>
                    </div>
                </div>
                <button
                type="button"
                onClick={onLogout}
                className="flex items-center gap-2 rounded-lg bg-red-900 px-4 py-2 text-white shadow-sm duration-200 hover:bg-red-800 active:scale-95"
                >
                <LogOut size={18} />
                Logout
                </button>
            </div>
        </nav>
    );
}

export default NavBar;