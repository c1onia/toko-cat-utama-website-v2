# Website Toko Cat Utama

Repository front-end Website Toko Cat Utama. Implementasi saat ini mencakup Homepage, halaman Tentang Kami, halaman Produk, halaman Merek, serta Header dan Footer bersama.

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
├── brand/                 Aset logo dan maskot resmi
├── categories/            Gambar kategori produk Homepage
└── images/about/          Foto resmi halaman Tentang Kami
src/
├── app/                   App Router, metadata, dan global styling
├── components/
│   ├── about/             Section khusus halaman Tentang Kami
│   ├── brands/            Section khusus halaman Merek
│   ├── home/              Section khusus Homepage
│   ├── layout/            Header, pencarian, dan Footer
│   ├── products/          Section khusus halaman Produk
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

## Tentang Kami

Route `/tentang-kami` menjelaskan sejarah perusahaan sejak 1955, visi, misi, nilai perusahaan, tim, pengalaman di dalam toko, kegiatan sosial, serta ringkasan fakta perusahaan. Copy dan metadata gambar halaman disimpan di `src/data/about.ts`, sedangkan section modular berada di `src/components/about/`.

## Produk

Route `/produk` menjelaskan delapan kategori solusi pengecatan untuk rumah, bangunan komersial, proyek, dan industri. Deskripsi dan konfigurasi CTA disimpan di `src/data/products.ts`, sedangkan section modular berada di `src/components/products/`. Gambar kategori memakai aset shared di `public/categories/`.

## Merek

Route `/merek` menampilkan 16 merek cat dan material bangunan dalam satu portofolio terpadu. Urutan merek, metadata logo, dan konfigurasi CTA disimpan di `src/data/brands.ts`, section modular berada di `src/components/brands/`, dan aset logo berada di `public/images/brands/`.

## Data dan Aset

- Data navigasi, kategori, proyek, dan pencarian: `src/data/site.ts`
- Data nama cabang dan alamat kantor pusat: `src/data/branches.ts`
- Logo, maskot, dan gambar hero: `public/brand/`
- Gambar kategori produk: `public/categories/`
- Foto halaman Tentang Kami: `public/images/about/`

Gunakan hanya aset resmi dan pertahankan proporsi serta clear space logo. Jangan mengubah warna, menambahkan shadow/outline, atau meregangkan logo.

## Menambah Halaman

1. Tambahkan route baru di `src/app/<nama-route>/page.tsx`.
2. Pisahkan section halaman ke `src/components/<nama-halaman>/`.
3. Simpan data statis di `src/data/` dan tipe bersama di `src/types/`.
4. Perbarui navigasi di `src/data/site.ts` bila diperlukan.
5. Jalankan seluruh pemeriksaan kualitas sebelum commit.

Route navigasi selain `/`, `/tentang-kami`, `/produk`, dan `/merek` sudah dicantumkan sesuai SRS, tetapi belum diimplementasikan.

## Deployment

Project dapat dideploy pada platform yang mendukung Next.js. Jalankan `pnpm build` sebagai build command dan `pnpm start` sebagai start command untuk hosting berbasis Node.js. Tidak ada environment variable yang dibutuhkan pada implementasi saat ini.

## Standar Pengembangan

- Satu tugas hanya mengubah satu halaman atau satu komponen bersama.
- Ikuti urutan acuan: SRS, UID, GSM, README, aset resmi, lalu kode existing.
- `page.tsx` harus singkat dan hanya menyusun section.
- Pisahkan UI, data, tipe, utility, dan logic.
- Jangan menambahkan konten, fitur, library, animasi, atau keputusan visual tanpa persetujuan.
