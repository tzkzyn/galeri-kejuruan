"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    gsap?: any;
    ScrollTrigger?: any;
    SplitText?: any;
    Lenis?: any;
    lenis?: any;
    initSoftlife?: () => void;
    cleanupSoftlife?: () => void;
    _softlifeInitDone?: boolean;
    refreshScroll?: () => void;
  }
}

export default function ScriptLoader() {
  const pathname = usePathname();

  useEffect(() => {
    let isMounted = true;
    let initTimer: ReturnType<typeof setTimeout> | null = null;
    let refreshTimer: ReturnType<typeof setTimeout> | null = null;

    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
          resolve();
          return;
        }
        const s = document.createElement("script");
        s.src = src;
        s.async = false;
        s.onload = () => resolve();
        s.onerror = (e) => reject(e);
        document.body.appendChild(s);
      });
    };

    async function init() {
      try {
        await loadScript("https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js");
        await loadScript("https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js");
        await loadScript("https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/SplitText.min.js");
        await loadScript("https://cdn.jsdelivr.net/npm/lenis@1.3.11/dist/lenis.min.js");

        if (!isMounted) return;

        await loadScript("/init-scripts.js");

        if (!isMounted) return;

        if (pathname === "/") {
          // Tunggu hydration React benar-benar selesai sebelum SplitText / GSAP menyentuh DOM
          requestAnimationFrame(() => {
            if (!isMounted) return;
            initTimer = setTimeout(() => {
              if (!isMounted) return;
              window._softlifeInitDone = false;
              if (typeof window.initSoftlife === "function") {
                window.initSoftlife();
              }

              refreshTimer = setTimeout(() => {
                if (!isMounted) return;
                if (window.ScrollTrigger) {
                  window.ScrollTrigger.sort();
                  window.ScrollTrigger.refresh();
                }
                if (typeof window.refreshScroll === "function") {
                  window.refreshScroll();
                }
                if (window.location.hash) {
                  const target = document.querySelector(window.location.hash);
                  if (target) {
                    const bar = document.querySelector("#nav .nav__bar");
                    const offset = bar ? (bar as HTMLElement).offsetHeight + 10 : 70;
                    const y = target.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top: Math.max(0, y), behavior: "instant" });
                  }
                }
              }, 260);
            }, 160);
          });
        } else {
          if (typeof window.cleanupSoftlife === "function") {
            window.cleanupSoftlife();
          } else if (window.ScrollTrigger) {
            window.ScrollTrigger.getAll().forEach((t: any) => t.kill());
          }
        }
      } catch (err) {
        console.error("Failed to initialize animations:", err);
      }
    }

    init();

    return () => {
      isMounted = false;
      if (initTimer) clearTimeout(initTimer);
      if (refreshTimer) clearTimeout(refreshTimer);
      if (typeof window.cleanupSoftlife === "function") {
        window.cleanupSoftlife();
      }
    };
  }, [pathname]);

  return null;
}
