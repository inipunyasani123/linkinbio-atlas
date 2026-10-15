import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-archivo", weight: ["500", "600", "700", "800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const __jsonld = {"@context":"https://schema.org","@type":"Organization","name":"Atlas Studio","description":"Konsultan brand & desain","url":"https://linkinbio-atlas.pintuweb.id"};

export const metadata = {
  metadataBase: new URL("https://linkinbio-atlas.pintuweb.id"),
  title: { default: "Atlas Studio — Konsultan Brand & Desain, Bandung", template: "%s — Atlas Studio" },
  description: "Tautan Atlas Studio, konsultan brand dan desain di Bandung: indeks lima karya, catatan studio, layanan dengan harga tetap, dan jadwal pertemuan 30 menit.",
  applicationName: "Atlas Studio",
  keywords: ["konsultan brand bandung", "desain identitas", "link in bio studio desain", "harga desain logo", "studio desain"],
  authors: [{ name: "Atlas Studio" }],
  creator: "Atlas Studio",
  publisher: "Atlas Studio",
  alternates: { canonical: "https://linkinbio-atlas.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://linkinbio-atlas.pintuweb.id",
    siteName: "Atlas Studio",
    title: "Atlas Studio — Konsultan Brand & Desain, Bandung",
    description: "Tautan Atlas Studio, konsultan brand dan desain di Bandung: indeks lima karya, catatan studio, layanan dengan harga tetap, dan jadwal pertemuan 30 menit.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Atlas Studio — Konsultan Brand & Desain, Bandung" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atlas Studio — Konsultan Brand & Desain, Bandung",
    description: "Tautan Atlas Studio, konsultan brand dan desain di Bandung: indeks lima karya, catatan studio, layanan dengan harga tetap, dan jadwal pertemuan 30 menit.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${archivo.variable} ${inter.variable}`}>
      <body className="antialiased">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        <aside aria-label="Tentang situs demo ini" style={{ display: 'block', margin: 0, padding: '12px 16px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          Situs demo buatan PintuWeb — nama dan isinya rekaan.{' '}
          <a href="https://www.pintuweb.id/kontak?demo=atlas" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Buat yang seperti ini →</a>
        </aside>
        </body>
    </html>
  );
}
