import type { Metadata } from "next";
import ScriptLoader from "@/components/ScriptLoader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Galeri Kejuruan — BBPPMPV BMTI Kemendikbudristek",
  description:
    "Galeri Kejuruan adalah Perwujudan Gagasan lewat Materi Kejuruan: pusat sumber belajar, pelatihan mandiri & terbimbing, upskilling, reskilling, dan pameran inovasi vokasi oleh BBPPMPV BMTI.",
  generator: "Galeri Kejuruan",
  openGraph: {
    type: "website",
    title: "Galeri Kejuruan — BBPPMPV BMTI",
    description:
      "Perwujudan Gagasan lewat Materi Kejuruan: Pusat belajar, pelatihan vokasi, dan inovasi teknologi industri BBPPMPV BMTI.",
    images: ["/images/galeria/1670330609_Grafis_Teknik-pemesinan.jpg"],
  },
  icons: {
    icon: "/images/logo/logo-gk.png",
    shortcut: "/images/logo/logo-gk.png",
    apple: "/images/logo/logo-gk.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="m-text">
        {children}
        <ScriptLoader />
      </body>
    </html>
  );
}
