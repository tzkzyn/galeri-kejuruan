# Panduan Desain (Design System) — Galeri Kejuruan

Dokumen ini menjadi acuan warna, tipografi, pola komponen, dan interaksi agar tampilan web tetap konsisten saat dikembangkan bersama tim.

## 1. Palet Warna Resmi
Token warna utama didefinisikan di `src/app/globals.css`:

| Token / Penggunaan | Kode Hex | Keterangan |
| :--- | :--- | :--- |
| `--color-1` (Background) | `#f7fafc` | Latar belakang utama halaman yang bersih dan terang |
| `--color-2` (Navy Gelap) | `#0f1e36` | Warna teks utama, latar Manifesto, & teks di atas tombol kuning |
| `--color-3` (Biru Vokasi) | `#0056b3` | Warna aksen utama BMTI, heading section, & tombol biru |
| Biru Logo GK | `#0066cc` | Judul utama Hero (*Selamat Datang*) & garis ornamen Hero |
| Kuning Emas Logo GK | `#ffd200` / `#e5a400` | Subjudul Hero, tombol `LOGIN`, & warna *hover* tombol biru |
| `--color-4` (Biru Muda) | `#c9e2f8` | Permukaan kartu terang (`.m-surface`) & latar Footer |
| `--color-5` (Biru Pucat) | `#e8f2fc` | Badge, panel lembut, dan sorotan halus |
| Gradasi Banner Capaian | `#f27b13` → `#fbad1e` | Latar banner penuh khusus statistik **Capaian Galeri Kejuruan** |

## 2. Tipografi
- **Font Utama**: `Plus Jakarta Sans` & `Inter` (dimuat via Google Fonts di `src/app/layout.tsx`).
- **Skala Tipografi**:
  - `.m-text-2` — Heading section besar (warna `var(--color-3)`).
  - `.m-text-3` — Label *uppercase* kecil dengan *letter-spacing* lebar (kicker/sub-label).
  - `.m-text-4` — Judul kartu dan subheading.
  - `.m-text-6` — Deskripsi pengantar section (`max-width: 42rem`, `opacity: 0.85`).

## 3. Aturan Konsistensi Komponen
- **Header Section**: menggunakan tata letak **vertikal rata kiri** (judul di atas, deskripsi tepat di bawahnya) seperti pada **Pelatihan Terbimbing**, **Galeria Kompetensi Keahlian**, dan **Pelatihan Mandiri**.
- **Tombol Utama (`.m-btn` & `.gk-hero-btn-blue`)**:
  - Default: latar **Biru** (`#0056b3` / `#0066cc`) dengan teks **Putih (`#ffffff`)**.
  - Saat *hover*: berubah penuh menjadi **Kuning Emas (`#ffd200`)** dan teks otomatis berubah menjadi **Navy Gelap (`#0f1e36`)**.
- **Tombol `LOGIN` (`.gk-login-btn`)**:
  - Default: latar **Kuning Emas (`#ffd200`)** dengan teks **Navy Gelap (`#0f1e36`)**.
  - Saat *hover*: berubah penuh menjadi **Biru Vokasi (`#0056b3`)** dengan teks **Putih (`#ffffff`)**.
- **Floating Bottom Dock (`Navbar.tsx`)**:
  - Gaya *frosted glass* terang (`rgba(226, 234, 243, 0.68)` + `backdrop-filter: blur(18px)`), tanpa logo.
  - Item aktif / *hover* disorot kapsul putih (`rgba(255, 255, 255, 0.88)`).
  - Tombol `Login` di ujung kanan memakai kapsul navy gelap (`#0f1e36`, teks putih).
- **Bar Logo Mitra (`Hero.tsx`)**:
  - Satu kartu putih melayang (`border-radius: 20px`) tepat di perbatasan bawah Hero dengan *infinite marquee* tanpa kotak kecil per logo.

## 4. Prinsip Animasi & Aksesibilitas
- Transisi *Scroll Reveal* menggunakan `0.7s ease` dengan jarak gerak `40px` (`fade-up`, `fade-left`, `fade-right`) dan *stagger* `100ms` per kartu.
- Seluruh animasi menghormati preferensi sistem `prefers-reduced-motion: reduce`.

