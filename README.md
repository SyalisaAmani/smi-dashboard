# SMI Dashboard

Aplikasi dashboard katalog produk berbasis React.js yang menggunakan REST API untuk menampilkan data produk secara responsif.

## Fitur Utama

- Login menggunakan kredensial demo.
- Menampilkan daftar produk dari DummyJSON API.
- Loading state dan penanganan error API.
- Validasi struktur data produk.
- Kartu produk dengan informasi harga dan deskripsi.
- Modal untuk melihat detail produk.
- Navbar sticky dengan tombol logout.
- Tampilan responsif untuk desktop, tablet, dan mobile.

## Teknologi

- React.js
- JavaScript
- Vite
- Tailwind CSS
- Lucide React
- Fetch API
- DummyJSON REST API

## Demo Login

- Username: `admin`
- Password: `smi123`

> Catatan: Kredensial tersebut hanya untuk demonstrasi dan bukan sistem autentikasi produksi.

## API

Data produk diambil dari:

https://dummyjson.com/products

## Cara Menjalankan Proyek

1. Clone repository:

   ```bash
   git clone URL_REPOSITORY_KAMU
   ```

2. Masuk ke direktori proyek:

   ```bash
   cd NAMA_FOLDER_PROYEK
   ```

3. Instal dependensi:

   ```bash
   npm install
   ```

4. Jalankan aplikasi:

   ```bash
   npm run dev
   ```

5. Buka URL lokal yang ditampilkan di terminal.

## Struktur Proyek

```text
src/
├── components/
│   ├── NavBar.jsx
│   └── ProductCard.jsx
├── pages/
│   ├── LoginPage.jsx
│   └── DashboardPage.jsx
├── services/
│   └── ProductService.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Catatan Implementasi

- State login dan pengambilan data dikelola melalui React Hooks.
- Komponen dipisahkan agar kode lebih terstruktur dan dapat digunakan kembali.
- Pengambilan data API dipisahkan ke dalam service.
- Antarmuka menggunakan Tailwind CSS untuk styling responsif.

## Status

Fitur utama telah diuji secara manual melalui alur login, pengambilan produk, detail produk, responsivitas, dan logout.
