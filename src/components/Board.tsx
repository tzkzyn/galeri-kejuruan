"use client";

import React from "react";

const STATS = [
  {
    value: "124.396+",
    label: "Pengunjung Portal",
  },
  {
    value: "1.080+",
    label: "Sertifikat Terbit",
  },
  {
    value: "210+",
    label: "Peserta Pelatihan Mandiri",
  },
  {
    value: "7+",
    label: "Mitra Industri & DUDI",
  },
];

export default function Board() {
  return (
    <section
      id="board"
      data-8b-section="board"
      style={{
        width: "100%",
        maxWidth: "none",
        padding: "clamp(24px, 3vw, 40px) 0",
      }}
    >
      {/* Banner Khusus Statistik (Gaya Capaian BBPPMPV BMTI dengan Data Galeri Kejuruan) */}
      <div
        className="gk-stats-banner"
        style={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          background:
            "linear-gradient(120deg, #f27b13 0%, #f7971a 38%, #fbad1e 70%, #f38114 100%)",
          padding: "clamp(52px, 7vw, 84px) var(--space-1)",
          color: "#ffffff",
        }}
      >
        {/* Pola garis cahaya diagonal */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 22%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0) 64%, rgba(255,255,255,0.14) 82%, rgba(255,255,255,0) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Pola titik halftone kiri */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "340px",
            height: "100%",
            backgroundImage:
              "radial-gradient(rgba(214, 92, 0, 0.32) 3px, transparent 3.5px)",
            backgroundSize: "18px 18px",
            maskImage: "linear-gradient(120deg, rgba(0,0,0,0.85) 0%, transparent 78%)",
            WebkitMaskImage: "linear-gradient(120deg, rgba(0,0,0,0.85) 0%, transparent 78%)",
            pointerEvents: "none",
          }}
        />

        {/* Pola titik halftone kanan bawah */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "320px",
            height: "100%",
            backgroundImage:
              "radial-gradient(rgba(214, 92, 0, 0.30) 3px, transparent 3.5px)",
            backgroundSize: "18px 18px",
            maskImage: "linear-gradient(300deg, rgba(0,0,0,0.85) 0%, transparent 76%)",
            WebkitMaskImage: "linear-gradient(300deg, rgba(0,0,0,0.85) 0%, transparent 76%)",
            pointerEvents: "none",
          }}
        />

        {/* Konten Banner Statistik */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1160px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-1)",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3vw, 2.45rem)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            Capaian Galeri Kejuruan
          </h2>
          <p
            style={{
              margin: "12px auto 0",
              maxWidth: "600px",
              fontFamily: "var(--font-2)",
              fontSize: "clamp(0.92rem, 1.15vw, 1.05rem)",
              lineHeight: 1.55,
              color: "rgba(255, 255, 255, 0.94)",
            }}
          >
            Capaian kami adalah bukti nyata komitmen dan dedikasi BBPPMPV BMTI dalam
            menciptakan mutu pendidikan vokasi yang berkualitas.
          </p>

          {/* 4 Kartu Statistik Glassmorphism */}
          <div className="gk-stats-grid">
            {STATS.map((item) => (
              <div key={item.label} className="gk-stat-card">
                <div
                  style={{
                    fontFamily: "var(--font-1)",
                    fontSize: "clamp(1.85rem, 2.8vw, 2.55rem)",
                    fontWeight: 800,
                    lineHeight: 1.15,
                    color: "#ffffff",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.value}
                </div>
                <div
                  style={{
                    marginTop: "8px",
                    fontFamily: "var(--font-2)",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: "rgba(255, 255, 255, 0.95)",
                    lineHeight: 1.35,
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .gk-stats-grid {
          margin-top: clamp(28px, 4vw, 44px);
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(14px, 2vw, 22px);
        }
        .gk-stat-card {
          background: rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.28);
          border-top: 2.5px solid rgba(255, 255, 255, 0.58);
          border-radius: 16px;
          padding: clamp(28px, 3.2vw, 38px) 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          box-shadow: 0 10px 26px rgba(176, 78, 0, 0.12);
          transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.28s ease, box-shadow 0.28s ease;
        }
        .gk-stat-card:hover {
          transform: translateY(-6px);
          background: rgba(255, 255, 255, 0.24);
          border-top-color: rgba(255, 255, 255, 0.85);
          box-shadow: 0 18px 34px rgba(160, 68, 0, 0.22);
        }
        @media (max-width: 960px) {
          .gk-stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 520px) {
          .gk-stats-grid {
            grid-template-columns: minmax(0, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
