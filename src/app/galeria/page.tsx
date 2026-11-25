import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Galeria Kompetensi Keahlian — Galeri Kejuruan BBPPMPV BMTI",
  description:
    "Pilih kompetensi keahlian, kemudian simak materi pembelajaran yang disampaikan secara singkat. Galeria merupakan kumpulan materi kejuruan dalam bentuk tulisan, video maupun animasi.",
};

const galeriaItems = [
  {
    id: 1,
    title: "Teknik Fabrikasi Logam dan Manufaktur",
    category: "Teknik Pemesinan",
    img: "/images/galeria/1670330609_Grafis_Teknik-pemesinan.jpg",
    desc: "Materi kejuruan permesinan presisi, mesin perkakas bubut & frais, CNC, serta fabrikasi logam industri.",
  },
  {
    id: 2,
    title: "Teknik Kendaraan Ringan Otomotif",
    category: "Teknik Otomotif (TKRO)",
    img: "/images/galeria/1659337525_Grafis_TKRO.jpg",
    desc: "Perawatan berkala mesin mobil, sistem kemudi, pengereman, transmisi, kelistrikan bodi, dan EFI.",
  },
  {
    id: 3,
    title: "Teknik dan Bisnis Sepeda Motor",
    category: "Teknik Sepeda Motor (TBSM)",
    img: "/images/galeria/1668839551_Grafis_TBSM-600x433.jpg",
    desc: "Pemeliharaan mesin motor 2T & 4T, sistem injeksi PGM-FI, CVT matic, dan manajemen bengkel motor.",
  },
  {
    id: 4,
    title: "Geomatika & Survei Pemetaan",
    category: "Teknik Geomatika",
    img: "/images/galeria/1668601850_Grafis_Geomatika.jpg",
    desc: "Pengukuran terestrial theodolite & waterpass, sistem informasi geografis (SIG), pemetaan drone & GPS.",
  },
  {
    id: 5,
    title: "Bisnis Konstruksi & Properti",
    category: "Teknik Konstruksi",
    img: "/images/galeria/1668602039_Grafis_Bisnis-Kontruksi-Prop.jpg",
    desc: "Perencanaan dan pengelolaan proyek konstruksi bangunan gedung, estimasi biaya RAB, dan keselamatan K3.",
  },
  {
    id: 6,
    title: "Teknik Instalasi Tenaga Listrik",
    category: "Ketenagalistrikan (TITL)",
    img: "/images/galeria/1668602158_Grafis_Listrik.jpg",
    desc: "Pemasangan instalasi penerangan & daya bangunan gedung, panel distribusi tenaga, dan kendali motor listrik.",
  },
  {
    id: 7,
    title: "Energi Terbarukan - Biomassa",
    category: "Energi Baru Terbarukan (EBT)",
    img: "/images/galeria/1668602251_Grafis_BIOMASSA.jpg",
    desc: "Pemanfaatan limbah organik menjadi sumber energi ramah lingkungan, biogas, dan briket biomassa.",
  },
  {
    id: 8,
    title: "Energi Surya, Hidro & Angin",
    category: "Energi Baru Terbarukan (EBT)",
    img: "/images/galeria/1668602314_Grafis_Energi-surya-hidro-angin.jpg",
    desc: "Instalasi PLTS Rooftop surya fotovoltaik, turbin mikrohidro, dan pembangkit listrik tenaga bayu (PLTB).",
  },
  {
    id: 9,
    title: "Bahasa Inggris Kejuruan",
    category: "English for Vocational",
    img: "/images/galeria/1668602368_Grafis_b-ingris.jpg",
    desc: "Penguasaan komunikasi bahasa Inggris istilah teknik (technical vocabulary) untuk persiapan kerja global.",
  },
  {
    id: 10,
    title: "Kewirausahaan Kreatif Vokasi",
    category: "Produk Kreatif & Kewirausahaan (PKK)",
    img: "/images/galeria/1668602526_Grafis_Kewirausahaan-kreatif.jpg",
    desc: "Pembuatan prototipe produk, analisis pasar, legalitas usaha, dan pemasaran digital teaching factory SMK.",
  },
  {
    id: 11,
    title: "Building Information Modeling (BIM)",
    category: "Desain Pemodelan Bangunan (DPIB)",
    img: "/images/galeria/1668685057_Grafis_Building-Informasi.jpg",
    desc: "Perancangan arsitektur terintegrasi 3D parametrik dengan pemodelan BIM Revit dan koordinasi konstruksi.",
  },
  {
    id: 12,
    title: "Teknik Komputer & Jaringan",
    category: "Teknologi Informasi & Komunikasi (TKJ)",
    img: "/images/galeria/1668686397_Grafis_-Komputer-jaringan.jpg",
    desc: "Instalasi jaringan LAN/WAN, konfigurasi server Linux/Mikrotik, fiber optic, dan keamanan data siber.",
  },
  {
    id: 13,
    title: "Rekayasa Perangkat Lunak (RPL)",
    category: "Pengembangan Software & Aplikasi",
    img: "/images/galeria/1668883708_Grafis_RPL-600x433.jpg",
    desc: "Pemrograman web fullstack, mobile app, basis data SQL/NoSQL, dan arsitektur sistem informasi.",
  },
  {
    id: 14,
    title: "Desain Komunikasi Visual (Multimedia)",
    category: "Desain Grafis & Multimedia",
    img: "/images/galeria/1668913772_Grafis_Multi-media-600x433.jpg",
    desc: "Produksi grafis digital, fotografi komersial, motion graphics, video editing, dan desain UI/UX interaktif.",
  },
];

export default function GaleriaPage() {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: "72px", minHeight: "100vh", background: "var(--color-1)" }}>
        {/* Banner Galeria - Bersih, Sejuk, Selaras dengan Website */}
        <section
          style={{
            background: "var(--color-1)",
            borderBottom: "1px solid color-mix(in srgb, var(--color-3) 14%, transparent)",
            padding: "clamp(48px, 6vw, 72px) var(--space-1) clamp(36px, 4vw, 56px)",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <span
              style={{
                display: "inline-block",
                padding: "4px 14px",
                borderRadius: "999px",
                background: "var(--color-5)",
                color: "var(--color-3)",
                fontSize: "0.75rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 700,
                marginBottom: "16px",
              }}
            >
              Pusat Pengetahuan Vokasi
            </span>
            <h1
              className="m-text-2"
              style={{
                fontSize: "clamp(2rem, 1.6rem + 1.8vw, 2.85rem)",
                marginBottom: "14px",
                color: "var(--color-2)",
              }}
            >
              Galeria <b>Kompetensi Keahlian</b>
            </h1>
            <p
              style={{
                fontSize: "clamp(1rem, 0.95rem + 0.2vw, 1.125rem)",
                lineHeight: 1.65,
                color: "var(--color-2)",
                opacity: 0.85,
                maxWidth: "680px",
                margin: "0 auto 28px",
              }}
            >
              Pilih kompetensi keahlian, kemudian simak materi pembelajaran yang disampaikan secara ringkas dan aplikatif. Galeria merupakan kumpulan suplemen ajar dalam bentuk visual, video, dan modul praktikum.
            </p>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/" className="m-link-2">
                ← Kembali ke Beranda
              </Link>
              <Link
                href="/pelatihan-mandiri"
                className="m-btn"
                style={{ minHeight: "44px" }}
              >
                <span className="m-btn__label">Lihat Katalog Pelatihan Mandiri →</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Grid Gambar Galeria */}
        <section style={{ padding: "clamp(40px, 5vw, 64px) var(--space-1)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "clamp(20px, 2.5vw, 28px)",
              }}
            >
              {galeriaItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: "#ffffff",
                    borderRadius: "var(--radius-4, 18px)",
                    overflow: "hidden",
                    border: "1px solid color-mix(in srgb, var(--color-3) 12%, transparent)",
                    boxShadow: "0 4px 16px rgba(15, 30, 54, 0.04)",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                >
                  <div style={{ position: "relative", width: "100%", aspectRatio: "600 / 433", overflow: "hidden", background: "var(--color-8)" }}>
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "var(--color-3)",
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        marginBottom: "6px",
                      }}
                    >
                      {item.category}
                    </span>
                    <h2
                      style={{
                        fontFamily: "var(--font-1)",
                        fontSize: "1.15rem",
                        lineHeight: 1.35,
                        color: "var(--color-2)",
                        fontWeight: 700,
                        marginBottom: "8px",
                      }}
                    >
                      {item.title}
                    </h2>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        lineHeight: 1.55,
                        color: "var(--color-2)",
                        opacity: 0.8,
                        marginBottom: "18px",
                        flex: 1,
                      }}
                    >
                      {item.desc}
                    </p>
                    <div style={{ marginTop: "auto", borderTop: "1px solid #f0f4f8", paddingTop: "12px" }}>
                      <Link
                        href={`https://galeri.kejuruan.id/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m-link"
                        style={{ fontSize: "0.8125rem", fontWeight: 600 }}
                      >
                        Buka Materi Kejuruan ↗
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

