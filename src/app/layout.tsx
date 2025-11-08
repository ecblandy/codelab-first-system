import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/landing-page/header/header";
import Footer from "@/components/landing-page/footer";

export const metadata: Metadata = {
  title: "Codelab - Transformamos ideias em produtos digitais",
  description:
    "Codelab é uma agência que transforma ideias em soluções digitais eficientes e inovadoras.",
  keywords: [
    "Codelab",
    "Agência Digital",
    "Desenvolvimento de Software",
    "Frontend",
    "Inovação",
  ],
  authors: [{ name: "Codelab", url: "https://codelab.com.br" }],
  openGraph: {
    type: "website",
    url: "https://codelab.com.br",
    title: "Codelab - Transformamos ideias em produtos digitais",
    description:
      "Codelab é uma agência que transforma ideias em soluções digitais eficientes e inovadoras.",
    siteName: "Codelab",
    images: [
      {
        url: "/assets/images/logo-codelab.svg",
        width: 1200,
        height: 630,
        alt: "Codelab Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
