import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTopButton } from "@/components/ui/ScrollToTopButton";

export const metadata: Metadata = {
  title: {
    default: "Analyste en Cybersécurité | Portfolio",
    template: "%s | Cybersecurity Analyst Portfolio",
  },
  description:
    "Analyste en cybersécurité spécialisé en défense des systèmes, détection d'incidents et réponse aux menaces.",
  keywords: [
    "Cybersecurity Analyst",
    "Blue Team",
    "Cybersecurity",
    "SIEM",
    "Threat Hunting",
    "Incident Response",
  ],
  authors: [{ name: "Cybersecurity Analyst" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Cybersecurity Analyst | Blue Team Portfolio",
    description:
      "Analyste en cybersécurité spécialisé en défense des systèmes.",
    siteName: "Cybersecurity Analyst Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cybersecurity Analyst | Blue Team Portfolio",
    description:
      "Analyste en cybersécurité spécialisé en défense des systèmes.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0B0F19] text-[#EAF2FF] font-inter antialiased">
        <Navbar />
        <main>{children}</main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
