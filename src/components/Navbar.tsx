"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Beranda", href: "/", external: false, sectionId: "hero" },
  { label: "Pelatihan Terbimbing", href: "/#clubs", external: false, sectionId: "clubs" },
  { label: "Galeria", href: "/galeria", external: false, sectionId: "week" },
  { label: "Pelatihan Mandiri", href: "/pelatihan-mandiri", external: false, sectionId: "edit" },
  { label: "Alur Belajar", href: "/#membership", external: false, sectionId: "membership" },
  { label: "Metaverse", href: "https://linktr.ee/metaversebmti", external: true, sectionId: null },
];

const SCROLL_SECTIONS = [
  { id: "hero", label: "Beranda" },
  { id: "manifesto", label: "Beranda" },
  { id: "clubs", label: "Pelatihan Terbimbing" },
  { id: "week", label: "Galeria" },
  { id: "edit", label: "Pelatihan Mandiri" },
  { id: "membership", label: "Alur Belajar" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [activeLabel, setActiveLabel] = useState("Beranda");
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);

  useEffect(() => {
    if (!isHome) {
      const matched = NAV_LINKS.find((item) => !item.external && item.href === pathname);
      setActiveLabel(matched ? matched.label : "Beranda");
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 140);

      if (!isHome) return;

      const triggerY = window.innerHeight * 0.42;
      let current = "Beranda";

      for (const sec of SCROLL_SECTIONS) {
        const el = document.getElementById(sec.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerY) {
          current = sec.label;
        }
      }

      setActiveLabel(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome, pathname]);

  return (
    <header id="nav" data-8b-section="navigation">
      {/* Navbar Atas: Transparan menyatu dengan Hero biru (tanpa tombol burger) */}
      <div
        className="nav__bar"
        style={{
          position: isHome ? "absolute" : "relative",
          inset: isHome ? "0 0 auto 0" : undefined,
          zIndex: 50,
          background: isHome ? "transparent" : "#f7fafc",
          borderBottom: isHome
            ? "none"
            : "1px solid color-mix(in srgb, var(--color-3) 14%, transparent)",
          backdropFilter: "none",
          WebkitBackdropFilter: "none",
          color: "var(--color-2)",
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          className="nav__inner"
          style={{
            padding: "18px 0",
          }}
        >
          {/* Logo */}
          <Link
            className="nav__logo"
            href="/"
            aria-label="Galeri Kejuruan"
            style={{
              display: "inline-flex",
              alignItems: "center",
              flexShrink: 0,
            }}
          >
            <img
              src="/images/logo/logo-galeri-kejuruan.png"
              alt="Logo Galeri Kejuruan"
              style={{
                height: "64px",
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Link>

          {/* Navigation Links (Desktop & Tablet) */}
          <nav aria-label="Main" className="gk-top-nav">
            <ul className="gk-top-nav-list">
              {NAV_LINKS.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      className="gk-top-link gk-top-link--dark"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      className="gk-top-link gk-top-link--dark"
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Login Button */}
          <a
            className="m-btn nav__cta gk-login-btn"
            href="https://sintesa.kejuruan.id/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="m-btn__label">LOGIN</span>
          </a>
        </div>
      </div>

      {/* Floating Dock Navbar di Bawah Tengah (Frosted Glass, tanpa logo) */}
      <nav
        aria-label="Navigasi Cepat"
        className={`gk-bottom-dock ${scrolled ? "gk-bottom-dock--visible" : ""}`}
        onMouseLeave={() => setHoveredLabel(null)}
      >
        <ul className="gk-dock-list">
          {NAV_LINKS.map((item) => {
            const highlightedLabel = hoveredLabel ?? activeLabel;
            const isLit = highlightedLabel === item.label;
            return (
              <li
                key={`dock-${item.label}`}
                onMouseEnter={() => setHoveredLabel(item.label)}
              >
                {item.external ? (
                  <a
                    className={`gk-dock-link ${isLit ? "gk-dock-link--active" : ""}`}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    className={`gk-dock-link ${isLit ? "gk-dock-link--active" : ""}`}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <a
          href="https://sintesa.kejuruan.id/"
          target="_blank"
          rel="noopener noreferrer"
          className="gk-dock-cta"
        >
          Login
        </a>
      </nav>

      <style>{`
        .gk-top-nav {
          margin-left: auto;
        }
        .gk-top-nav-list {
          display: flex;
          align-items: center;
          gap: clamp(14px, 2vw, 28px);
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .gk-top-link {
          font-family: var(--font-2);
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          transition: opacity 0.2s ease, color 0.2s ease;
          white-space: nowrap;
        }
        .gk-top-link--light {
          color: rgba(255, 255, 255, 0.9);
        }
        .gk-top-link--light:hover {
          color: #ffffff;
          opacity: 1;
        }
        .gk-top-link--dark {
          color: var(--color-2);
        }
        .gk-top-link--dark:hover {
          color: var(--color-3);
        }
        .gk-login-btn {
          background: #ffd200 !important;
          color: #0f1e36 !important;
          font-weight: 700;
          flex-shrink: 0;
          padding: 0.7em 1.5em !important;
        }
        .gk-login-btn::before {
          background: #0056b3 !important;
        }
        .gk-login-btn:hover {
          color: #ffffff !important;
        }

        .gk-bottom-dock {
          position: fixed;
          left: 50%;
          bottom: 20px;
          z-index: 60;
          transform: translateX(-50%) translateY(24px);
          opacity: 0;
          pointer-events: none;
          display: flex;
          align-items: center;
          gap: 6px;
          max-width: calc(100vw - 24px);
          padding: 6px;
          border-radius: 9999px;
          background: rgba(226, 234, 243, 0.68);
          backdrop-filter: blur(18px) saturate(160%);
          -webkit-backdrop-filter: blur(18px) saturate(160%);
          border: 1px solid rgba(255, 255, 255, 0.60);
          box-shadow: 0 12px 32px rgba(15, 30, 54, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.55);
          transition: opacity 0.32s cubic-bezier(0.22, 1, 0.36, 1), transform 0.32s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .gk-bottom-dock--visible {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
          pointer-events: auto;
        }
        .gk-dock-list {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
          margin: 0;
          padding: 0;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .gk-dock-list::-webkit-scrollbar {
          display: none;
        }
        .gk-dock-link {
          display: inline-block;
          padding: 9px 15px;
          border-radius: 9999px;
          color: #0f1e36;
          font-family: var(--font-2);
          font-size: 0.84rem;
          font-weight: 500;
          text-decoration: none;
          white-space: nowrap;
          transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
        }
        .gk-dock-link:hover,
        .gk-dock-link--active {
          background: rgba(255, 255, 255, 0.88);
          color: #0f1e36;
          box-shadow: 0 2px 8px rgba(15, 30, 54, 0.08);
        }
        .gk-dock-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 9px 20px;
          border-radius: 9999px;
          background: #0f1e36;
          color: #ffffff;
          font-family: var(--font-1);
          font-size: 0.84rem;
          font-weight: 600;
          text-decoration: none;
          flex-shrink: 0;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }
        .gk-dock-cta:hover {
          background: #1b3154;
          transform: translateY(-1px);
        }

        @media (max-width: 1023px) {
          .gk-top-nav {
            display: none;
          }
          #nav .nav__cta {
            margin-left: auto;
          }
        }
      `}</style>
    </header>
  );
}
