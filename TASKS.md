# Daftar Tugas & Pengembangan (TASKS)

Gunakan daftar ini untuk memantau progres yang sudah selesai dan memilih pekerjaan lanjutan di branch `dev`.

## Sudah Selesai
- [x] Setup struktur Next.js 16 (App Router + TypeScript) & metadata SEO (`layout.tsx`)
- [x] Navbar transparan atas dengan logo lengkap `logo-galeri-kejuruan.png` (`64px`) tanpa tombol burger
- [x] *Floating frosted-glass bottom dock* dengan indikator *scroll-spy* berurutan & efek *hover* responsif
- [x] Hero putih bersih dengan ornamen SVG biru, teks biru–kuning sesuai logo GK, & bar melayang *marquee* 7 logo mitra resmi
- [x] Efek latar melebar & menebalkan teks pada section **Manifesto** (`#manifesto`)
- [x] Perapian header vertikal pada **Pelatihan Terbimbing** (`#clubs`)
- [x] Carousel horizontal dengan tombol `<` `>` pada **Galeria** (`#week`) & **Pelatihan Mandiri** (`#edit`)
- [x] Banner penuh **Capaian Galeri Kejuruan** (`#board`) dengan 4 kartu *glassmorphism*
- [x] Penyesuaian tipografi **Pesan Kepala Balai Besar** (`#letter`) & *3D card flip* cepat pada **Alur Pembelajaran** (`#membership`)
- [x] *Infinite marquee* **Testimonial Peserta** (`#journal`), perbaikan *sticky overlap* **FAQ** (`#faq`), & perapian form **Kontak** (`#contact`)
- [x] Integrasi **Lenis Smooth Scroll** + **Scroll Reveal** (`IntersectionObserver` 0.7s ease) bebas Hydration Error & GSAP Warning
- [x] Standarisasi warna *hover* tombol (biru → kuning teks navy; kuning → biru teks putih)
- [x] Pembersihan file/folder tidak terpakai & penggantian nomor kontak ke placeholder aman sebelum push GitHub

## Rencana Pengembangan Selanjutnya (Backlog)
- [ ] Ganti placeholder nomor telepon/WhatsApp di `Contact.tsx` & `Footer.tsx` dengan nomor layanan final sebelum deploy produksi
- [ ] Sambungkan formulir pesan di `Contact.tsx` ke endpoint API / layanan email nyata (saat ini masih simulasi sisi client)
- [ ] Tambahkan fitur pencarian & filter kategori pada halaman `/galeria` dan `/pelatihan-mandiri`
- [ ] Integrasi data dinamis (CMS / API backend) untuk daftar modul pelatihan, statistik capaian, dan testimoni
- [ ] Optimasi gambar lokal menggunakan `next/image` bila diperlukan
- [ ] Uji responsivitas penuh di perangkat mobile nyata (iOS Safari & Android Chrome)

