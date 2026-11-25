# Galeri Kejuruan — BBPPMPV BMTI

Portal web resmi **Galeri Kejuruan BBPPMPV BMTI** (*"Perwujudan Gagasan lewat Materi Kejuruan"*) yang menyajikan pusat sumber belajar vokasi, galeria kompetensi keahlian, pelatihan mandiri & terbimbing, serta informasi kemitraan DUDI.

## Tech Stack
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Library UI**: React 19, TypeScript 5
- **Ikon & Animasi**: `lucide-react`, `motion` (`motion/react`), GSAP + ScrollTrigger + SplitText (CDN), Lenis Smooth Scroll
- **Styling**: Pure CSS (`src/app/globals.css`) dengan CSS Custom Properties (tanpa Tailwind)

## Cara Menjalankan di Lokal

Pastikan **Node.js 20+** dan **npm** sudah terpasang.

```bash
# 1. Masuk ke folder proyek
cd frontend

# 2. Install dependensi
npm install

# 3. Jalankan mode development
npm run dev
```

Buka browser di `http://localhost:3000`.

### Perintah Penting Lainnya
```bash
# Cek build produksi & TypeScript
npm run build

# Jalankan hasil build produksi
npm run start

# Cek linting
npm run lint
```

## Struktur Proyek Singkat
```text
frontend/
├── public/
│   ├── images/
│   │   ├── galeria/      # Thumbnail kompetensi keahlian
│   │   ├── hero/         # Cadangan aset hero
│   │   ├── logo/         # Logo resmi Galeri Kejuruan & GK
│   │   └── mitra/        # 7 logo resmi mitra industri (DUDI)
│   └── init-scripts.js   # Inisialisasi Lenis, GSAP ScrollTrigger & Scroll Reveal
├── src/
│   ├── app/
│   │   ├── layout.tsx               # Root layout, font & metadata
│   │   ├── globals.css              # Token warna, tipografi, layout & animasi CSS
│   │   ├── page.tsx                 # Halaman utama (Beranda)
│   │   ├── galeria/page.tsx         # Halaman penuh Galeria Kompetensi Keahlian
│   │   └── pelatihan-mandiri/page.tsx # Halaman penuh Pelatihan Mandiri
│   └── components/                  # Komponen tiap section halaman
├── ARCHITECTURE.md
├── DESIGN.md
├── PRD.md
└── TASKS.md
```

## Alur Kerja Git (Kolaborasi Tim)
Repositori menggunakan 2 branch utama:
- **`main`**: versi stabil siap deploy. Jangan commit langsung ke `main`.
- **`dev`**: branch utama untuk pengembangan harian.

```bash
# Ambil update terbaru dari dev sebelum mulai bekerja
git checkout dev
git pull origin dev

# Setelah selesai mengedit & memastikan `npm run build` sukses
git add .
git commit -m "feat: deskripsi singkat perubahan"
git push origin dev
```

## Dokumentasi Lengkap
- [`ARCHITECTURE.md`](./ARCHITECTURE.md) — Arsitektur komponen, routing, dan sistem animasi
- [`DESIGN.md`](./DESIGN.md) — Sistem desain, warna, tipografi, dan aturan hover
- [`PRD.md`](./PRD.md) — Spesifikasi produk dan fitur tiap halaman
- [`TASKS.md`](./TASKS.md) — Daftar pekerjaan selesai & rencana lanjutan
