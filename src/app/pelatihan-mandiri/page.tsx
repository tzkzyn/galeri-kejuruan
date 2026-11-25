import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pelatihan Mandiri — Galeri Kejuruan BBPPMPV BMTI",
  description:
    "Koleksi lengkap modul pelatihan mandiri kejuruan: TPGM CAD, Mesin CNC, PLTS Rooftop, TITL Listrik, Otomotif, Mekatronika, dan lainnya.",
};

const allModules = [
  {
    id: 1,
    title: "TPGM-Membuat Model 3D Dengan CAD",
    category: "Teknik Perancangan Gambar Mesin (TPGM)",
    badge: "Free",
    img: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    desc: "Pemodelan 3D parametrik benda kerja dan komponen mekanik presisi berstandar gambar manufaktur.",
  },
  {
    id: 2,
    title: "TPGM-Menggambar 2D dengan CAD",
    category: "Teknik Perancangan Gambar Mesin (TPGM)",
    badge: "Free",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    desc: "Pembuatan gambar kerja 2 dimensi, standar proyeksi ortogonal, simbol toleransi, dan dimensi teknis.",
  },
  {
    id: 3,
    title: "Memasang PLTS Type Rooftop",
    category: "Energi Baru Terbarukan (EBT)",
    badge: "Free",
    img: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    desc: "Instalasi modul solar cell, inverter on-grid/off-grid, proteksi petir, dan keselamatan K3 listrik.",
  },
  {
    id: 4,
    title: "Safety Procedure in Electrical Work",
    category: "Teknik Instalasi Tenaga Listrik (TITL)",
    badge: "Free",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
    desc: "SOP keselamatan kerja tegangan menengah, isolasi bahaya listrik, dan APD standar ketenagalistrikan.",
  },
  {
    id: 5,
    title: "Pengelasan MIG GMAW & TIG GTAW",
    category: "Teknik Fabrikasi Logam dan Manufaktur",
    badge: "Free",
    img: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    desc: "Teknik penyambungan logam presisi dengan gas pelindung argon/CO2 dan pengujian visual hasil las.",
  },
  {
    id: 6,
    title: "Pemrograman & Pengoperasian CNC Lathe",
    category: "Teknik Pemesinan & Manufaktur",
    badge: "Free",
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    desc: "Dasar G-Code, penentuan titik nol (work offset), tool compensation, dan simulasi pemesinan bubut.",
  },
  {
    id: 7,
    title: "Diagnostik Engine Management System (EFI)",
    category: "Teknik Kendaraan Ringan Otomotif (TKRO)",
    badge: "Free",
    img: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&w=800&q=80",
    desc: "Pemeriksaan sensor dan aktuator injeksi elektronik menggunakan diagnostic scanner tool.",
  },
  {
    id: 8,
    title: "Membangun Jaringan Komputer & Fiber Optic",
    category: "Teknik Komputer dan Jaringan (TKJ)",
    badge: "Free",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    desc: "Penyambungan kabel serat optik (fusion splicer), konfigurasi routing switch, dan keamanan jaringan.",
  },
  {
    id: 9,
    title: "Pemrograman Otomasi PLC & Pneumatik",
    category: "Mekatronika & Otomasi Industri",
    badge: "Free",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    desc: "Rangkaian kendali elektro-pneumatik industri dan pembuatan program tangga (ladder logic) PLC.",
  },
];

export default function PelatihanMandiriPage() {
  return (
    <>
      <Navbar />

      <main style={{ paddingTop: "72px", minHeight: "100vh", background: "var(--color-1)" }}>
        {/* Banner Section - Bersih, Elegan, Sejuk */}
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
              BBPPMPV BMTI Kemendikbudristek
            </span>
            <h1
              className="m-text-2"
              style={{
                fontSize: "clamp(2rem, 1.6rem + 1.8vw, 2.85rem)",
                marginBottom: "14px",
                color: "var(--color-2)",
              }}
            >
              Katalog <b>Pelatihan Mandiri</b>
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
              Pilih kompetensi keahlian kejuruan yang Anda minati. Akses modul video, bahan bacaan, lembar kerja praktikum, dan materi ajar berstandar industri secara gratis dan terstruktur.
            </p>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
              <Link href="/" className="m-link-2">
                ← Kembali ke Beranda
              </Link>
              <a
                href="https://sintesa.kejuruan.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="m-btn"
                style={{ minHeight: "44px" }}
              >
                <span className="m-btn__label">Login Portal SINTESA →</span>
              </a>
            </div>
          </div>
        </section>

        {/* Grid Catalog Section */}
        <section style={{ padding: "clamp(40px, 5vw, 64px) var(--space-1)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "clamp(20px, 2.5vw, 28px)",
              }}
            >
              {allModules.map((item) => (
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
                  <div style={{ position: "relative", height: "190px", overflow: "hidden", background: "var(--color-8)" }}>
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        background: "var(--color-1)",
                        color: "var(--color-3)",
                        border: "1px solid var(--color-3)",
                        padding: "3px 10px",
                        borderRadius: "999px",
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.badge}
                    </span>
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
                      <a
                        href="https://sintesa.kejuruan.id/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="m-link"
                        style={{ fontSize: "0.8125rem", fontWeight: 600 }}
                      >
                        Akses Modul Lengkap ↗
                      </a>
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

