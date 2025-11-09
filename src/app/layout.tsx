import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/landing-page/header/header";
import Footer from "@/components/landing-page/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://codelab.services"),
  title: {
    default: "Codelab - Transformamos ideias em produtos digitais",
    template: "%s | Codelab",
  },
  description:
    "A Codelab é uma agência especializada em desenvolvimento web, sistemas e produtos digitais. Transformamos ideias em soluções modernas e escaláveis.",
  keywords: [
    "Codelab",
    "Agência Digital",
    "Desenvolvimento Web",
    "Software sob medida",
    "Frontend",
    "Next.js",
    "React",
    "Inovação Tecnológica",
    "Criação de Sites",
    "Soluções Digitais",
  ],
  authors: [{ name: "Codelab", url: "https://codelab.services" }],
  creator: "Codelab",
  publisher: "Codelab",
  alternates: {
    canonical: "https://codelab.services",
  },
  openGraph: {
    type: "website",
    url: "https://codelab.services",
    title: "Codelab - Transformamos ideias em produtos digitais",
    description:
      "A Codelab cria soluções digitais inovadoras para empresas e empreendedores. Websites, sistemas e plataformas que geram resultados.",
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
  twitter: {
    card: "summary_large_image",
    site: "@codelab",
    title: "Codelab - Transformamos ideias em produtos digitais",
    description:
      "Codelab é uma agência de tecnologia que transforma ideias em produtos digitais inovadores.",
    images: ["/assets/images/logo-codelab.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/assets/images/favi.png",
    shortcut: "/assets/images/favi.png",
    apple: "/assets/images/favi.png",
  },
  category: "Tecnologia",
  applicationName: "Codelab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-QYWB792MLT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QYWB792MLT');
          `}
        </Script>

        {/* Layout principal */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
