"use client";

import React, { useRef } from 'react';
import Link from 'next/link';

export default function Edit() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  const modules = [
    {
      title: "TPGM-Membuat Model 3D Dengan CAD",
      category: "Teknik Perancangan Gambar Mesin",
      desc: "Pelatihan mandiri pemodelan 3D parametrik benda kerja dan komponen mekanik presisi.",
      badge: "Free",
      img: "/images/galeria/1670330609_Grafis_Teknik-pemesinan.jpg"
    },
    {
      title: "TPGM-Menggambar 2D dengan CAD",
      category: "Teknik Perancangan Gambar Mesin",
      desc: "Pembuatan gambar kerja 2 dimensi, standar proyeksi ortogonal, toleransi, dan dimensi teknis.",
      badge: "Free",
      img: "/images/galeria/1668685057_Grafis_Building-Informasi.jpg"
    },
    {
      title: "Memasang PLTS Type Rooftop",
      category: "Energi Baru Terbarukan (EBT)",
      desc: "Instalasi modul surya, inverter on-grid/off-grid, proteksi petir, dan prosedur K3 listrik.",
      badge: "Free",
      img: "/images/galeria/1668602314_Grafis_Energi-surya-hidro-angin.jpg"
    },
    {
      title: "Safety Procedure in Electrical Work",
      category: "Teknik Instalasi Tenaga Listrik (TITL)",
      desc: "Standard operating procedure (SOP) keselamatan kerja tegangan menengah dan isolasi bahaya listrik.",
      badge: "Free",
      img: "/images/galeria/1668602158_Grafis_Listrik.jpg"
    },
    {
      title: "Pemrograman & Pengoperasian CNC Lathe",
      category: "Teknik Pemesinan & Manufaktur",
      desc: "Dasar G-Code, penentuan titik nol (work offset), tool compensation, dan simulasi pemesinan bubut.",
      badge: "Free",
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Pengelasan MIG GMAW & TIG GTAW",
      category: "Teknik Fabrikasi Logam",
      desc: "Teknik penyambungan logam presisi dengan gas pelindung argon/CO2 dan pengujian visual hasil las.",
      badge: "Free",
      img: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="edit" data-8b-section="edit" style={{ padding: "clamp(36px, 4vw, 56px) var(--space-1)" }}>
      {/* Header */}
      <div className="edit__head" style={{ marginBottom: "24px", position: "relative" }}>
        <h2 className="m-text-2" data-8b-motion="embolden">Modul <b>Terpopuler</b></h2>
        <p className="m-text-6" style={{ maxWidth: "42rem", margin: "6px 0 0 0", opacity: 0.85 }}>
          Pilihan materi kejuruan yang paling banyak dipelajari secara mandiri. Dilengkapi modul ajar, video tutorial, dan lembar kerja praktikum gratis.
        </p>
        <Link
          href="/pelatihan-mandiri"
          className="m-link"
          style={{
            position: "absolute",
            right: 0,
            bottom: "4px",
            fontSize: "0.875rem",
            fontWeight: 600,
            color: "var(--color-3)",
            whiteSpace: "nowrap",
          }}
        >
          Lihat Selengkapnya →
        </Link>
      </div>

      {/* Carousel Wrapper with Floating Navigation */}
      <div style={{ position: "relative" }}>
        {/* Tombol Geser Kiri */}
        <button
          type="button"
          onClick={() => scrollCarousel('left')}
          aria-label="Geser ke kiri"
          style={{
            position: "absolute",
            left: "-26px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#ffffff",
            border: "1px solid color-mix(in srgb, var(--color-3) 20%, transparent)",
            boxShadow: "0 4px 14px rgba(0, 0, 0, 0.12)",
            color: "var(--color-3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--color-3)";
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#ffffff";
            e.currentTarget.style.color = "var(--color-3)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Tombol Geser Kanan */}
        <button
          type="button"
          onClick={() => scrollCarousel('right')}
          aria-label="Geser ke kanan"
          style={{
            position: "absolute",
            right: "-26px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#ffffff",
            border: "1px solid color-mix(in srgb, var(--color-3) 20%, transparent)",
            boxShadow: "0 4px 14px rgba(0, 0, 0, 0.12)",
            color: "var(--color-3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--color-3)";
            e.currentTarget.style.color = "#ffffff";
            e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#ffffff";
            e.currentTarget.style.color = "var(--color-3)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Horizontal Scroll Carousel (Memanjang ke samping) */}
        <div
          ref={carouselRef}
          className="popular-modules-carousel"
          style={{
            display: "flex",
            gap: "20px",
            overflowX: "auto",
            paddingBottom: "16px",
            paddingTop: "4px",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "thin",
          }}
        >
        {modules.map((item, idx) => (
          <div
            key={idx}
            style={{
              flex: "0 0 290px",
              scrollSnapAlign: "start",
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
            {/* Foto Thumbnail */}
            <div
              style={{
                aspectRatio: "16 / 10",
                width: "100%",
                overflow: "hidden",
                background: "var(--color-8)",
                position: "relative",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  top: "10px",
                  left: "10px",
                  background: "#2ecc71",
                  color: "#ffffff",
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

            {/* Konten Kartu */}
            <div style={{ padding: "18px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
              <span
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-3)",
                  marginBottom: "6px",
                }}
              >
                {item.category}
              </span>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  lineHeight: 1.35,
                  color: "var(--color-2)",
                  margin: "0 0 8px 0",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "0.8125rem",
                  lineHeight: 1.5,
                  color: "var(--color-2)",
                  opacity: 0.8,
                  margin: "0 0 16px 0",
                  flex: 1,
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {item.desc}
              </p>
              <div style={{ marginTop: "auto", borderTop: "1px solid #f0f4f8", paddingTop: "12px" }}>
                <a
                  className="m-link"
                  href="https://sintesa.kejuruan.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-3)" }}
                >
                  Pelajari Modul →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

      {/* Scoped Scrollbar Styling */}
      <style jsx>{`
        .popular-modules-carousel::-webkit-scrollbar {
          height: 6px;
        }
        .popular-modules-carousel::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.04);
          border-radius: 999px;
        }
        .popular-modules-carousel::-webkit-scrollbar-thumb {
          background: color-mix(in srgb, var(--color-3) 30%, transparent);
          border-radius: 999px;
        }
        .popular-modules-carousel::-webkit-scrollbar-thumb:hover {
          background: var(--color-3);
        }
      `}</style>
    </section>
  );
}
