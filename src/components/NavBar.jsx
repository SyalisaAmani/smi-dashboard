import { LogOut } from "lucide-react";

function NavBar({onLogout}) {
    return (
        <nav className="mb-6 rounded-xl bg-white p-6 shadow-sm">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-indigo-700 text-xl font-bold">SMI Dashboard</h1>
                <h2 className="text-indigo text-lg">Selamat Datang di Katalog Produk</h2>
                <button
                type="button"
                onClick={onLogout}
                className="flex items-center gap-2 rounded-lg bg-red-700 px-4 py-2 text-white"
                >
                <LogOut size={18} />
                Logout
                </button>
            </div>
        </nav>
    );
}

export default NavBar;