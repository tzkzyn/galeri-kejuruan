"use client";

import React, { useRef } from 'react';
import Link from 'next/link';

export default function Week() {
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

  const categories = [
    {
      title: "Teknik Fabrikasi Logam & Manufaktur",
      category: "Teknik Pemesinan",
      desc: "Pemesinan presisi, mesin bubut & frais CNC, fabrikasi logam industri, dan perancangan mekanik.",
      img: "/images/galeria/1670330609_Grafis_Teknik-pemesinan.jpg",
      modules: "12 Modul"
    },
    {
      title: "Teknik Kendaraan Ringan Otomotif (TKRO)",
      category: "Teknik Otomotif",
      desc: "Pemeliharaan mesin injeksi EFI, sistem kelistrikan bodi kendaraan, dan diagnostik scanner modern.",
      img: "/images/galeria/1659337525_Grafis_TKRO.jpg",
      modules: "10 Modul"
    },
    {
      title: "Teknik & Bisnis Sepeda Motor (TBSM)",
      category: "Otomotif Roda Dua",
      desc: "Perawatan berkala mesin motor 4-tak, transmisi otomatis CVT, dan sistem injeksi PGM-FI.",
      img: "/images/galeria/1668839551_Grafis_TBSM-600x433.jpg",
      modules: "8 Modul"
    },
    {
      title: "Teknik Instalasi Tenaga Listrik (TITL)",
      category: "Ketenagalistrikan",
      desc: "Instalasi penerangan dan tenaga bangunan, panel kendali motor listrik, serta SOP keselamatan K3.",
      img: "/images/galeria/1668602158_Grafis_Listrik.jpg",
      modules: "14 Modul"
    },
    {
      title: "Energi Surya, Hidro & Angin (PLTS)",
      category: "Energi Terbarukan (EBT)",
      desc: "Instalasi PLTS Rooftop on-grid/off-grid, turbin mikrohidro, dan generator listrik tenaga bayu.",
      img: "/images/galeria/1668602314_Grafis_Energi-surya-hidro-angin.jpg",
      modules: "9 Modul"
    },
    {
      title: "Teknik Komputer & Jaringan (TKJ)",
      category: "Teknologi Informasi & Komunikasi",
      desc: "Konfigurasi routing industri, fiber optic, administrasi server Linux, dan keamanan jaringan.",
      img: "/images/galeria/1668686397_Grafis_-Komputer-jaringan.jpg",
      modules: "15 Modul"
    }
  ];

  return (
    <section id="week" data-8b-section="week" style={{ padding: "clamp(36px, 4vw, 56px) var(--space-1)" }}>
      {/* Header */}
      <div className="week__head" style={{ marginBottom: "24px", position: "relative" }}>
        <div>
          <h2 className="m-text-2" data-8b-motion="embolden">
            Galeria <b>Kompetensi Keahlian</b>
          </h2>
          <p className="m-text-6" style={{ maxWidth: "42rem", margin: "6px 0 0 0", opacity: 0.85 }}>
            Pilih kompetensi keahlian untuk langsung mengakses modul pembelajaran, video praktikum industri, dan lembar kerja teknis terstandar.
          </p>
        </div>
        <Link
          href="/galeria"
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

        {/* Horizontal Scroll Carousel */}
        <div
          ref={carouselRef}
          className="competency-carousel"
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
          {categories.map((item, idx) => (
            <Link
              href="/galeria"
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
                textDecoration: "none",
                transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(15, 30, 54, 0.08)";
                e.currentTarget.style.borderColor = "var(--color-3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(15, 30, 54, 0.04)";
                e.currentTarget.style.borderColor = "color-mix(in srgb, var(--color-3) 12%, transparent)";
              }}
            >
              {/* Thumbnail Foto */}
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
                    background: "rgba(15, 30, 54, 0.85)",
                    color: "#ffffff",
                    padding: "3px 10px",
                    borderRadius: "999px",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {item.category}
                </span>
                <span
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    background: "var(--color-3)",
                    color: "#ffffff",
                    padding: "2px 8px",
                    borderRadius: "999px",
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                  }}
                >
                  {item.modules}
                </span>
              </div>

              {/* Konten Kartu */}
              <div style={{ padding: "18px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
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
                  <span
                    className="m-link"
                    style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--color-3)" }}
                  >
                    Buka Bidang Keahlian →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Scoped Scrollbar Styling */}
      <style jsx>{`
        .competency-carousel::-webkit-scrollbar {
          height: 6px;
        }
        .competency-carousel::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.04);
          border-radius: 999px;
        }
        .competency-carousel::-webkit-scrollbar-thumb {
          background: color-mix(in srgb, var(--color-3) 30%, transparent);
          border-radius: 999px;
        }
        .competency-carousel::-webkit-scrollbar-thumb:hover {
          background: var(--color-3);
        }
      `}</style>
    </section>
  );
}
