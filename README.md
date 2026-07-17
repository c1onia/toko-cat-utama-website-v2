# Website Toko Cat Utama

Repository front-end Website Toko Cat Utama. Implementasi saat ini mencakup Homepage beserta Header dan Footer yang digunakan oleh halaman tersebut.

## Teknologi

- Next.js 16 dengan App Router
- React 19
- TypeScript
- CSS
- Lucide React untuk ikon outline
- pnpm

## Persyaratan

- Node.js 20.9 atau lebih baru
- pnpm 11

## Menjalankan Project

```bash
pnpm install
pnpm dev
```

Buka `http://localhost:3000`.

## Pemeriksaan Kualitas

```bash
pnpm lint
pnpm typecheck
pnpm build
```

Untuk menjalankan hasil production build:

```bash
pnpm start
```

## Struktur Folder

```text
public/
└── brand/                 Aset logo dan maskot resmi
src/
├── app/                   App Router, metadata, dan global styling
├── components/
│   ├── home/              Section khusus Homepage
│   ├── layout/            Header, pencarian, dan Footer
│   └── ui/                Komponen UI reusable
├── data/                  Data statis situs dan cabang
├── styles/                Styling khusus halaman
└── types/                 Tipe bersama
```

`src/app/page.tsx` hanya menyusun section yang diimpor. Data kategori, proyek, navigasi, kontak, dan cabang tidak ditulis langsung di komponen.

## Homepage

Homepage terdiri dari:

1. Hero
2. Mengapa Pelanggan Memilih Kami
3. Kategori Produk
4. Lokasi Toko
5. Hubungi Kami

Header dan Footer merupakan komponen layout bersama. Search pada Header mencari kategori produk, lokasi cabang, dan halaman Merek dari data yang tersedia.

## Data dan Aset

- Data navigasi, kategori, proyek, dan pencarian: `src/data/site.ts`
- Data nama cabang dan alamat kantor pusat: `src/data/branches.ts`
- Logo, maskot, dan gambar hero: `public/brand/`
- Gambar kategori produk: `public/categories/`

Gunakan hanya aset resmi dan pertahankan proporsi serta clear space logo. Jangan mengubah warna, menambahkan shadow/outline, atau meregangkan logo.

## Menambah Halaman

1. Tambahkan route baru di `src/app/<nama-route>/page.tsx`.
2. Pisahkan section halaman ke `src/components/<nama-halaman>/`.
3. Simpan data statis di `src/data/` dan tipe bersama di `src/types/`.
4. Perbarui navigasi di `src/data/site.ts` bila diperlukan.
5. Jalankan seluruh pemeriksaan kualitas sebelum commit.

Route navigasi selain `/` sudah dicantumkan sesuai SRS, tetapi halamannya belum termasuk dalam ruang lingkup implementasi Homepage ini.

## Deployment

Project dapat dideploy pada platform yang mendukung Next.js. Jalankan `pnpm build` sebagai build command dan `pnpm start` sebagai start command untuk hosting berbasis Node.js. Tidak ada environment variable yang dibutuhkan pada implementasi saat ini.

## Standar Pengembangan

- Satu tugas hanya mengubah satu halaman atau satu komponen bersama.
- Ikuti urutan acuan: SRS, UID, GSM, README, aset resmi, lalu kode existing.
- `page.tsx` harus singkat dan hanya menyusun section.
- Pisahkan UI, data, tipe, utility, dan logic.
- Jangan menambahkan konten, fitur, library, animasi, atau keputusan visual tanpa persetujuan.
