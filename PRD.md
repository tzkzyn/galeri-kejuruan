# Product Requirements Document (PRD) — Galeri Kejuruan

## 1. Ringkasan Produk
**Galeri Kejuruan** adalah portal web pusat sumber belajar vokasi yang diinisiasi oleh **BBPPMPV BMTI** (*Balai Besar Pengembangan Penjaminan Mutu Pendidikan Vokasi Bidang Mesin dan Teknik Industri*) dengan semangat *"Perwujudan Gagasan lewat Materi Kejuruan"*.

## 2. Target Pengguna
- **Guru Kejuruan (SMK)**: mengakses modul pelatihan mandiri, mendaftar pelatihan terbimbing, dan meningkatkan kompetensi berbasis industri (DUDI).
- **Siswa SMK & Umum**: mempelajari materi kompetensi keahlian dan simulasi pembelajaran virtual secara terbuka.
- **Institusi / Mitra Industri (DUDI)**: mengetahui capaian, jejaring kemitraan, serta mengajukan kunjungan atau kerja sama.

## 3. Fitur Utama per Halaman

### A. Halaman Utama (`/`)
1. **Navigasi Dual-Mode**:
   - Navbar atas transparan di Hero dengan logo lengkap Galeri Kejuruan, 6 tautan menu berurutan, dan tombol Login ke portal SINTESA.
   - *Floating bottom dock* bergaya *frosted glass* yang muncul otomatis saat halaman di-scroll dengan indikator aktif (*scroll-spy*).
2. **Hero & Bar Mitra Industri**:
   - Sambutan resmi berbahasa Indonesia dengan tombol aksi cepat menuju materi.
   - Bar putih melayang berisi *marquee* 7 logo mitra industri resmi (Schneider Electric, digiroom by AUTO 2000, OSSMAP, Kampuh Welding Cikarang, PT Pindad, PT Entec Indonesia, Hypernet).
3. **Manifesto Galeri Kejuruan**:
   - Penjelasan visi dan peran Galeri Kejuruan dengan efek sorotan baca interaktif.
4. **Pelatihan Terbimbing**:
   - 4 program utama (PKB, Upskilling & Reskilling DUDI, Suplemen Kompetensi Keahlian DIKSI, Ruang Simulasi Virtual & Metaverse).
5. **Galeria Kompetensi Keahlian (Preview Carousel)**:
   - Carousel horizontal kartu bidang keahlian dengan navigasi panah `<` `>` dan tautan **Lihat Selengkapnya** ke `/galeria`.
6. **Pelatihan Mandiri (Preview Carousel)**:
   - Carousel horizontal modul pelatihan mandiri dengan tautan **Lihat Selengkapnya** ke `/pelatihan-mandiri`.
7. **Capaian Galeri Kejuruan**:
   - Banner statistik penuh menampilkan angka pengunjung, sertifikat terbit, peserta mandiri, dan mitra industri.
8. **Pesan Kepala Balai Besar & Alur Pembelajaran**:
   - Kutipan resmi instansi diikuti 3 langkah alur pembelajaran (*Registrasi Akun* → *Pilih Pembelajaran* → *Asesmen & Sertifikat*).
9. **Testimonial Peserta, FAQ & Kontak**:
   - *Marquee* testimoni peserta SMK dari seluruh Indonesia, daftar FAQ interaktif, informasi kantor BBPPMPV BMTI, dan formulir pesan.

### B. Halaman Galeria (`/galeria`)
- Menampilkan katalog lengkap kompetensi keahlian beserta deskripsi dan jumlah modul.

### C. Halaman Pelatihan Mandiri (`/pelatihan-mandiri`)
- Menampilkan daftar lengkap pelatihan mandiri yang dapat diakses secara fleksibel.

## 4. Kriteria Kualitas
- Build produksi (`npm run build`) bebas error TypeScript maupun Next.js.
- **0 Hydration Error** dan **0 GSAP Warning** di console browser.
- Responsif di desktop, tablet, dan mobile serta mendukung `prefers-reduced-motion`.

