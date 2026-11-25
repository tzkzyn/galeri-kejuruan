"use client";

import React from "react";
import { domAnimation, LazyMotion, m } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const MITRA_LOGOS = [
  { name: "Schneider Electric", src: "/images/mitra/schneider.png" },
  { name: "digiroom by AUTO 2000", src: "/images/mitra/auto2000.png" },
  { name: "OSSMAP", src: "/images/mitra/ossmap.png" },
  { name: "Kampuh Welding Cikarang", src: "/images/mitra/kampuh-welding.png" },
  { name: "PT Pindad", src: "/images/mitra/pindad.png" },
  { name: "PT Entec Indonesia", src: "/images/mitra/entec.png" },
  { name: "Hypernet", src: "/images/mitra/hypernet.png" },
];

export default function Hero() {
  const duplicatedLogos = [...MITRA_LOGOS, ...MITRA_LOGOS];

  return (
    <section
      id="hero"
      data-8b-section="hero"
      suppressHydrationWarning
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        width: "100%",
        maxWidth: "none",
        minHeight: "auto",
        overflow: "hidden",
        padding: 0,
        margin: 0,
        background: "var(--color-1, #f7fafc)",
      }}
    >
      <LazyMotion features={domAnimation}>
        {/* Area Hero Putih Bersih dengan Garis Ornamen Biru */}
        <div
          style={{
            position: "relative",
            width: "100%",
            minHeight: "clamp(540px, 82svh, 720px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            background: "linear-gradient(180deg, #ffffff 0%, #f9fcff 72%, #f7fafc 100%)",
          }}
        >
          {/* Ornamen Latar: Lengkungan Geometris & Gelombang Halus Warna Biru */}
          <svg
            aria-hidden="true"
            viewBox="0 0 1440 720"
            preserveAspectRatio="xMidYMid slice"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
              pointerEvents: "none",
            }}
          >
            <defs>
              <linearGradient id="gkArchFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0066cc" stopOpacity="0.07" />
                <stop offset="100%" stopColor="#0066cc" stopOpacity="0.01" />
              </linearGradient>
              <linearGradient id="gkWaveStroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#0066cc" stopOpacity="0.08" />
                <stop offset="50%" stopColor="#0066cc" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0.08" />
              </linearGradient>
              <radialGradient id="gkGlow" cx="50%" cy="38%" r="55%">
                <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </radialGradient>
            </defs>

            <rect width="1440" height="720" fill="url(#gkGlow)" />

            <g fill="url(#gkArchFill)">
              <rect x="0" y="370" width="210" height="390" rx="105" />
              <rect x="290" y="420" width="240" height="360" rx="120" />
              <rect x="605" y="455" width="230" height="330" rx="115" />
              <rect x="920" y="410" width="220" height="370" rx="110" />
              <rect x="1210" y="360" width="240" height="400" rx="120" />
            </g>

            <g fill="none" stroke="rgba(0, 102, 204, 0.16)" strokeWidth="1.25">
              {[0, 14, 28, 42, 56].map((offset) => (
                <rect
                  key={`arch-l-${offset}`}
                  x={85 + offset}
                  y={410 + offset}
                  width={230 - offset * 2}
                  height={380}
                  rx={Math.max(10, 115 - offset)}
                />
              ))}
              {[0, 14, 28, 42, 56].map((offset) => (
                <rect
                  key={`arch-c-${offset}`}
                  x={445 + offset}
                  y={445 + offset}
                  width={240 - offset * 2}
                  height={350}
                  rx={Math.max(10, 120 - offset)}
                />
              ))}
              {[0, 14, 28, 42, 56].map((offset) => (
                <rect
                  key={`arch-r-${offset}`}
                  x={1080 + offset}
                  y={425 + offset}
                  width={230 - offset * 2}
                  height={365}
                  rx={Math.max(10, 115 - offset)}
                />
              ))}
            </g>

            <g fill="none" stroke="url(#gkWaveStroke)" strokeWidth="1.2">
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <path
                  key={`wave-top-${i}`}
                  d={`M -80 ${110 + i * 16} C ${280 + i * 24} ${20 + i * 18}, ${640 - i * 18} ${250 - i * 14}, ${1040 + i * 14} ${120 + i * 15} S 1520 ${190 + i * 12}, 1540 ${90 + i * 14}`}
                  opacity={0.55 - i * 0.05}
                />
              ))}
            </g>

            <g fill="none" stroke="url(#gkWaveStroke)" strokeWidth="1.3">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <path
                  key={`wave-bot-${i}`}
                  d={`M -60 ${560 + i * 14} C ${320 + i * 20} ${440 + i * 16}, ${740 - i * 16} ${670 - i * 10}, ${1120 + i * 12} ${490 + i * 14} S 1490 ${540 + i * 12}, 1520 ${460 + i * 14}`}
                  opacity={0.62 - i * 0.05}
                />
              ))}
            </g>
          </svg>

          {/* Gradasi halus tepi bawah Hero agar menyatu mulus dengan latar halaman */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: "auto 0 0 0",
              height: "120px",
              background:
                "linear-gradient(180deg, rgba(247, 250, 252, 0) 0%, var(--color-1, #f7fafc) 100%)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />

          {/* Konten Teks Rata Tengah */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              width: "100%",
              maxWidth: "820px",
              margin: "0 auto",
              padding: "clamp(112px, 14vh, 148px) var(--space-1) clamp(80px, 11vh, 120px)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <m.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.06, ease: EASE }}
              style={{
                margin: 0,
                fontFamily: "var(--font-1)",
                fontWeight: 800,
                fontSize: "clamp(2.4rem, 5vw, 4.1rem)",
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                color: "#0066cc",
              }}
            >
              Selamat Datang
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
              style={{
                margin: "10px 0 0",
                fontFamily: "var(--font-1)",
                fontWeight: 700,
                fontSize: "clamp(1.1rem, 2vw, 1.65rem)",
                lineHeight: 1.35,
                color: "#e5a400",
              }}
            >
              Di Galeri Kejuruan BBPPMPV BMTI
            </m.p>

            <m.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26, ease: EASE }}
              style={{
                margin: "18px auto 0",
                maxWidth: "620px",
                fontFamily: "var(--font-2)",
                fontSize: "clamp(0.92rem, 1.12vw, 1.05rem)",
                lineHeight: 1.65,
                color: "#334155",
              }}
            >
              Perwujudan gagasan lewat materi kejuruan sebagai pusat sumber belajar dan peningkatan
              kompetensi guru serta siswa vokasi secara virtual, kapan dan di mana saja.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.36, ease: EASE }}
              style={{
                marginTop: "32px",
              }}
            >
              <a
                href="#pelatihan-mandiri"
                className="gk-hero-btn-blue"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "48px",
                  padding: "0 32px",
                  borderRadius: "9999px",
                  background: "#0066cc",
                  color: "#ffffff",
                  fontFamily: "var(--font-1)",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  boxShadow: "0 10px 24px rgba(0, 102, 204, 0.28)",
                  transition:
                    "transform 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease",
                }}
              >
                Pelajari Selengkapnya
              </a>
            </m.div>
          </div>
        </div>

        {/* Bar Putih Melayang Mitra Industri (Marquee berjalan tepat di perbatasan Hero & bg) */}
        <div
          style={{
            position: "relative",
            zIndex: 4,
            width: "100%",
            padding: "0 var(--space-1) clamp(44px, 6vw, 76px)",
            marginTop: "-46px",
          }}
        >
          <div className="gk-mitra-floating-bar">
            <div className="gk-mitra-marquee-wrapper">
              <div className="gk-mitra-marquee-track">
                {duplicatedLogos.map((logo, idx) => (
                  <div className="gk-mitra-item" key={`${logo.name}-${idx}`}>
                    <img
                      src={logo.src}
                      alt={logo.name}
                      loading="lazy"
                      className="gk-mitra-img"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </LazyMotion>

      <style>{`
        .gk-hero-btn-blue:hover {
          background: #ffd200 !important;
          color: #0f1e36 !important;
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(234, 179, 8, 0.36) !important;
        }
        .gk-mitra-floating-bar {
          width: 100%;
          max-width: 1120px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 20px;
          padding: 20px 24px;
          box-shadow: 0 14px 40px rgba(15, 30, 54, 0.10);
          border: 1px solid rgba(15, 30, 54, 0.05);
          overflow: hidden;
        }
        .gk-mitra-marquee-wrapper {
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
        }
        .gk-mitra-marquee-track {
          display: flex;
          align-items: center;
          gap: clamp(44px, 6vw, 84px);
          width: max-content;
          animation: gkMitraScroll 26s linear infinite;
          padding: 4px 0;
        }
        .gk-mitra-marquee-wrapper:hover .gk-mitra-marquee-track {
          animation-play-state: paused;
        }
        .gk-mitra-item {
          flex: 0 0 auto;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.25s ease, opacity 0.25s ease;
        }
        .gk-mitra-item:hover {
          transform: scale(1.06);
        }
        .gk-mitra-img {
          max-height: 46px;
          max-width: 175px;
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
        }
        @keyframes gkMitraScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 22px));
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .gk-mitra-marquee-track {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
