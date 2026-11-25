"use client";

import React from 'react';

export default function Journal() {
  const testimonials = [
    {
      id: 1,
      name: "Purwanto, ST.M.Pd",
      role: "SMK Negeri 6 Samarinda",
      description: "Sangat bermanfaat bagi guru-guru SMK, materi pengelasan industri sangat aplikatif dan diharapkan program sertifikasi kompetensi terus berkelanjutan.",
      tags: ["Diklat Las MIG & TIG"],
      rating: 5,
    },
    {
      id: 2,
      name: "Rini Tangke Datu",
      role: "SMKN 3 Teknologi & Rekayasa Jayapura",
      description: "Pelatihan mandiri di Galeri Kejuruan memberi kemudahan akses belajar tanpa batas geografis. Sangat mendukung implementasi kurikulum merdeka vokasi.",
      tags: ["Sistem Networking"],
      rating: 5,
    },
    {
      id: 3,
      name: "Anne Lamria Sihombing",
      role: "SMK Negeri 3 Makassar",
      description: "Praktik pembelajaran berbasis proyek (PJBL) energi terbarukan di BMTI membuka wawasan aplikatif mengenai green energy di sekolah kami.",
      tags: ["PJBL PLTS Rooftop"],
      rating: 5,
    },
    {
      id: 4,
      name: "Drs. Hendro Wibowo",
      role: "SMKN 2 Surabaya",
      description: "Modul digital dan video praktikum CAD/CNC memudahkan pengimbasan materi kejuruan kepada rekan pendidik dan peserta didik.",
      tags: ["Desain 3D CAD/CNC"],
      rating: 5,
    },
    {
      id: 5,
      name: "Siti Rahmawati, S.Pd",
      role: "SMKN 1 Cimahi",
      description: "Fasilitas Galeri Kejuruan BMTI menjadi sarana benchmarking terbaik bagi penguatan teaching factory SMK di era digital.",
      tags: ["Teaching Factory"],
      rating: 5,
    }
  ];

  // Gandakan item untuk menciptakan efek continuous infinite loop
  const duplicatedItems = [...testimonials, ...testimonials];

  return (
    <section id="journal" data-8b-section="journal" style={{ padding: "clamp(48px, 6vw, 96px) var(--space-1)" }}>
      {/* Head */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "36px", flexWrap: "wrap", gap: "16px" }}>
        <div>
          <span style={{ display: "inline-block", background: "var(--color-5)", color: "var(--color-3)", padding: "4px 12px", borderRadius: "999px", fontSize: "0.8125rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "12px" }}>
            Suara Peserta
          </span>
          <h2 className="m-text-2" style={{ margin: 0 }}>
            Testimonial <b>Peserta</b>
          </h2>
        </div>
        <a
          className="m-link"
          href="https://sintesa.kejuruan.id/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "0.9375rem", fontWeight: 600 }}
        >
          Kunjungi Portal SINTESA →
        </a>
      </div>

      {/* Marquee Wrapper with Pure CSS */}
      <div className="testimonial-marquee-wrapper">
        <div className="testimonial-marquee-track">
          {duplicatedItems.map((item, idx) => (
            <div className="testimonial-card" key={idx}>
              {/* Card Header: Rating Stars & Badge */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px", gap: "8px" }}>
                <div style={{ display: "flex", gap: "2px", color: "#f59e0b", fontSize: "0.95rem" }} aria-label={`${item.rating} bintang`}>
                  {"★".repeat(item.rating)}
                </div>
                {item.tags && item.tags.length > 0 && (
                  <span style={{
                    fontSize: "0.6875rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    background: "var(--color-5)",
                    color: "var(--color-3)",
                    padding: "3px 8px",
                    borderRadius: "6px"
                  }}>
                    {item.tags[0]}
                  </span>
                )}
              </div>

              {/* Description Quote */}
              <p style={{
                fontSize: "0.9375rem",
                lineHeight: 1.6,
                color: "var(--color-2)",
                opacity: 0.9,
                margin: "0 0 20px 0",
                flex: "1 1 auto",
                display: "-webkit-box",
                WebkitLineClamp: 4,
                WebkitBoxOrient: "vertical",
                overflow: "hidden"
              }}>
                "{item.description}"
              </p>

              {/* Author Info */}
              <div style={{ borderTop: "1px solid color-mix(in srgb, var(--color-2) 15%, transparent)", paddingTop: "14px", marginTop: "auto" }}>
                <h4 style={{ margin: "0 0 4px 0", fontSize: "0.9375rem", fontWeight: 700, color: "var(--color-3)" }}>
                  {item.name}
                </h4>
                <p style={{ margin: 0, fontSize: "0.8125rem", color: "var(--color-2)", opacity: 0.7 }}>
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Local scoped styling tanpa dependensi luar & tanpa preflight reset */}
      <style jsx>{`
        .testimonial-marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 12px 0;
          mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
        }

        .testimonial-marquee-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: marquee 35s linear infinite;
        }

        .testimonial-marquee-track:hover {
          animation-play-state: paused;
        }

        .testimonial-card {
          flex: 0 0 320px;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          padding: 24px;
          border-radius: var(--radius-4, 18px);
          border: 1px solid color-mix(in srgb, var(--color-3) 12%, transparent);
          box-shadow: 0 6px 18px rgba(0, 50, 120, 0.04);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 24px rgba(0, 50, 120, 0.08);
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .testimonial-card {
            flex: 0 0 280px;
            padding: 18px;
          }
        }
      `}</style>
    </section>
  );
}
