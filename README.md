# Website Toko Cat Utama

Repository front-end Website Toko Cat Utama. Implementasi saat ini mencakup Homepage, halaman Tentang Kami, halaman Produk, halaman Kalkulator Cat, halaman Merek, halaman Loyalty Member, halaman Lokasi Toko, halaman Kontak Kami, halaman Galeri Proyek, serta Header dan Footer bersama.

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
└── images/
    ├── about/             Foto resmi halaman Tentang Kami
    ├── brands/            Logo resmi halaman Merek
    ├── branches/          Foto cabang halaman Lokasi Toko
    ├── loyalty/           Aset maskot halaman Loyalty Member
    └── projects/          Foto proyek halaman Galeri Proyek
src/
├── app/                   App Router, metadata, dan global styling
├── components/
│   ├── about/             Section khusus halaman Tentang Kami
│   ├── brands/            Section khusus halaman Merek
│   ├── contact/           Section khusus halaman Kontak Kami
│   ├── home/              Section khusus Homepage
│   ├── layout/            Header, pencarian, dan Footer
│   ├── loyalty/           Section khusus halaman Loyalty Member
│   ├── locations/         Section dan card khusus halaman Lokasi Toko
│   ├── paint-calculator/  Komponen modular halaman Kalkulator Cat
│   ├── products/          Section khusus halaman Produk
│   ├── projects/          Section dan card khusus halaman Galeri Proyek
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

Header dan Footer merupakan komponen layout bersama. Header memakai navigasi top-level ringkas dengan dropdown satu tingkat untuk Tentang Kami, Produk, Solusi, serta Cabang & Kontak; pada mobile dropdown tersebut berubah menjadi accordion di dalam hamburger menu. Search pada Header mencari kategori produk, lokasi cabang, dan halaman Merek dari data yang tersedia.

## Tentang Kami

Route `/tentang-kami` menjelaskan sejarah perusahaan sejak 1955, visi, misi, nilai perusahaan, tim, pengalaman di dalam toko, kegiatan sosial, serta ringkasan fakta perusahaan. Copy dan metadata gambar halaman disimpan di `src/data/about.ts`, sedangkan section modular berada di `src/components/about/`.

## Produk

Route `/produk` menjelaskan delapan kategori solusi pengecatan untuk rumah, bangunan komersial, proyek, dan industri. Deskripsi dan konfigurasi CTA disimpan di `src/data/products.ts`, sedangkan section modular berada di `src/components/products/`. Gambar kategori memakai aset shared di `public/categories/`.

## Kalkulator Cat

Route `/kalkulator-cat` menyediakan Kalkulator Cat Tembok v1 untuk menghitung estimasi kebutuhan cat tembok pada satu bidang dinding atau satu ruangan. Kalkulator ini hanya berlaku untuk cat tembok; perhitungan produk lain seperti waterproofing, floor coating, protective coating, marine paint, atau roof paint belum termasuk dalam versi ini.

Konfigurasi asumsi berada di `src/data/paintCalculator.ts`, sedangkan fungsi kalkulasi berada di `src/lib/paintCalculator.ts`. Komponen UI modular berada di `src/components/paint-calculator/` dan styling halaman berada di `src/styles/paint-calculator.css`.

Asumsi awal:

- Semua estimasi memakai asumsi tetap 2 lapis pengecatan dan tidak menyediakan selector jumlah lapisan.
- Premium: 1 galon 2.5 L menutup ±15 m² untuk 2 lapis, 1 pail 20 L = 8 galon.
- Menengah: 1 galon 5 kg menutup ±12–15 m² untuk 2 lapis; kalkulasi memakai asumsi konservatif 12 m² per galon, 1 pail 25 kg = 5 galon.
- Formula kebutuhan galon: luas yang dicat ÷ daya sebar per galon untuk 2 lapis.
- Hasil selalu dibulatkan ke atas untuk rekomendasi pembelian.
- Bukaan pintu dan jendela hanya dikurangi jika user menambahkannya.
- Luas ruangan dihitung dari keliling ruangan × tinggi ruangan, tanpa plafon dan lantai.

Aturan konversi kemasan:

- Premium: 8 galon = 1 pail. Contoh 9 galon menjadi 1 pail + 1 galon.
- Menengah: 5 galon = 1 pail. Contoh 6 galon menjadi 1 pail + 1 galon.

## Merek

Route `/merek` menampilkan 16 merek cat dan material bangunan dalam satu portofolio terpadu. Daftar merek bersama untuk halaman Merek dan dropdown Produk disimpan di `src/data/brand-list.ts`, konfigurasi konten halaman Merek disimpan di `src/data/brands.ts`, section modular berada di `src/components/brands/`, dan aset logo berada di `public/images/brands/`.

## Loyalty Member

Route `/loyalty-member` menjelaskan program Loyalty Member Utama, cara registrasi, konversi poin, pilihan hadiah, periode program, FAQ, dan tautan unduh Utama Loyalty App. Semua informasi program yang dapat berubah, termasuk tanggal periode, nilai poin, daftar hadiah, FAQ, URL aplikasi, dan CTA, disimpan di `src/data/loyalty.ts`. Section modular berada di `src/components/loyalty/`, styling halaman berada di `src/styles/loyalty.css`, dan aset maskot berada di `public/images/loyalty/`.

## Lokasi Toko

Route `/lokasi-toko` membantu pelanggan mencari cabang berdasarkan nama cabang, kota, atau alamat. Data cabang lengkap disimpan di `src/data/branches.ts`, tipe cabang di `src/types/branch.ts`, dan jam operasional bersama di `src/data/opening-hours.ts`. Section modular berada di `src/components/locations/`, styling halaman berada di `src/styles/locations.css`, dan foto cabang berada di `public/images/branches/`.

Untuk menambah cabang baru:

1. Tambahkan data cabang ke `src/data/branches.ts` sesuai tipe `Branch`.
2. Simpan foto cabang di `public/images/branches/` dengan nama file sesuai slug, misalnya `setiabudi.jpg`.
3. Isi field `image` dengan path publik, misalnya `/images/branches/setiabudi.jpg`.
4. Jika Google Maps, WhatsApp, atau mesin tinting tidak tersedia, kosongkan field terkait agar tombol atau section otomatis disembunyikan.

Untuk mengganti foto cabang, replace file di `public/images/branches/` tanpa mengubah proporsi visual utama. Foto cabang pada card memakai rasio 16:9 dan `object-fit: cover`.

## Kontak Kami

Route `/kontak` menampilkan hero kontak, kartu informasi Kantor Pusat, WhatsApp Customer Service, Jam Operasional, Google Map kantor pusat, dan form kontak UI-only. Data kontak halaman disimpan di `src/data/contact.ts` dan menggunakan ulang `src/data/opening-hours.ts` untuk jam operasional. Section modular berada di `src/components/contact/`, sedangkan styling halaman berada di `src/styles/contact.css`.

## Galeri Proyek

Route `/galeri-proyek` menampilkan portofolio proyek terdokumentasi dan daftar pengalaman proyek lainnya. Data proyek disimpan di `src/data/projects.ts`, section modular berada di `src/components/projects/`, styling halaman berada di `src/styles/projects.css`, dan foto proyek berada di `public/images/projects/`.

## Data dan Aset

- Data navigasi, kategori Homepage, dan pencarian: `src/data/site.ts`
- Daftar merek bersama untuk dropdown Produk dan halaman Merek: `src/data/brand-list.ts`
- Data konfigurasi Kalkulator Cat: `src/data/paintCalculator.ts`
- Data cabang lengkap dan alamat kantor pusat: `src/data/branches.ts`
- Data jam operasional cabang: `src/data/opening-hours.ts`
- Data halaman Kontak Kami: `src/data/contact.ts`
- Data program Loyalty Member: `src/data/loyalty.ts`
- Data halaman Galeri Proyek: `src/data/projects.ts`
- Logo, maskot, dan gambar hero: `public/brand/`
- Gambar kategori produk: `public/categories/`
- Foto halaman Tentang Kami: `public/images/about/`
- Logo halaman Merek: `public/images/brands/`
- Foto cabang halaman Lokasi Toko: `public/images/branches/`
- Maskot halaman Loyalty Member: `public/images/loyalty/`
- Foto halaman Galeri Proyek: `public/images/projects/`

Gunakan hanya aset resmi dan pertahankan proporsi serta clear space logo. Jangan mengubah warna, menambahkan shadow/outline, atau meregangkan logo.

## Menambah Halaman

1. Tambahkan route baru di `src/app/<nama-route>/page.tsx`.
2. Pisahkan section halaman ke `src/components/<nama-halaman>/`.
3. Simpan data statis di `src/data/` dan tipe bersama di `src/types/`.
4. Perbarui navigasi di `src/data/site.ts` bila diperlukan.
5. Jalankan seluruh pemeriksaan kualitas sebelum commit.

Route navigasi selain `/`, `/tentang-kami`, `/produk`, `/kalkulator-cat`, `/merek`, `/loyalty-member`, `/lokasi-toko`, `/kontak`, dan `/galeri-proyek` sudah dicantumkan sesuai SRS, tetapi belum diimplementasikan.

## Deployment

Project dapat dideploy pada platform yang mendukung Next.js. Jalankan `pnpm build` sebagai build command dan `pnpm start` sebagai start command untuk hosting berbasis Node.js. Tidak ada environment variable yang dibutuhkan pada implementasi saat ini.

## Standar Pengembangan

- Satu tugas hanya mengubah satu halaman atau satu komponen bersama.
- Ikuti urutan acuan: SRS, UID, GSM, README, aset resmi, lalu kode existing.
- `page.tsx` harus singkat dan hanya menyusun section.
- Pisahkan UI, data, tipe, utility, dan logic.
- Jangan menambahkan konten, fitur, library, animasi, atau keputusan visual tanpa persetujuan.
