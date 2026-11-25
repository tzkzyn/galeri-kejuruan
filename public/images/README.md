# 📸 Tempat Penyimpanan Foto (Image Directory)

Semua foto dan aset visual website disimpan di dalam folder:
`frontend/public/images/`

Setiap foto yang Anda letakkan di sini dapat langsung diakses di dalam kode Next.js dengan path `/images/...`.

---

### Struktur Folder Foto:

```text
frontend/public/images/
├── hero/          # Foto utama banner / hero section
├── programs/      # Foto program pelatihan (Upskilling, Reskilling, PKB, Suplemen, dll)
├── gallery/       # Foto karya inovasi, permesinan, CAD, PLTS, Robotika, dan Lab
├── facilities/    # Foto gedung Galeri Kejuruan BMTI, workshop, ruang kelas
└── partners/      # Logo atau dokumentasi mitra industri
```

### Cara Menambahkan atau Mengganti Foto:
1. Simpan file foto Anda (misalnya: `hero-main.jpg` atau `karya-1.jpg`) ke folder yang sesuai di `frontend/public/images/`.
2. Buka komponen yang menampilkan foto tersebut di `frontend/src/components/` (misalnya `Hero.tsx` atau `Week.tsx`).
3. Ganti atribut `src="..."` menjadi:
   ```html
   <img src="/images/hero/nama-foto-anda.jpg" alt="Deskripsi foto" />
   ```
4. Simpan, dan browser akan otomatis mengupdate foto secara real-time!

